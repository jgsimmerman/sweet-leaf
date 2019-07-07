const config = require('./config/site');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-mdx`,
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
          'gatsby-remark-prismjs',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: process.env.NODE_ENV !== 'production',
        // eslint-disable-next-line
        labelFormat: `[filename]--[local]`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.title,
        short_name: config.shortName,
        description: config.description,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
          jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
          apiKey: 'OWRmMjdlZWUtNzM1NS00YmQzLWFlN2EtOGU2MTIyOGQyZDQ4NjM2OTUwMjk5ODUzNDc5OTgw',
          autopop: true,
      }
    },
    /* {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1L6b9PCnciNzXXnWrv_MjC1WTGWZjiE31LhVxU3zZExQ',
          worksheetTitle: 'Echiveria\x20(test\x20words)',
          credentials: require('./succulents-eceeb0db1c4f.json')
      }
    },
    {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1L6b9PCnciNzXXnWrv_MjC1WTGWZjiE31LhVxU3zZExQ',
          worksheetTitle: 'Senecio',
          credentials: require('./succulents-eceeb0db1c4f.json')
      }
    }, */
  ],
};
