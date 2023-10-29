import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { Context } from '../../App'
import  logo  from '/src/assets/logo.png';
import  bag  from '/src/assets/bag.png';

function Navbar() {
  const {dispatch} = useContext(Context)
  const handleBagClick = ()=>{
    dispatch({type: 'CHANGE_BAG'})
  }
  return (
    <section className='navbar'>
      <div className="logo">
        <img src={logo} alt="logo" />
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
        <img src={bag} alt="bag" />
      </div>
      
    </section>
  )
}

export default Navbar
