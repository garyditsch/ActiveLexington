module.exports = {
  siteMetadata: {
    title: 'Active Lexington',
  },
  plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `img`,
          path: `${__dirname}/src/images/`
        }
      },
      'gatsby-plugin-react-helmet',
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`
  ],
};
