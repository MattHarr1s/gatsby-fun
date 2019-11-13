import React from "react"
import { graphql } from "gatsby"
import BookCard from "../components/book-card"
import Layout from "../components/layout"
import { css } from "@emotion/core"

const Books = ({data}) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          MY BOOKS
        </h1>
      </div>
      {data.allWordpressWpBooks.nodes.map((book, i) => (
        <BookCard bookTitle={book.title} bookLink={book.acf.amazon_url} key={i} bookCover={book.featured_media.localFile.childImageSharp.fluid}  featuredText={book.acf.featured_text} />
        ))
      }
    </Layout>
  )
}


export  const query = graphql`
    query {
            allWordpressWpBooks{
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
`

export default Books;




