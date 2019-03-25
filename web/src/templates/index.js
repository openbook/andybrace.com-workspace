import React from "react"
import { graphql } from "gatsby"
import { Grid } from "../components"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Grid>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Grid>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`