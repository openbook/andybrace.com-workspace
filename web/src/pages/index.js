import React from "react";
import { Grid } from '../components'
import { Link, graphql } from "gatsby"
require('../styles/global.scss')

export default ({data}) => (
  <Grid>
    {console.log(data)}
    <h1>About {data.site.siteMetadata.title}</h1>
    <p className={'test'}>Hello Gatsby 123</p>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
            <span>
                  — {node.frontmatter.date}
                </span>
          </h3>
        </Link>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </Grid>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    },
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`