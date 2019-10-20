import React from 'react';
import BookCard from "../components/book-card";
const { Component } = React;


const someArrayOfPosts = [
    { title: 'some title for post 1', excerpt: 'this is an excerpt for post one' },
    { title: 'some title for post 2', excerpt: 'this is an excerpt for post two' },
    { title: 'some title for post 3', excerpt: 'this is an excerpt for post three' }
];


class FeaturedBooks extends Component {

    render() {

        return (


            someArrayOfPosts.map(post => (

            <BookCard bookTitle={post.title} key={post.title}  />
        ))

             )



    }
}

export default FeaturedBooks;