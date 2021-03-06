import React from 'react';
import Helmet from 'react-helmet';
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import {Link as PrismicLink, RichText, Date} from 'prismic-reactjs';
import PrismicConfig from '../../../prismic-config';
import Sidebar from '../../components/Sidebar';

class SuccessPage extends React.Component {
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
          <p className="success-message">{RichText.asText(document.data.succes_text)}</p>
        </article>

        <Sidebar/>
      </section>
    );
  }
}

export const query = graphql`
  query SuccessQuery {
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
            succes_text {
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

export default SuccessPage
