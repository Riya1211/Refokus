import React from 'react'
import Stripe from './Stripe'
import Image1 from '../assets/StripeImages/Image1.svg'
import Image2 from '../assets/StripeImages/Image2.svg'
import Image3 from '../assets/StripeImages/Image3.svg'
import Image4 from '../assets/StripeImages/Image4.svg'
import Image5 from '../assets/StripeImages/Image5.svg'
import Image6 from '../assets/StripeImages/Image6.svg'

const Stripes = () => {
    var data = [
        {img: Image1, number:48},
        {img: Image2 , number:2},
        {img: Image3 , number:11},
        {img: Image4 , number:48},
        {img: Image5 , number:2},
        {img: Image6 , number:11},
    ]
  return (
    <div className='flex items-center'>
        {data.map((elem, index)=> (
            <Stripe key={index} val={elem} />
        ))}
    </div>
  )
}

export default Stripes