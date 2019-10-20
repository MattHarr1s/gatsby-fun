import PropTypes from "prop-types"
import {Link, useStaticQuery, graphql} from "gatsby"
import React from "react"
import Heading from "./heading";
import CoverDefault from "../images/cover-default.jpg";

import FluidImage from './fluid-image';



const BookCard = ({bookTitle, bookCover, bookLink, key }) => {
    return (
        <Link to={bookLink} key={key}>
            <div className="bookCard" style={{height:400, width:300,backgroundImage:`url(${bookCover})`, backgroundPosition:`center`, backgroundSize:`cover`, backgroundRepeat:`no-repeat`}}>
                <Heading headingText={bookTitle}/>
            </div>
        </Link>
    )

}












BookCard.defaultProps = {
    key: ``,
    bookTitle: ``,
    bookCover: CoverDefault,
    bookLink: `/some-page`,
}


BookCard.propTypes = {
    key: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookCover: PropTypes.string.isRequired,
    bookLink: PropTypes.string.isRequired,
}


export default BookCard