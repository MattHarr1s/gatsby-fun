import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import BookCard from "../components/book-card";
const { Component } = React;



class FeaturedBooks extends Component {

    render() {
      const { title, excerpt } = this.props;

      return (
            someArrayOfPosts.map(post => (

            <BookCard bookTitle={post.title} key={post.title}  />
        ))

             )



    }
}

export default FeaturedBooks;