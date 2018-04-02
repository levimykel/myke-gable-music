import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../../components/Sidebar';

const SuccessPage = ({ data }) => (
  <section id="middle" className="contact-page">
    <Helmet
      title={"Contact | " + data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Contact Myke with questions or inquire about hiring him to play at your event.' }
      ]}
    />
    <article id="content">
      <h1>Contact</h1>
      <p className="success-message">Your message has been successfully submitted. I will get back to you as soon as I am able.</p>
    </article>

    <Sidebar/>
  </section>
)

export const query = graphql`
  query SuccessQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default SuccessPage
