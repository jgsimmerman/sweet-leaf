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
/*   {
      resolve: `gatsby-source-google-spreadsheet`,
      options:{
        spreadsheetId: '14RlNoAhI4kRybdtMvMzNyclFYSm6DEFz-wYT-lL5j5k',
        spreadsheetName: "MySheet",
        credentials:{
          client_email: 'fetchsucculents@succulents-245317.iam.gserviceaccount.com', //process.env.CLIENT_EMAIL,
          private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEJLsSsqm51L12\nTaL/oek1q52pUtAeXynJsbyennSgy6EaeIagxVp1Oz8cRBH8bNHb0A8Wd6vURmA/\nKJ1vKnZBZRFufUzI4JV2ePa4hdu5rdEp+1Uaz7r6m+IwxiJqRa9XMTXtPr5lqACm\noIcbgmeaqFsTyNm7B2BnDpeQgRJ7VfqmpL9ctWIz6lXiRInsnIU+OyqPaWdiWZAv\nKJaIyjrYdCoGcFa+PPP9lgtCVYuVM/CR9zmG38NTWa54UPTuau6oWtrZnR26BHnd\n0+IY5E5Vg9w7xuvROyaJzmkoavF/eAvRXLTggeEaxUbRssf2QQ2ESsJRInfvyX9c\nE2B2y8kLAgMBAAECggEAAxPssnaxXMmJUgEy34jRKb3wRlrBX2X34tgSNLJSnr6m\n0bDLs5R4xb5/F04RefZGElByp7eny/7/YYc5rv0Na6nV13e7jAASoTrKlos49kdv\n6dw7uQiYAT/zEWmkTLhHGnrFfAbXTTvYC6jf+zRce7ho7CCcVERFMwxZ2Q+XN+5S\nqfoViZOYpa4k7hmH01QEMfhOh8DeH0VSFEDa6jOKmhq6C/LRHwy89JTaLyNWmW9q\nL7OVCcTrQgGlU0FVTTP0NA7/0vcdBjmQwy/BDIjTkYmNEr/k/zPtBKh6r9v4T/qb\njoSCRytEmGpSqMAcGZxF+vva27YbFTYYnImNIyRNOQKBgQD5iLA3+Z0a1ClLHvzY\nThV/7Os027jxjBswWigg7dxMVkI/dpr3CAvhBORyfTk5NkiQ1TzmTpnMek+Bhb8x\nPlFFvFTbQwOjdOHi5F58Z6VlyPIapuI6XSneTcUoxT9fTbLlqAuGyxaR8q5uRf20\nAErA/gCiKoMI1RpXfarwXOiFMwKBgQDJOd7o3BWjEI/ydXFlF/oa4aNBZ3HCmSid\nwagdjUNIHaejSCkxDlzikjyLwjp+hBcEhArkXvckfYL907ey4DubcuULQWWiCvWQ\nTRiRzl/Pomd6q+Zm6knYeGct6OQjzilV8/lJ0rUfBoDtmpOM+/fPt6kpGJEoYjU4\n/4RboG/8yQKBgBFJQsvd4uBE6kdl8iYZ4qtmAjU7M2ioSAnldPozABvZreUvljSe\nvhPsftbfjeNEu2otG3bo4wajQna6iTAkHQUzsr0tu0bLhgptv43msDKI5Ryriuh4\nI7pesNXONEGp5Ea8iW/hCcM6iJLjDlw12PfdoLWbNFCcUqLU9c6I4SK5AoGAYUVY\nO7gnvWuEKfAboIK2o8fu4u7eTvM6bwft/FsM6w9qucNoJg6LV/rYybZaEE5J0iUC\nHuLJFRqW95wgcJd0OPCRR5+VQX+KtPaPqevY5MXcv6/Y8GbQy5NoTQkHP0epM6N8\nHfN9GkJKkJDoQn6KjB575yG5CYxvrd3WXXRwrgECgYEAgnr7Yc6IZX5iGNz34za6\nhiZ65P1kF5FvZzhoTMVcZHbG5fxcOmGTmp23YAJ2JKazrkXtxlzebxLF9BX6kazm\n/6a9cFwil0xAHsXxu0mwGwOE6VPrHKQffIFsJFNSME1W4VMkwoYLnJsQf4BeNamP\nsadMJSyRXMGg1TRDoGk4Kww=\n-----END PRIVATE KEY-----\n", //process.env.PRIVATE_KEY,
        },
        mapValue: value => typeof value === "string" ? value.trim() : value
      }
    }, */ 
    /* {
      resolve: `gatsby-source-google-sheet`,
      options: {
        // For protected spreadsheets you can use two-legged OAuth as described here:
        // https://www.npmjs.com/package/google-spreadsheet#service-account-recommended-method
        creds: {
          client_email: `fetchsucculents@succulents-245317.iam.gserviceaccount.com`,
          private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEJLsSsqm51L12\nTaL/oek1q52pUtAeXynJsbyennSgy6EaeIagxVp1Oz8cRBH8bNHb0A8Wd6vURmA/\nKJ1vKnZBZRFufUzI4JV2ePa4hdu5rdEp+1Uaz7r6m+IwxiJqRa9XMTXtPr5lqACm\noIcbgmeaqFsTyNm7B2BnDpeQgRJ7VfqmpL9ctWIz6lXiRInsnIU+OyqPaWdiWZAv\nKJaIyjrYdCoGcFa+PPP9lgtCVYuVM/CR9zmG38NTWa54UPTuau6oWtrZnR26BHnd\n0+IY5E5Vg9w7xuvROyaJzmkoavF/eAvRXLTggeEaxUbRssf2QQ2ESsJRInfvyX9c\nE2B2y8kLAgMBAAECggEAAxPssnaxXMmJUgEy34jRKb3wRlrBX2X34tgSNLJSnr6m\n0bDLs5R4xb5/F04RefZGElByp7eny/7/YYc5rv0Na6nV13e7jAASoTrKlos49kdv\n6dw7uQiYAT/zEWmkTLhHGnrFfAbXTTvYC6jf+zRce7ho7CCcVERFMwxZ2Q+XN+5S\nqfoViZOYpa4k7hmH01QEMfhOh8DeH0VSFEDa6jOKmhq6C/LRHwy89JTaLyNWmW9q\nL7OVCcTrQgGlU0FVTTP0NA7/0vcdBjmQwy/BDIjTkYmNEr/k/zPtBKh6r9v4T/qb\njoSCRytEmGpSqMAcGZxF+vva27YbFTYYnImNIyRNOQKBgQD5iLA3+Z0a1ClLHvzY\nThV/7Os027jxjBswWigg7dxMVkI/dpr3CAvhBORyfTk5NkiQ1TzmTpnMek+Bhb8x\nPlFFvFTbQwOjdOHi5F58Z6VlyPIapuI6XSneTcUoxT9fTbLlqAuGyxaR8q5uRf20\nAErA/gCiKoMI1RpXfarwXOiFMwKBgQDJOd7o3BWjEI/ydXFlF/oa4aNBZ3HCmSid\nwagdjUNIHaejSCkxDlzikjyLwjp+hBcEhArkXvckfYL907ey4DubcuULQWWiCvWQ\nTRiRzl/Pomd6q+Zm6knYeGct6OQjzilV8/lJ0rUfBoDtmpOM+/fPt6kpGJEoYjU4\n/4RboG/8yQKBgBFJQsvd4uBE6kdl8iYZ4qtmAjU7M2ioSAnldPozABvZreUvljSe\nvhPsftbfjeNEu2otG3bo4wajQna6iTAkHQUzsr0tu0bLhgptv43msDKI5Ryriuh4\nI7pesNXONEGp5Ea8iW/hCcM6iJLjDlw12PfdoLWbNFCcUqLU9c6I4SK5AoGAYUVY\nO7gnvWuEKfAboIK2o8fu4u7eTvM6bwft/FsM6w9qucNoJg6LV/rYybZaEE5J0iUC\nHuLJFRqW95wgcJd0OPCRR5+VQX+KtPaPqevY5MXcv6/Y8GbQy5NoTQkHP0epM6N8\nHfN9GkJKkJDoQn6KjB575yG5CYxvrd3WXXRwrgECgYEAgnr7Yc6IZX5iGNz34za6\nhiZ65P1kF5FvZzhoTMVcZHbG5fxcOmGTmp23YAJ2JKazrkXtxlzebxLF9BX6kazm\n/6a9cFwil0xAHsXxu0mwGwOE6VPrHKQffIFsJFNSME1W4VMkwoYLnJsQf4BeNamP\nsadMJSyRXMGg1TRDoGk4Kww=\n-----END PRIVATE KEY-----\n", //process.env.PRIVATE_KEY,
        },
        // This is the bit after "/d/" and before "/edit" in the URL of a
        // Google Sheets document. I.e.,
        // https://docs.google.com/spreadsheets/d/1ec1bO25bbEL4pdZjhlV3AppMtnO65D0ZI8fXy4z47Dw/edit#gid=0
        spreadsheetKey: `14RlNoAhI4kRybdtMvMzNyclFYSm6DEFz-wYT-lL5j5k`,
        rootName: "Plants" // default is Sheet
      }
    }, */
    {
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
    },
  ],
};
