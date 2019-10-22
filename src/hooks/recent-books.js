// import { useStaticQuery, graphql } from "gatsby"
// export const getRecentBooks = () => {
//   const { recentBooks } = useStaticQuery(
//     graphql`
//         query {
//             allMarkdownRemark(limit: 5, filter: {fileAbsolutePath: {regex: "/books/"}}) {
//                 edges {
//                     node {
//                         id
//                         frontmatter {
//                             date
//                             title
//                             amazonLink
//                         }
//                     }
//                 }
//             }
//         }
//     `
//   )
//   return recentBooks
// }
//
// export default getRecentBooks;