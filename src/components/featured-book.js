import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BookCard from "./book-card"
import OneHalf from "./one-half"

const FeaturedBook = () => {
  const books = useStaticQuery(graphql`{
              allWordpressWpBooks(limit: 1, filter: {super_category: {eq: 3}}) {
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
          }`
  )
  return (
    books.allWordpressWpBooks.nodes.map((book, i) => (
      <>
        <OneHalf>
          <BookCard bookTitle={book.title} bookLink={book.acf.amazon_url} key={i} bookCover={book.featured_media.localFile.childImageSharp.fluid}  featuredText={book.acf.featured_text} />
          <p>{book.acf.single_book_quote}</p>
        </OneHalf>
        <OneHalf>
          <div dangerouslySetInnerHTML={{ __html: book.content }} />
        </OneHalf>
      </>
    )))

}

export default FeaturedBook;
