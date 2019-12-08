const config = require('./config/site');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
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
        // jquery: '', //'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        // js: 'https://cdn.snipcart.com/themes/v3.0.4/default/snipcart.js',
        // styles: 'https://cdn.snipcart.com/themes/v3.0.4/default/snipcart.css',
        jquery: 'https://code.jquery.com/jquery-3.4.1.min.js',
        js: 'https://cdn.snipcart.com/scripts/2.0/snipcart.js',
        styles: 'https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css',
        apiKey:
          'OWRmMjdlZWUtNzM1NS00YmQzLWFlN2EtOGU2MTIyOGQyZDQ4NjM2OTUwMjk5ODUzNDc5OTgw',
        autopop: true,
      },
    },
    /* {
      resolve: 'gatsby-source-google-sheets',
      options: {
          spreadsheetId: '1L6b9PCnciNzXXnWrv_MjC1WTGWZjiE31LhVxU3zZExQ',
          worksheetTitle: 'echeveria\x20(test\x20words)',
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    // {
    //   resolve: "gatsby-plugin-guess-js",
    //   options: {
    //     // Find the view id in the GA admin in a section labeled "views"
    //     GAViewID: `VIEW_ID`,
    //     // Add a JWT to get data from GA
    //     jwt: {
    //       client_email: `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
    //       private_key: `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`,
    //     },
    //     minimumThreshold: 0.03,
    //     // The "period" for fetching analytic data.
    //     period: {
    //       startDate: new Date("2018-1-1"),
    //       endDate: new Date(),
    //     },
    //   },
    // },
  ],
};
