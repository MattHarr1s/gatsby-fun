import PropTypes from "prop-types"
import React from "react"
import Heading from "./heading";
import Img from "gatsby-image"

const BookCard = ({bookTitle, bookCover, bookLink, featuredText}) => {
    return (
      <a href={bookLink} >
      <div className={`bookCard`}>
        <Heading style={{color:`black`}} headingText={bookTitle}/>
          <Img fluid={bookCover} />
      </div>
      </a>
    )

}

BookCard.propTypes = {
  bookTitle: PropTypes.string,
  bookCover: PropTypes.object,
  bookLink: PropTypes.string,
  featuredText: PropTypes.string
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
    featuredText: PropTypes.string
}

export default BookCard
