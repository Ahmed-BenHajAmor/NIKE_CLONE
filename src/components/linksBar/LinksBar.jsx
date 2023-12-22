import React from 'react';
import './linksBar.css';
import { Link } from 'react-router-dom';
function LinksBar({showBar}) {
  return (
    <div className={`linksRes ${showBar ? 'showBar' : 'hideBar'}`}>
        <ul>
          <li><Link to="/">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/sales">Sales</Link></li>
        </ul>
      </div>
  )
}

export default LinksBar