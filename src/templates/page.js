import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import {Link as PrismicLink, RichText} from 'prismic-reactjs';
import PrismicConfig from '../../prismic-config';
import Link from 'gatsby-link';

// Slices
import Image from '../components/Slices/Image';
import QuestionAndAnswer from '../components/Slices/QuestionAndAnswer';
import Songs from '../components/Slices/Songs';
import TextSection from '../components/Slices/TextSection';

class Page extends React.Component {
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
        api.getByUID('page', this.state.doc.uid).then(document => {
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
    
    // Set the main content
    var pageContent = document.data.body.map(function(slice, index){
      switch (slice.slice_type) {
        case "text":
          return <TextSection key={index} slice={slice}/>;
          break;
        case "image":
          return <Image key={index} slice={slice}/>;
          break;
        case "question_and_answer":
          return <QuestionAndAnswer key={index} slice={slice}/>;
          break;
        case "music_player":
          return <Songs key={index} slice={slice}/>;
          break;
        default:
          return <p key={index}>{slice.slice_type}</p>;
          break;
      }
    });
    
    return (
      <section id="middle">
        {metaData}
        <article id="content">
          <h1>{RichText.asText(document.data.title)}</h1>
          {pageContent}
        </article>

        <Sidebar/>
      </section>
    );
  }
}

export const query = graphql`
  query PageQuery($slug: String!) {
    allPrismicDocument(filter: { fields: { slug: { eq: $slug } } }) {
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
            meta_title {
              type
              text
            }
            meta_description {
              type
              text
            }
            body {
              slice_type
              primary {
                text {
                  type
                  text
                  spans {
                    start
                    end
                    type
                  }
                }
                image {
                  url
                }
                alt_text {
                  type
                  text
                }
              }
              items {
                question {
                  type
                  text
                }
                answer {
                  type
                  text
                  spans {
                    start
                    end
                    type
                  }
                }
                song_title {
                  type
                  text
                }
                song_link {
                  url
                }
              }
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
`;

export default Page
