import React from 'react';
import Link from 'gatsby-link';

const Sidebar = () => (
  <aside id="sidebar">
    <div className="widget">
      <h3 className="widgetHeader">
        <Link to="/">Myke Gable Music</Link>
      </h3>
      <div className="widgetContent">
        <ul className="localNav">
          <li><Link to="/" activeClassName="current-menu-item" exact>Home</Link></li>
          <li><Link to="/bio" activeClassName="current-menu-item">Bio</Link></li>
          <li><Link to="/hiring" activeClassName="current-menu-item">Hiring Me</Link></li>
          <li><Link to="/music" activeClassName="current-menu-item">Music</Link></li>
          <li><Link to="/contact" activeClassName="current-menu-item">Contact</Link></li>
        </ul>
      </div>
    </div>
    <div className="widget">
      <h3 className="widgetHeader">Contact Myke</h3>
      <div className="widgetContent">
        <div className="textwidget">
          <p>For booking or more information, feel free to send Myke a message.</p>
          <p><Link className="viewMore" to="/contact">Contact Page →</Link></p>
        </div>
      </div>
    </div>
  </aside>
)

export default Sidebar
