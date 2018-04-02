import React from 'react';
import Link from 'gatsby-link';

// Resources
import logo from './images/myke-gable-logo.png';
import menuToggle from './images/img-mobile-white.png';
import musicRest from './images/music-rest.png';

const Header = () => (
  <div>
    <header>
      <Link to="/">
        <img className="logo" src={logo} alt="Myke Gable Music Logo"/>
      </Link>
    </header>

    <nav>
      <h4 id="mainNavTitle">
        <a href="#">
          Menu
          <span className="navToggleIcon">
            <img src={menuToggle} alt="mobile nav toggle icon"/>
          </span>
        </a>
      </h4>
      <ul id="menu-main-nav" className="menu">
        <li><Link to="/" activeClassName="current-menu-item" exact>Home</Link></li>
        <img src={musicRest}/>
        <li><Link to="/bio" activeClassName="current-menu-item">Bio</Link></li>
        <img src={musicRest}/>
        <li><Link to="/hiring" activeClassName="current-menu-item">Hiring Me</Link></li>
        <img src={musicRest}/>
        <li><Link to="/music" activeClassName="current-menu-item">Music</Link></li>
        <img src={musicRest}/>
        <li><Link to="/contact" activeClassName="current-menu-item">Contact</Link></li>
      </ul>
    </nav>
  </div>
)

export default Header
