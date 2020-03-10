import React from "react"
import Layout from "../components/layout"
import FeaturedBooks from "../components/featured-books"
import Section from "../components/section"
import Heading from "../components/heading"


export default ({ data }) => {
  return (
    <Layout padding={`0px 0px 1.45rem`}>
      <Section backgroundColor={`red`} padding={`2% 10%`}>
        <Heading fontColorValue={`white`} fontSizeValue={`2.0rem`} headingText={`Hot Romance Reads`}/>
        <Heading  fontColorValue={`white`} fontSizeValue={`1.5rem`} headingText={`Bringing you all the HEAT in SALE and FREE romance reads!`}/>
      </Section>
      <Section className={`booksSection`} backgroundColor={`white`} padding={`1% 0 0 0`}>
        <Heading headingText={`Featured Hot Steals`} />
        <div className={`featuredBooks`}>
          <FeaturedBooks/>
        </div>
    </Section>
    </Layout>
  )
}

