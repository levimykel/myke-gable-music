import React from 'react';
import Cookies from 'js-cookie';
import qs from 'qs';
import Prismic from 'prismic-javascript';
import Sidebar from '../components/Sidebar';
import PrismicConfig from '../../prismic-config';

const PREVIEW_EXPIRES = 1/48; // 30 minutes

export default class Preview extends React.Component {

  componentWillMount() {
    const params = qs.parse(this.props.location.search.slice(1));
    const apiEndpoint = this.props.data.site.siteMetadata.prismicEndpoint;
    Prismic.api(apiEndpoint).then(api => {
      api.previewSession(params.token, PrismicConfig.linkResolver, '/').then((url) => {
        Cookies.set(Prismic.previewCookie, params.token, { expires: PREVIEW_EXPIRES });
        this.props.history.push(url);
      });
    });
  }

  render() {
    return (
      <section id="middle">
        <article id="content">
          <h1>Loading Preview...</h1>
        </article>

        <Sidebar/>
      </section>
    )
  }
}

export const query = graphql`
  query PreviewQuery {
    site {
      siteMetadata {
        title
        prismicEndpoint
      }
    }
  }
`
