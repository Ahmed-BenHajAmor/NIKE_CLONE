import React from 'react'
import './kids.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import kidsImg1 from '/home/ahmed/ReactProject/NikeClone/Nike-clone/src/assets/kids-img 1.png'
import kidsImg2 from '/home/ahmed/ReactProject/NikeClone/Nike-clone/src/assets/kids-img 2.png'

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
        <div className="img1">
          <LazyLoadImage effect='blur' loading='lazy'  src={kidsImg1} alt="img" />
        </div>
        
        <div className="img2">
          <LazyLoadImage effect='blur' loading="lazy" src={kidsImg2} alt="img" />
        </div>
        
      </div>
    </section>
  )
}

export default Kids