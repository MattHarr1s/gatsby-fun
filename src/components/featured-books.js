import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BookCard from "./book-card"
const FeaturedBooks = () => {
    const books  = useStaticQuery(
      graphql`
          {allWordpressWpBooks(limit: 5) {
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
                  }
              }
          }
      `)
      return (
        books.allWordpressWpBooks.nodes.map((book, i) => (
          <BookCard bookTitle={book.title} bookLink={book.acf.amazon_url} key={i} bookCover={book.featured_media.localFile.childImageSharp.fluid}  featuredText={book.acf.featured_text} />
        )))
}



export default FeaturedBooks;
