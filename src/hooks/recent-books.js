import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BookCard from "../components/book-card"
export default ({data}) => (
  <StaticQuery
    query={graphql`
       {
        allMarkdownRemark(limit: 5, filter: {fileAbsolutePath: {regex: "/books/"}}) {
        edges {
      node {
        id
        frontmatter {
          date
          title
          amazonLink
        }
        rawMarkdownBody
      }
    }
  }
}
    `}
    render={data.map(post => (

      <BookCard bookTitle={post.frontmatter.title} key={post.id}  />
      ))
      }
  />
)