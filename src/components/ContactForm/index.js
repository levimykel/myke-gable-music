import React from 'react'

const ContactForm = (props) => (
  <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="bot-field" />
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
)

export default ContactForm