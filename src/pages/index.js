import React from "react"
import Layout from "../components/layout"
import FeaturedBooks from "../components/featured-books"
import Section from "../components/section"
import Heading from "../components/heading"


export default ({ data }) => {
  return (
    <Layout>
      <Section backgroundColor={`white`}>
        <Heading headingText={`Featured Books`} />
        <div className={`featuredBooks`}>
          <FeaturedBooks/>
        </div>
    </Section>
    </Layout>
  )
}



