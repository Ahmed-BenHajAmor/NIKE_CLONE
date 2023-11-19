import React, { useContext } from 'react'
import './card.css'
import { Context } from '../../App'
import { FaTrash } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Card = ({img, title, price})=>{
  const {dispatch} = useContext(Context)
  const handleButtonClick = (price)=>{
    const product = {
      img,
      title,
      price,
    }
    dispatch({type: 'UPDATE_TOTAL', payload: {price, operation: 1}})

    dispatch({type: 'ADD_TO_BAG', payload: {product}})
  }
    return(
      <div className="card">
        <div className='img-text-price-card'>
          <div className='card-img'><LazyLoadImage loading='lazy' effect="blur" src={img} alt="big shoe 3" /></div>
          <div className='card-title'><p>{title}</p></div>
          <div className='price'><p>{price} dt</p></div>
        </div>
        
        <div className='card-btn btn'><button onClick={()=>handleButtonClick(price)}>ADD TO BAG</button></div>
      </div>
    )
  }

export const BagCard = ({img, title, price, quantity})=>{
  const {dispatch} = useContext(Context)
  const handelDeleteFromBag = ()=>{
    dispatch({type: 'DELETE_FORM_BAG', payload : {title, quantity}})
    dispatch({type: 'UPDATE_TOTAL', payload: {price, operation: -1}})
  }
  return(
    <div className="bag-card">
      <div className='bag-card-img'><LazyLoadImage effect='blur' loading='lazy' src={img} alt="big shoe 3" /></div>
      <div className="titlePrice">
        <div className='bag-card-title'><p>{title}</p></div>
        <div className='bag-card-price'>
          <div><p>dt {price}</p></div>
          <div><p>x{quantity}</p></div>

        </div>
      </div>
      
      <div className='bag-btn'><button onClick={()=>handelDeleteFromBag()}><FaTrash color='black'/></button></div>
    </div>
  )
}


