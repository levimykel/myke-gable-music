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
    return(
      <div>
        <Helmet
          title="Myke Gable Music"
          meta={[
            { name: 'description', content: 'Myke Gable is a musician living in Olympia, WA with over 30 years of experience performing acoustic guitar-oriented music at clubs, restaurants, hotels, and private parties.' }
          ]}
        >
          <link rel="icon" type="image/png" href={favicon}/>
        </Helmet>
        <Header />
        {this.props.children()}
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
