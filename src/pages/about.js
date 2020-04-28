import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Heading from "../components/heading"

import React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout>
    <SEO title={`About Hot Romance Reads`}/>
    <div className={`about-page`}>
    <Heading textAlignValue={`left`} headingText={`About Hot Romance Reads`}/>
    <p>ABOUT US AND THE SERVICES WE OFFER
      </p>

        <p>Hot Romance Reads Club is a newsletter delivering the best romance books to your inbox daily! We also provide
          marketing for authors. We are run by Rave Reads Press and do business as Hot Romance Reads, Dirty Little
          Secret Reads an Jamie Knight.</p>

        <p>We are a promotional newsletter, meaning that authors pay us to advertise their books in it. Our newsletters
          contain recommended new releases, discounted books and FREE books for our readers to enjoy! The books must be
          in the romance genre and must have some level of steam (no clean/religious romance, as our readers prefer some
          hate).</p>

        <p>To view a sample of one of our newsletters, click <a
          href={`https://preview.mailerlite.com/o4u4y2`}>here: </a></p>


        <p>To sign up to our newsletter and receive a FREE book, click<a
          href={`  https://dl.bookfunnel.com/vat6zub5j1`}>here: </a></p>


        <p><strong>READERS:</strong> To sign up to our newsletter, please either download this free book or email us at
          hotromancereadsbooks@gmail.com. If you have any questions or issues about the deliverability of your
          newsletter, please also email us at hotromancereadsbooks@gmail.com. For privacy and GDPR policy, please see
          Terms and Conditions and Privacy Policy on this website.</p>

        <p><strong>AUTHORS: </strong> We sell spots on our newsletter that goes out to anywhere from 10,000 to 30,000
          subscribers, depending on which newsletter you book. To inquire about having your books included in our
          newsletter, please email us at hotromancereadsbooks@gmail.com.</p>

        <p>We also offer marketing services and newsletter management for authors. One example is Jamie Knight. If you
        would like a professional marketing service to take the inconvenience of these tasks off your hands, please
        email us at hotromancereadsbooks@gmail.com.</p>

        <p>At this time, for our forms of payment we take PayPal (multiple countries’ currencies) or Stipe (US dollars
        only) via the newsletter swap website Bookclicker.com where you can book paid spots from us. These services use
        secure capabilities and have a strict privacy policy for transmission of payment card details. Please visit the
        payment websites at PayPal and Stripe directly to view the policies in their entirety.
        </p>
      <Link to="/">Go back to the homepage</Link>
    </div>

  </Layout>
)
export default AboutPage