import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import BlogPostPreview from '../components/BlogPostPreview';
import BookCard from "../components/book-card"
import Image from "gatsby"
import Img from "gatsby-image"


export default ({ data }) => {
  return (
    <Layout>
      <div>

        {data.allMarkdownRemark.edges.map(({ node }) => (
<>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />


            {/*{node.frontmatter}*/}
            <BookCard bookTitle={node.frontmatter.title}  />
          </>
        ))}
      </div>
    </Layout>
  )
}


export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        amazonLink
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
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

