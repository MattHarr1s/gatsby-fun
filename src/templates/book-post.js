import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

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
        query MyQuery {
            allWordpressWpBooks(filter: {slug: {eq: "this-book"}}){
                nodes {
                    content
                    slug
                    path
                    parent {
                        id
                    }
                    modified(formatString: "")
                    title
                    acf {
                        amazon_url
                        authors
                        featured_text
                        single_book_quote
                    }
                    featured_media {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 500) {
                                    base64
                                    tracedSVG
                                    aspectRatio
                                    src
                                    srcSet
                                    srcWebp
                                    srcSetWebp
                                    sizes
                                    originalImg
                                    originalName
                                    presentationWidth
                                    presentationHeight
                                }
                            }
                        }
                    }
                    book_series
                }
            }
        }


    }
`
