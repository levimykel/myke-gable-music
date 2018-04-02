import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../../components/Sidebar';

const ContactPage = ({ data }) => (
  <section id="middle" className="contact-page">
    <Helmet
      title={"Contact | " + data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Contact Myke with questions or inquire about hiring him to play at your event.' }
      ]}
    />
    <article id="content">
      <h1>Contact</h1>
      <p>Feel free to use this form to contact me with questions or inquire about hiring me to play an event.</p>
      <form name="Contact" method="post" action="/contact/success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="Contact" />
        <p style={{display:'none'}}>
          <label>
            Don’t fill this out if you're human: 
            <input name="bot-field"/>
          </label>
        </p>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6"></textarea>
        </div>
        <input type="submit" value="Send Message"/>
      </form>
    </article>

    <Sidebar/>
  </section>
)

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ContactPage
