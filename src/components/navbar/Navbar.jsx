import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../App'

function Navbar() {
  const {dispatch} = useContext(Context)
  const handleBagClick = ()=>{
    dispatch({type: 'CHANGE_BAG'})
  }
  return (
    <section className='navbar'>
      <div className="logo">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      
      <div className="links">
        <ul>
          <li><Link to="/">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/kids">Kids</Link></li>
          <li><Link to="/sales">Sales</Link></li>
        </ul>
      </div>
      
      <div onClick={handleBagClick} className="bag">
        <img src="src/assets/bag.png" alt="bag" />
      </div>
      
    </section>
  )
}

export default Navbar