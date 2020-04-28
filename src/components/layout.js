/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./layout.css"

const Layout = ({ children, padding }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description  
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          padding: padding,
          paddingTop: 0,
        }}
      >

        <main>{children}</main>
        <footer>
          ©{new Date().getFullYear()} Hot Romance Reads by Rave Reads Press
          <div className={`footer-links`}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/about">About</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.defaultProps = {
  padding: `0px 1.0875rem 1.45rem`

}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string.isRequired
}

export default Layout
