module.exports = {
  siteMetadata: {
    title: `Andy Brace`,
    author: `Andy Brace`,
    description: `Andy Brace - Full stack developer, London`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ]
}