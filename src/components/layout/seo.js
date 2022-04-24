import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

function SEO() {
  const dataQuery = useStaticQuery(graphql`
    {
      sanityConfig(content_id: { eq: "meta" }) {
        title
        description
        og_url
        og_type
        og_image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const {
    sanityConfig: {
      title, description, url, type, image,
    },
  } = dataQuery;
  console.log(dataQuery);

  return (
    <Helmet encodeSpecialCharacters defaultTitle={title} defer={false}>
      {/* html attributes */}
      <html lang="en" amp />

      {/* body attributes */}
      <body className="root" />

      {/* title attributes and value */}
      <title itemProp="name" lang="en">
        {title}
      </title>

      {/* base element */}
      <base target="_blank" href={title} />

      {/* multiple meta elements */}
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={<GatsbyImage image={image} />} />
      <meta property="og:type" content={type} />

      {/* multiple link elements */}
      <link rel="canonical" href={url} />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}

export default SEO;
