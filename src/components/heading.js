/**
 * heading component
 *
 *
 */

import React from "react"
import PropTypes from "prop-types"


const Heading = ({headingText, fontColorValue,  textAlignValue, fontSizeValue}) => {
    return(
        <h1 style={{textAlign:textAlignValue, fontSize:fontSizeValue, color:fontColorValue }}>{headingText}</h1>
    )


}

Heading.defaultProps = {
    headingText:``,
    fontColorValue: ``,
    textAlignValue: `center`,
    fontSizeValue: `1.5rem`,
}

Heading.propTypes = {
    headingText: PropTypes.string.isRequired,
    fontColorValue: PropTypes.string.isRequired,
    textAlignValue: PropTypes.string.isRequired,
    fontSizeValue: PropTypes.string.isRequired,
}


export default Heading


