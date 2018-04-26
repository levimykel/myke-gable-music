import React from 'react';
import Helmet from 'react-helmet';
import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';
import {Link as PrismicLink, RichText, Date} from 'prismic-reactjs';
import PrismicConfig from '../../prismic-config';
import Link from 'gatsby-link';

class IndexPage extends React.Component {
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
        api.getSingle('homepage').then(document => {
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

  createCtaContent(ctas) {
    return ctas.map((cta, index) => {
      const ctaKey = 'cta-' + index;
      const ctaLink = PrismicLink.url(cta.link, PrismicConfig.linkResolver);
      return (
        <div className="CTA" key={ctaKey}>
          <h3 className="widgetHeader">{RichText.asText(cta.cta_heading)}</h3>
          <div className="widgetContent">
            <div className="textwidget">
              <p>{RichText.asText(cta.cta_text)}</p>
              <p><Link className="viewMore" to={ctaLink}>{RichText.asText(cta.link_text)}</Link></p>
            </div>
          </div>
        </div>
      );
    });
  }
  
  render() {
    // Set the document object
    const document = this.state.doc;
    
    // Create the CTA content
    const ctaContent = this.createCtaContent(document.data.ctas);
    
    return (
      <section id="middle">  
        <div id="homepageBanner">
          <h1>{RichText.asText(document.data.title)}</h1>
          <Link to={PrismicLink.url(document.data.hero_link, PrismicConfig.linkResolver)}>
            <img src={document.data.hero_image.url} alt={RichText.asText(document.data.hero_alt_text)}/>
            <div className="bannerCTABox">
              <div className="textwidget">
                {RichText.render(document.data.hero_text)}
              </div>
            </div>
          </Link>
        </div>
        <aside id="homepageCTAs">
          {ctaContent}
        </aside>
      </section>
    );
  }
}

export const query = graphql`
  query IndexPageQuery {
    allPrismicDocument(filter: { type: { eq: "homepage" } }) {
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
            hero_image {
              url
            }
            hero_alt_text {
              type
              text
            }
            hero_text {
              type
              text
              spans {
                start
                end
                type
                data {
                  label
                }
              }
            }
            hero_link {
              id
              type
              slug
              lang
              uid
              link_type
              isBroken
            }
            ctas {
              cta_heading {
                type
                text
              }
              cta_text {
                type
                text
              }
              link_text {
                type
                text
              }
              link {
                id
                type
                slug
                lang
                uid
                link_type
                isBroken
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
`

export default IndexPage
