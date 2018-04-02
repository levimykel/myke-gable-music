import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <footer>
      <p className="copywrite">
        © Myke Gable Music 2018 ~ <Link to="/disclaimer">Disclaimer</Link>
      </p>
      <p className="login">
        <a href="http://prismic.io/dashboard" target="_blank" rel="noopener">Login</a>
      </p>
  </footer>
)

export default Footer
