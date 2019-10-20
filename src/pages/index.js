import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from "../components/section";
import Heading from "../components/heading";
import OneHalf from "../components/one-half";
import FeaturedBooks from "../components/featured-books";




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Section backgroundColor="#ffffff">
          <OneHalf>
          <Heading headingText="Welcome to my new site" fontColorValue="Black" />
          </OneHalf>

      </Section>
      <Section>
      <FeaturedBooks/>

      </Section>


  </Layout>
)

export default IndexPage
