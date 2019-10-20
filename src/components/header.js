import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle, siteDescription }) => (

  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
          display: `flex`,
          flexFlow: `row nowrap`,
        margin: `0 auto`,
        maxWidth: `100%`,
        padding: `1.45rem 1.0875rem`,
      }}
    ><div className="site-title">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}

        </Link>
      </h1>
      <p>{siteDescription}</p>
     </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
