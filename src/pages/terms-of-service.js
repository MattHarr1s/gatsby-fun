import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/heading"

import React from "react"
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout className={`about-page`}>
    <SEO title={`About Hot Romance Reads`}/>
    <div className={`terms-of-service`}>
      <Heading textAlignValue={`left`} headingText={`Hot Romance Reads Terms of Service`}/>
      <p>TERMS OF SERVICE, TERMS AND CONDITIONS AND SUPPORT:
      </p>
      <p><strong>READERS:</strong>We are a FREE newsletter for you, delivering discount deals, sales, and free books to
        your email inbox daily. You may unsubscribe at any time and if you are in the European Union you may request
        that we delete your information, by emailing us at hotromancereads@gmail.com. Please see our Privacy Policy on
        this site for more information.</p>

      <p><strong>AUTHORS: </strong> Once you book a spot from us, we will send it on the requested day, as either a
        Solo, Feature, or Mention, depending on which one you book. Please also see our Refund Policy below. </p>

      <p>Since the majority of our spots are sold via Bookclicker.com, please visit http://www.bookclicker.com for their
        policies as well; you have added protection to be able to confirm sending and request a refund if you book
        through Bookclicker, but if you are not on Bookclicker and email us separately, we guarantee promotion of your
        book on the date and in the method requested, or your money back!</p>

      <p><strong>RETURN/REFUND POLICY FOR AUTHORS PURCHASING PROMOTIONS:</strong>
      </p>
      <p>We will confirm that your book is sent on the day that you book it to be sent out. If for any reason we don’t,
        you are entitled to a full refund. Email us at hotromancereadsbooks@gmail.com. If you booked through
        Bookclicker.com, we automatically provide confirmation on that software and you can requests refunds from there.
        Please visit Bookclicker.com to view its policies and terms and conditions in their entirety. </p><p>
    </p>
      <p><strong>SUPPORT AND CUSTOMER SERVICE CONTACT DETAILS:</strong></p>
      <p>For any questions or issues, please contact us via email. hotromancereadsbooks@gmail.com
      </p>
      <p>Thank you!</p>
      <div className={`address`}>
      <p>Rave Reads Press, LLC</p>
      <p>DBA Hot Romance Reads Club</p>
      <p>30 North Gold St., Suite R</p>
      <p>Sheridan, Wyoming 82801</p>
      </div>

    </div>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)
export default AboutPage