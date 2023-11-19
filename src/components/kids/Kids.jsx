import React from 'react';
import './kids.css';
import { Link } from 'react-router-dom';



function Kids() {
  return (
    <section className="sec kids">
      <div className='text-kids text'>
        <div>
          <h1>BRAND NEW EDITION</h1>
          <p>WE'VE SET BOLD AND AMBITIOUS TARGETS FOR 2025
          AGAINST OUR FOCUS AREAS OS PEOPLE, PLANET AND PLAY.
          LEARN MORE ABOUT OUR JOURNEY TO A BETTER FUTURE</p>
          <Link to="/sales">SHOP</Link>
        </div>  
      </div>

      <div className="kids-img">
        
      </div>
    </section>
  )
}

export default Kids
