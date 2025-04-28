/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import './sales.css'
import { Context } from '../../App'
import { Card } from '../card/Card'


function Sales() {
  const {data} = useContext(Context)
  
  return (
    <section className="sales">
      <SubSale title='Men' data={data[0]}/>
      <SubSale title='Women' data={data[1]}/>
      
      
    </section>
  )
}

const SubSale = ({title, data})=>{
  console.log(data);
  return(
    <div className='sub-sale'>
      <div className="title"><h3>{title}</h3></div>
      <div className="products">
        {
          
          
          data?.map((product, key)=>{
            return product.title === 'Email a Gift Card' ? '' : <Card key={key} img={product?.detailPictureFive} title={product.title} price={product.rawPrice}/>
          })
        }
        
      </div>  
    </div>  
    
  )
}



export default Sales