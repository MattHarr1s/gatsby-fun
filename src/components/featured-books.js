import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BookCard from "./book-card"
const FeaturedBooks = () => {

    const books  = useStaticQuery(
      graphql`
        query {
          allMarkdownRemark(limit: 5, filter: {fileAbsolutePath: {regex: "/books/"}}) {
            edges {
              node {
                id
                frontmatter {
                  date
                  title
                  amazonLink
                  featuredImage {
                    childImageSharp {
                    fluid(maxWidth: 400) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                  }
                }
                
              }
            }
          }
        }

    `)
      return (

        books.allMarkdownRemark.edges.map((book, i) => (

          <BookCard bookTitle={book.node.frontmatter.title} bookLink={book.node.frontmatter.amazonLink} key={i} bookCover={book.node.frontmatter.featuredImage.childImageSharp.fluid } />
        )))




}

export default FeaturedBooks;