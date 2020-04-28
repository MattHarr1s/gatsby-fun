import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Heading from "../components/heading"

const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy Policy"/>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`2.0rem`} headingText={`Privacy Policy`}
               textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}>
        This Application collects some personal data from its end-users.
      </p>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`} headingText={`Data Controller and Owner`}
               textAlignValue={`left`}/>
      <div className={`address`}>
        <p style={{ maxWidth: `50rem` }}>Rave Reads Press, LLC</p>
        <p style={{ maxWidth: `50rem` }}>30 North Gold St.</p>
        <p style={{ maxWidth: `50rem` }}>Suite R</p>
        <p style={{ maxWidth: `50rem` }}>Sheridan, Wyoming 82801</p>
        <a href={`mailto:ravereadspress@gmail.com`}>ravereadspress@gmail.com</a>
        <Link to={`/`}>hotromancereads.club</Link>
      </div>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`} headingText={`Types of Data collected`}
               textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}>Among the types of Personal Data that this Application collects, by itself or
        through third parties, there are: Cookie, Usage data, Email address, First Name, Last Name, Phone number and
        Company name.
        Other Personal Data collected may be described in other sections of this privacy policy or by dedicated
        explanation text contextually with the Data collection. The PersonalData may be freely provided by the User, or
        collected automatically when using this Application. Any use of Cookies – or of other tracking tools – by this
        Application or by the owners of third party services used by this Application, unless stated otherwise, serves
        to identify Users and remember their preferences, for the sole purpose of providing the service required by the
        User.
        Failure to provide certain Personal Data may make it impossible for this Application to provide its services.
        Users are responsible for any Personal Data of third parties obtained, published or shared through this
        Application and confirm that they have the third party’s consent to provide the Data to the Owner.
      </p>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`}
               headingText={`Mode and place of processing the Data Methods of processing`} textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}>The Data Controller processes the Data of Users in a proper manner and shall take
        appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized
        destruction of the Data. The Data processing is carried out using computers and/or IT enabled tools, following
        organizational procedures and modes strictly related to the purposes indicated. In addition to the Data
        Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the
        operation of the site (administration, sales, marketing, legal, system administration) or external parties (such
        as third party technical service providers, mail carriers, hosting providers, IT companies, communications
        agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be
        requested from the Data Controller at any time.
      </p>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`} headingText={`Place`} textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}>The Data is processed at the Data Controller’s operating offices and in any other
        places where the parties involved with the processing are located. For further information, please contact the
        Data Controller.
      </p>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`} headingText={`Retention time`}
               textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}>The Data is kept for the time necessary to provide the service requested by the
        User, or stated by the purposes outlined in this document, and the User can always request that the Data
        Controller suspend or remove the data.
      </p>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`} headingText={`The use of the collected Data`}
               textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}>The Data concerning the User is collected to allow the Owner to provide its
        services, as well as for the following purposes: Analytics, Managing contacts and sending messages and
        Contacting the User. The Personal Data used for each purpose is outlined in the specific sections of this
        document.
      </p>
      <p style={{ maxWidth: `50rem` }}>When email data is collected we will only email you to send news about books that
        are on sale and/or to offer freebies or discounts on other authors books and things that may interest you about
        reading and books We may use the collected email addresses to target similar users through Facebook Ads custom
        audiences and “Look-alike” audiences.
      </p>
      <p style={{ maxWidth: `50rem` }}>For EU residents, you can request to have your information deleted at any time by
        contacting hotromancereads@gmail.com.
      </p>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`}
               headingText={`Detailed information on the processing of Personal Data`} textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}>Personal Data is collected for the following purposes and using the following
        services:
      </p>
      <ul>
        <li>
          <p style={{ maxWidth: `50rem` }}><strong>Analytics</strong> – The services contained in this section enable
            the Owner to monitor and analyze web traffic and can be used to keep track of User behavior. Google
            Analytics (Google Inc.)Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google
            utilizes the Data collected to track and examine the use of this Application, to prepare reports on its
            activities and share them with other Google services.Google may use the Data collected to contextualize and
            personalize the ads of its own advertising network.Personal Data collected: Cookie and Usage data. Place of
            processing: USA. Privacy PolicyOpt Out</p>
        </li>
        <li>
          <p style={{ maxWidth: `50rem` }}><strong>Contacting the User</strong></p>
          <p style={{ maxWidth: `50rem` }}><strong>Mailing List or Newsletter</strong></p>
          <p style={{ maxWidth: `50rem` }}>The services contained in this section enable the Owner to monitor and
            analyze web traffic and can be used to keep track of User behavior. Google Analytics (Google Inc.)Google
            Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected
            to track and examine the use of this Application, to prepare reports on its activities and share them with
            other Google services.Google may use the Data collected to contextualize and personalize the ads of its own
            advertising network.Personal Data collected: Cookie and Usage data. Place of processing: USA. Privacy
            PolicyOpt Out</p>
          < p style={{ maxWidth: `50rem` }}>
            Personal Data collected: Email address.
          </p>
          <p style={{ maxWidth: `50rem` }}><strong>Contact form</strong></p>
          <p style={{ maxWidth: `50rem` }}>By filling in the contact form with their Data, the User authorizes this
            Application to use these details to reply to requests for information, quotes or any other kind of request
            as indicated by the form’s header.
            Personal Data collected: Company name, Email address, First Name, Last Name and Phone number.</p>

        </li>
        <li>
          <p style={{ maxWidth: `50rem` }}><strong>Managing contacts and sending messages</strong></p>
          <p style={{ maxWidth: `50rem` }}>These services make it possible to manage a database of email contacts, phone
            contacts or any other contact information to communicate with the User.
            These services may also collect data concerning the date and time when the message was viewed by the User,
            as well as when the User interacted with it, such as by clicking on links included in the message.</p>
          <p style={{ maxWidth: `50rem` }}><strong>Mailerlite</strong></p>
          <p style={{ maxWidth: `50rem` }}>Mailerlite is an email address management and message sending service
            provided by Mailerlite Inc.
            Personal Data collected: Email address. Place of processing: Lithuania.</p>
          <a
            href={`https://www.mailerlite.com/blog/new-mailerlite-gdpr-features-part-3-of-3-data-processing-agreement-and-privacy-policy-update`}>Mailerlite
            Privacy Policy</a>

        </li>
      </ul>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`}
               headingText={`Additional information about Data collection and processing`} textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}><strong>Legal action</strong></p>
      <p style={{ maxWidth: `50rem` }}>The User’s Personal Data may be used for legal purposes by the Data Controller,
        in Court or in the stages leading to possible legal action arising from improper use of this Application or the
        related services.
      </p><p style={{ maxWidth: `50rem` }}>The User declares to be aware that the Data Controller may be required to
      reveal personal data upon request of public authorities.</p>
      <p style={{ maxWidth: `50rem` }}><strong>Additional information about User’s Personal Data</strong></p>
      <p style={{ maxWidth: `50rem` }}>In addition to the information contained in this privacy policy, this Application
        may provide the User with additional and contextual information concerning particular services or the collection
        and processing of Personal Data upon request.</p>
      <p style={{ maxWidth: `50rem` }}><strong>System Logs and Maintenance</strong></p>
      <p style={{ maxWidth: `50rem` }}>For operation and maintenance purposes, this Application and any third party
        services may collect files that record interaction with this Application (System Logs) or use for this purpose
        other Personal Data (such as IP Address).</p>
      <p style={{ maxWidth: `50rem` }}><strong>Information not contained in this policy</strong></p>
      <p style={{ maxWidth: `50rem` }}>More details concerning the collection or processing of Personal Data may be
        requested from the Data Controller at any time. Please see the contact information at the beginning of this
        document.</p>
      <p style={{ maxWidth: `50rem` }}><strong>The rights of Users</strong></p>
      <p style={{ maxWidth: `50rem` }}>Users have the right, at any time, to know whether their Personal Data has been
        stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or
        to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous
        format or to block any data held in violation of the law, as well as to oppose their treatment for any and all
        legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.
        This Application does not support “Do Not Track” requests.</p>
      <p style={{ maxWidth: `50rem` }}>To determine whether any of the third party services it uses honor the “Do Not
        Track” requests, please read their privacy policies.</p>
      <p style={{ maxWidth: `50rem` }}><strong>For residents of the European Union (EU):</strong></p>
      <p style={{ maxWidth: `50rem` }}>You have the right to request to see any of your information that we have stored
        and to request that it be deleted and forgotten. Please write to hotromancereadsbooks@gmail.com for all
        inquiries.</p>
      <p style={{ maxWidth: `50rem` }}><strong>Changes to this privacy policy</strong></p>
      <p style={{ maxWidth: `50rem` }}>The Data Controller reserves the right to make changes to this privacy policy at
        any time by giving notice to its Users on this page. It is strongly recommended to check this page often,
        referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to
        the Policy, the User must cease using this Application and can request that the Data Controller removes the
        Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data
        Controller has about Users.</p>
      <p style={{ maxWidth: `50rem` }}><strong>Information about this privacy policy</strong></p>
      <p style={{ maxWidth: `50rem` }}>The Data Controller is responsible for this privacy policy.</p>





    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`} headingText={`Legal information`}
               textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}> Notice to European Users: this privacy statement has been prepared in
        fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive
        2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies. This privacy policy relates solely
        to this Application.
      </p>
    </Section>
    <Section padding={`1rem 3rem 0rem`}>
      <Heading fontColorValue={`black`} fontSizeValue={`1.8rem`} headingText={`Definitions and legal references`}
               textAlignValue={`left`}/>
      <p style={{ maxWidth: `50rem` }}><strong>Personal Data (or Data)</strong></p>
      <p style={{ maxWidth: `50rem` }}>Any information regarding a natural person, a legal person, an institution or an association, which is, or can be, identified, even indirectly, by reference to any other information, including a personal identification number.
      </p><p style={{ maxWidth: `50rem` }}><strong>Usage Data</strong></p>
      <p style={{ maxWidth: `50rem` }}>Information collected automatically from this Application (or third party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server’s answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User’s IT environment.
      </p>
      <p style={{ maxWidth: `50rem` }}><strong>User</strong></p>
      <p style={{ maxWidth: `50rem` }}>The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refer.
      </p>
      <p style={{ maxWidth: `50rem` }}><strong>Data Subject</strong></p>
      <p style={{ maxWidth: `50rem` }}>The legal or natural person to whom the Personal Data refers.
      </p>
      <p style={{ maxWidth: `50rem` }}><strong>Data Processor (or Data Supervisor)</strong></p>
      <p style={{ maxWidth: `50rem` }}>The natural person, legal person, public administration or any other body, association or organization authorized by the Data Controller to process the Personal Data in compliance with this privacy policy.
      </p>
     <p style={{ maxWidth: `50rem` }}><strong>Data Controller (or Owner)</strong></p>
      <p style={{ maxWidth: `50rem` }}>The natural person, legal person, public administration or any other body, association or organization with the right, also jointly with another Data Controller, to make decisions regarding the purposes, and the methods of processing of Personal Data and the means used, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.
      </p>
      <p style={{ maxWidth: `50rem` }}><strong>This Application</strong></p>
      <p style={{ maxWidth: `50rem` }}>The hardware or software tool by which the Personal Data of the User is collected.
      </p>
      <p style={{ maxWidth: `50rem` }}><strong>Cookie</strong></p>
      <p style={{ maxWidth: `50rem` }}>Small piece of data stored in the User’s device.
      </p>

    </Section>

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default PrivacyPolicy
