/**
 * Section component
 *
 *
 */

import React from "react"
import PropTypes from "prop-types"


const Section = ({children, heightValue, backgroundColor}) => {
    return (
        <div className="section" style={{ height:`${heightValue}px`, width: `100%`, background:backgroundColor}}>
            {children}

        </div>
    )
}

Section.defaultProps = {
    heightValue: `400`,
    backgroundColor: PropTypes.string.isRequired,

}


Section.propTypes = {
    heightValue: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section