import React from 'react';
import Helmet from 'react-helmet';
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import {Link as PrismicLink, RichText, Date} from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-config';
import Sidebar from '../../components/Sidebar';
import { navigateTo } from "gatsby-link";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_KEY = '6LcZzA0TAAAAAD1kWqxnMHHsSIGl7PGWfdUVivkn';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class ContactPage extends React.Component {
  state = {
    doc: this.props.data.allPrismicDocument.edges[0].node,
    apiEndpoint: this.props.data.site.siteMetadata.prismicEndpoint,
  }

  componentWillMount() {
    
    // Check for a preview cookie
    const previewCookie = Cookies.get(Prismic.previewCookie);
    
    // Retrieve preview content if cookie is set
    if (previewCookie !== undefined) {
      Prismic.api(PrismicConfig.apiEndpoint).then(api => {
        api.getSingle('contact_page').then(document => {
          if (document) {
            this.setState({ doc: document });
          }
        });
      });
    }
  }
 
  componentDidUpdate() {
    // Launch the prismic.io toolbar
    const apiEndpoint = this.props.data.site.siteMetadata.prismicEndpoint;
    window.PrismicToolbar.setup(apiEndpoint);
  }

  getMetaData(document) {
    if(document.data.meta_title.length > 0 && document.data.meta_description.length > 0){
      return(
        <Helmet
          title={ RichText.asText(document.data.meta_title) + " | " + this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: RichText.asText(document.data.meta_description) }
          ]}
        />
      );
    } else if (document.data.meta_title.length > 0) {
      return(
        <Helmet
          title={ RichText.asText(document.data.meta_title) + " | " + this.props.data.site.siteMetadata.title}
        />
      );
    } else if (document.data.meta_description.length > 0) {
      return(
        <Helmet
          meta={[
            { name: 'description', content: RichText.asText(document.data.meta_description) }
          ]}
        />
      );
    } else {
      return null;
    }
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  
  render() {
    // Set the document object
    const document = this.state.doc;
    
    // Set the meta data
    const metaData = this.getMetaData(document);
    
    return (
      <section id="middle" className="contact-page">
        {metaData}
        <article id="content">
          <h1>{RichText.asText(document.data.title)}</h1>
          <p>{RichText.asText(document.data.text)}</p>
          <form
            name="Contact"
            method="post"
            action="/contact/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"  
            data-netlify-recaptcha="true"
            onSubmit={this.handleSubmit}
          >
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>
            <input type="hidden" name="form-name" value="Contact" onChange={this.handleChange}/>
            <p style={{display:'none'}}>
              <label>
                Don’t fill this out if you're human: 
                <input name="bot-field" onChange={this.handleChange}/>
              </label>
            </p>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" onChange={this.handleChange}></textarea>
            </div>
            <ReCAPTCHA
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
            <input type="submit" value={RichText.asText(document.data.button_text)}/>
          </form>
        </article>

        <Sidebar/>
      </section>
    );
  }
}

export const query = graphql`
  query ContactQuery {
    allPrismicDocument(filter: { type: { eq: "contact_page" } }) {
      edges {
        node {
          id
          uid
          type
          data {
            title {
              type
              text
            }
            text {
              type
              text
            }
            button_text {
              type
              text
            }
            meta_title {
              type
              text
            }
            meta_description {
              type
              text
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        prismicEndpoint
      }
    }
  }
`

export default ContactPage
