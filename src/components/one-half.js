import PropTypes from "prop-types"
import React from "react"

const OneHalf = ({ children }) => (

        <div style={{width:`50%`}}>{children}</div>

)

OneHalf.propTypes = {
    children: PropTypes.node.isRequired,
}


export default OneHalf