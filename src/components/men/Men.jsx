import React from 'react'
import './men.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import menImg from '/src/assets/header-img.png'

function Men() {
  return (
    <section className="sec men" id='men'>
      <div className='text text-men'>
        <div>
          <h1>BRAND NEW EDITION</h1>
          <p>WE'VE SET BOLD AND AMBITIOUS TARGETS FOR 2025
          AGAINST OUR FOCUS AREAS OS PEOPLE, PLANET AND PLAY.
          LEARN MORE ABOUT OUR JOURNEY TO A BETTER FUTURE</p>
          <Link to="/sales">SHOP</Link>
        </div>
      </div>
      <div className="men-img">
        <LazyLoadImage effect='blur' loading="lazy" src="{menImg} alt="Nike sneakers" />
      </div>
    </section>
  )
}

export default Men
