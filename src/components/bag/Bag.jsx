import React, { useContext } from 'react'
import './bag.css'
import { BagCard } from '../card/Card'
import { Context } from '../../App'

function Bag({show}) {
  const { state } = useContext(Context)
  return (
    <div className={`slidingBagContainer ${show ? 'show' : 'hide'}`}>
      <div className='subContainer'>
        <div className='bagProducts'>
          {
            state.bagProducts.map((product, key)=>{
              return <BagCard  key={key} img={product.product.img} title={product.product.title} quantity={product.quantity} price={product.product.price}/>
            })
          }
        </div>
        <div className="bag-text">
          <div className='totalPrice'><p>Total Price: {state.totalPrice} dt</p></div>
          <div className="btn buy"><button className='buy'>BUY</button></div>

        </div>
      </div>
    </div>
    
  )
}

export default Bag