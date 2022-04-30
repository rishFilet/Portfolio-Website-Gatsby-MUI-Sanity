import { graphql, useStaticQuery } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};
const successCode = 200;
const errorCode = 400;
const request = require('request');
const mailgun = require('mailgun.js');

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere',
});
// const mg = mailgun({
//   apiKey: process.env.MAILGUN_API_KEY,
//   domain: process.env.MAILGUN_DOMAIN,
// });

function handler(event, context, callback) {
  const dataQuery = useStaticQuery(graphql`
    {
      sanityFiles(title: { eq: "Resume" }) {
        title
        file {
          asset {
            url
            originalFilename
          }
        }
      }
    }
  `);

  const {
    sanityConfig: {
      file: {
        asset: { url, originalFilename },
      },
    },
  } = dataQuery;
  const file = request(url);
  const data = JSON.parse(event.body);
  const { email } = data;
  const recipients = [process.env.MY_EMAIL_ADDRESS];
  const mailOptions = {
    from: `Rishi Khan <${process.env.MY_EMAIL_ADDRESS}>`,
    to: email,
    bcc: recipients,
    subject: process.env.EMAIL_SUBJECT,
    replyTo: process.env.MY_EMAIL_ADDRESS,
    template: process.env.EMAIL_TEMPLATE_NAME,
    attachment: { data: file, filename: originalFilename },
  };

  mg.messages
    .create(process.env.MAILGUN_DOMAIN, mailOptions)
    .then((msg) => callback(null, {
      statusCode: successCode,
      headers,
      body: JSON.stringify(msg),
    })) // logs response data
    .catch((err) => callback(null, {
      statusCode: errorCode,
      headers,
      body: JSON.stringify(err),
    })); // logs any error
  // mg.messages().send(mailOptions, (error, body) => {
  //   if (error) {
  //     callback(null, {
  //       statusCode: errorCode,
  //       headers,
  //       body: JSON.stringify(error),
  //     });
  //   } else {
  //     callback(null, {
  //       statusCode: successCode,
  //       headers,
  //       body: JSON.stringify(body),
  //     });
  //   }
  // });
  return null;
}

export default handler;
