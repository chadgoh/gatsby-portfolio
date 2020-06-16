/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

/* Your site config here */
module.exports = {
  siteMetadata: {
    title: "Chad",
    description:
      "My portfolio site built with GatsbyJS with Strapi Headless CMS",
    author: "Chad Goh",
    siteUrl: "https://chadgoh.tech",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://desolate-chamber-93272.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`jobs`, `projects`],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
