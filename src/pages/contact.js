import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import ContactForm from '../components/ContactForm';

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
      <ContactForm/>
    </article>

    <Sidebar/>
  </section>
)

export default ContactPage
