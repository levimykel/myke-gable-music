import React from 'react';
import Link from 'gatsby-link';

// Resources
import homeBannerImg from './images/myke-gable-banner.jpg';

const IndexPage = () => (
  <section id="middle">  
    <div id="homepageBanner">
      <h1>Homepage</h1>
      <Link to="/music">
        <img src={homeBannerImg} alt="Myke Gable with his guitar"/>
        <div className="bannerCTABox">
          <div className="textwidget">
            <p>Listen to examples of Myke's covers.</p>
            <p className="viewMore">Music Page →</p>
          </div>
        </div>
      </Link>
    </div>
    <aside id="homepageCTAs">
      <div className="CTA">
        <h3 className="widgetHeader">About Myke</h3>
        <div className="widgetContent">
          <div className="textwidget">
            <p>Myke Gable is a musician living in Olympia, WA. Myke has over 30 years’ experience performing acoustic guitar-oriented music at clubs, restaurants, hotels, and private parties all over the world.</p>
            <p><Link className="viewMore" to="/bio">Read More →</Link></p>
          </div>
        </div>
      </div>

      <div className="CTA">
        <h3 className="widgetHeader">Hiring Myke</h3>
        <div className="widgetContent">
          <div className="textwidget">
            <p>Have any questions about hiring Myke? Check the FAQ.</p>
            <p><Link className="viewMore" to="/hiring">View FAQ Here →</Link></p>
          </div>
        </div>
      </div>

      <div className="CTA">
        <h3 className="widgetHeader">Contact Myke</h3>
        <div className="widgetContent">
          <div className="textwidget">
            <p>For booking or more information, feel free to send Myke a message.</p>
            <p><Link className="viewMore" to="/contact">Contact Page →</Link></p>
          </div>
        </div>
      </div>
    </aside>
  </section>
)

export default IndexPage
