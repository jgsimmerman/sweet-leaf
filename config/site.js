module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby Test Site', // Navigation and Site Title
  titleAlt: 'Gatsby Test Site', // Title for JSONLD
  description: 'A Gatsby Template Built with SEO and speed in mind',
  url: 'https://gatsby-tutorial-starter.netlify.com', // Domain of your site. No trailing slash!
  siteUrl: 'https://gatsby-tutorial-starter.netlify.com', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'GatsbyTest', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Jacob Simmerman', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@jacobsimmerman', // Twitter Username
};
