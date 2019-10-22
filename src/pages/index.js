import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import BlogPostPreview from '../components/BlogPostPreview';
import BookCard from "../components/book-card"
import FeaturedBooks from "../components/featured-books"
import Img from "gatsby-image"
import Section from "../components/section"
import Heading from "../components/heading"


export default ({ data }) => {
  return (
    <Layout>
      <Section backgroundColor={`purple`}>
        <Heading headingText={`Featured Books`} />
        <div className={`featuredBooks`}>
          <FeaturedBooks/>
        </div>
    </Section>
    </Layout>
  )
}



