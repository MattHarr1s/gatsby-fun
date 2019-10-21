import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let amazonLink = post.frontmatter.amazonLink
  return (
    <Layout>
      <a href={amazonLink} >
        <div>
          <h1>{post.frontmatter.title}</h1>
          <Img fluid={featuredImgFluid} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </a>
    </Layout>
  )
}
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                amazonLink
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`