const path = require('path');
// const {
//   api: { projectId, dataset },
// } = require('./rkportfoliowebsite/sanity.json');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Rishi Khan | Fullstack Software Engineer',
    siteUrl: 'https://rishikhan.dev',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Prompt',
              variants: ['400', '500', '700'],
            },
            {
              family: 'Libre Barcode 39 Text',
              variants: ['400'],
            },
            {
              family: 'Darker Grotesque',
              variants: ['400', '600', '700', '800'],
            },
            {
              family: 'Red Hat Text',
              variants: ['400'],
            },
            {
              family: 'Monofett',
              variants: ['400'],
            },
            {
              family: 'Montserrat',
              variants: ['400', '600', '700', '800'],
            },
            {
              family: 'Open Sans',
              variants: ['400', '600', '700', '800'],
            },
            {
              family: 'Major Mono Display',
              variants: ['400'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@shared': path.resolve(__dirname, 'src/components/shared'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@assets': path.resolve(__dirname, 'src/assets'),
        },
        extensions: ['js'],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
      },
    },
  ],
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:9001',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
};
