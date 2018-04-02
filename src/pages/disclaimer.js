import React from 'react';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';

const DisclaimerPage = ({ data }) => (
  <section id="middle">
    <Helmet
      title={"Disclaimer | " + data.site.siteMetadata.title}
    />
    <article id="content">
      <p><strong>Disclaimer / Privacy Notice </strong></p>
      <p>Myke Gable Music has made reasonable efforts to ensure the accuracy of the information throughout this website. However, Myke Gable Music reserves the right to make appropriate changes in information found on this website. </p>
      <p>Nothing contained in this website shall be construed as contractual rights. </p>
      <p>Myke Gable Music has many links to other websites. These include links to websites operated by other government agencies, nonprofit organizations and private businesses. </p>
      <p>Myke Gable Music does not endorse any content or linked materials found on websites or web services provided by mykegablemusic.com. </p>
      <p>When linked to another site, you are no longer on the mykegablemusic.com website and this Privacy Notice will not apply. When linked to another website, you are subject to the privacy policy of that new site.</p>
      <p>Myke Gable Music does not warrant the accuracy, reliability or timeliness of any information published by this system, nor endorses any content, viewpoints, products, or services linked from this system, and shall not be held liable for any losses caused by reliance on the accuracy, reliability or timeliness of such information. Portions of such information may be incorrect or not current. Any person or entity that relies on any information obtained from this system does so at their own risk.</p>
    </article>

    <Sidebar/>
  </section>
)

export const query = graphql`
  query DisclaimerQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default DisclaimerPage
