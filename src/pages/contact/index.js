import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../../components/Sidebar';

const ContactPage = () => (
  <section id="middle" className="contact-page">
    <Helmet
      title="Contact | Myke Gable Music"
      meta={[
        { name: 'description', content: 'Contact Myke with questions or inquire about hiring him to play at your event.' }
      ]}
    />
    <article id="content">
      <h1>Contact</h1>
      <form name="Contact" method="post" action="/contact/success" data-netlify="true">
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
        <div data-netlify-recaptcha></div>
        <input type="submit" value="Send Message"/>
      </form>
    </article>

    <Sidebar/>
  </section>
)

export default ContactPage
