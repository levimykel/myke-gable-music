import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './fonts/CantoriaMTStd-Bold.otf';
import './fonts/CantoriaMTStd.otf';
import './fonts/AvenirLTStd-Roman.otf';
import './images/myke-gable-background-image.png';
import './index.css';
import favicon from './images/myke-gable-favicon.png';

class TemplateWrapper extends React.Component {
  
  componentDidMount() {
    require("./javascript/menuToggle.js");
  }
  
  render() {
    const prismicScript = {};
    return(
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Myke Gable is a musician living in Olympia, WA with over 30 years of experience performing acoustic guitar-oriented music at clubs, restaurants, hotels, and private parties.' }
          ]}
        >
          <link rel="icon" type="image/png" href={favicon}/>
          <script>{`
            window.prismic = {
              endpoint: "${this.props.data.site.siteMetadata.prismicEndpoint}"
            };`}
          </script>
          <script type="text/javascript" src="//static.cdn.prismic.io/prismic.min.js"></script>
        </Helmet>
        <Header />
        {this.props.children()}
        <Footer />
      </div>
    )
  }
}

export const query = graphql`
  query TemplateWrapperQuery {
    site {
      siteMetadata {
        title
        prismicEndpoint
      }
    }
  }
`

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
