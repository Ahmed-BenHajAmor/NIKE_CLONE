/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import './sales.css'
import { Context } from '../../App'
import { Card } from '../card/Card'
import { i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20 } from '../../assets/images'
import { iw1, iw2, iw3, iw4, iw5, iw6, iw7, iw8, iw9, iw10, iw11, iw12, iw13, iw14, iw15, iw16, iw17, iw18, iw19, iw20 } from '../../assets/IW'


function Sales() {
  const {data} = useContext(Context)
  const imgsMen = {
    i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20
  }

  const imgsW = {
    i1: iw1, i2: iw2, i3: iw3, i4: iw4, i5: iw5, i6: iw6, i7: iw7, i8: iw8, i9: iw9, i10: iw10, i11: iw11, i12: iw12, i13: iw13, i14: iw14, i15: iw15, i16: iw16, i17: iw17, i18: iw18, i19: iw19, i20: iw20
  }
  return (
    <section className="sales">
      <SubSale title='Men' data={data[0]} imgs={imgsMen}/>
      <SubSale title='Women' data={data[1]} imgs={imgsW}/>
      
      
    </section>
  )
}

const SubSale = ({title, data, imgs})=>{
  
  var i = 0
  return(
    <div className='sub-sale'>
      <div className="title"><h3>{title}</h3></div>
      <div className="products">
        {
          
          
          data?.map((product, key)=>{
            i++
            if(i == 21){
              i = 1
            }
            return product.title === 'Email a Gift Card' ? '' : <Card key={key} img={imgs[`i${i}`]} title={product.title} price={product.rawPrice}/>
          })
        }
        
      </div>  
    </div>  
    
  )
}



export default Sales