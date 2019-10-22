import PropTypes from "prop-types"
import React from "react"
import Heading from "./heading";
import CoverDefault from "../images/cover-default.jpg";

import FluidImage from './fluid-image';
import Img from "gatsby-image"


const BookCard = ({bookTitle, bookCover, bookLink}) => {
    return (
      <div className={`bookCard`}>
        <a href={bookLink}>
          <Img fluid={bookCover} />
                <Heading headingText={bookTitle}/>

        </a>
      </div>
    )

}












BookCard.defaultProps = {
    key: ``,
    bookTitle: ``,
    bookCover: '',
    bookLink: `/some-page`,
}


BookCard.propTypes = {
    key: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookCover: PropTypes.string.isRequired,
    bookLink: PropTypes.string.isRequired,
}


export default BookCard