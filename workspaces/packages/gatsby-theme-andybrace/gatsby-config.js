const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Andy Brace`,
    author: `Andy Brace`,
    description: `I help scope, plan, prototype and deliver agile web projects.`,
    role: `Full-stack web developer based in London`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    links: {
      github: `https://github.com/openbook`,
      linkedIn: 'https://linkedin.com/in/andrewbrace/',
      email: 'hello@openbook.uk.com'
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/Layout/index.js')
        },
        extensions: [`.mdx`, `.md`],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          { resolve:
              `gatsby-remark-prismjs`,
          },
          { resolve:
              `gatsby-remark-copy-linked-files`,
          },
          { resolve:
              `gatsby-remark-smartypants`,
          }
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ],
}