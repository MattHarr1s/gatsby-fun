/**
 * Section component
 *
 *
 */

import React from "react"
import PropTypes from "prop-types"


const Section = ({children, heightValue, backgroundColor, padding}) => {
    return (
        <div className="section" style={{ height:`${heightValue}px`, width: `100%`, background:backgroundColor, padding: padding}}>
            {children}

        </div>
    )
}

Section.defaultProps = {
    heightValue: ``,
    backgroundColor: PropTypes.string.isRequired,

}


Section.propTypes = {
    heightValue: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    padding: PropTypes.string.isRequired
}

export default Section