import React from 'react'
import './women.css'
import { Link } from 'react-router-dom'

function Women() {
  return (
    <section className="sec women">
      <div className='text text-women'>
        <div>
          <h1>GIRLS POWER</h1>
          <p>WE'VE SET BOLD AND AMBITIOUS TARGETS FOR 2025
          AGAINST OUR FOCUS AREAS OS PEOPLE, PLANET AND PLAY.
          LEARN MORE ABOUT OUR JOURNEY TO A BETTER FUTURE</p>
          <Link to="/sales">SHOP</Link>
        </div>
      </div>
    </section>
  )
}

export default Women