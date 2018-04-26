import React from 'react';
import Helmet from 'react-helmet';
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import {Link as PrismicLink, RichText, Date} from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-config';
import Sidebar from '../../components/Sidebar';

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
