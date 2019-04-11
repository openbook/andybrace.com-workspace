import React from "react";
import { Grid } from 'gatsby-theme-andybrace';
import { Link, graphql } from "gatsby"

export default ({data}) => (
  <Grid>
    {console.log(data)}
    <h1>This is overriden</h1>
    {data.allMdx.edges.map(({ node }) => (
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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