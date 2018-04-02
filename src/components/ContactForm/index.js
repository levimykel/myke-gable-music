import React from 'react'

const ContactForm = (props) => (
  <form name="Contact" method="post" action="/success" data-netlify="true">
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
)

export default ContactForm