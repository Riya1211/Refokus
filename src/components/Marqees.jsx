import React from 'react'
import Marquee from './Marquee'
import Image1 from '../assets/MarqueeImages/Image1.svg'
import Image2 from '../assets/MarqueeImages/Image2.svg'
import Image3 from '../assets/MarqueeImages/Image3.svg'
import Image4 from '../assets/MarqueeImages/Image4.svg'
import Image5 from '../assets/MarqueeImages/Image5.svg'
import Image6 from '../assets/MarqueeImages/Image6.svg'
import Image7 from '../assets/MarqueeImages/Image7.svg'
import Image8 from '../assets/MarqueeImages/Image8.svg'
import Image9 from '../assets/MarqueeImages/Image9.svg'
import Image10 from '../assets/MarqueeImages/Image10.svg'
import Image11 from '../assets/MarqueeImages/Image11.svg'
import Image12 from '../assets/MarqueeImages/Image12.svg'
import Image13 from '../assets/MarqueeImages/Image13.svg'
import Image14 from '../assets/MarqueeImages/Image14.svg'
import Image15 from '../assets/MarqueeImages/Image15.svg'
import Image16 from '../assets/MarqueeImages/Image16.svg'
import Image17 from '../assets/MarqueeImages/Image17.svg'
import Image18 from '../assets/MarqueeImages/Image18.svg'
import Image19 from '../assets/MarqueeImages/Image19.svg'

const Marqees = () => {
    var images = [
        [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9],
        [Image10, Image11, Image12, Image13, Image14, Image15,Image16, Image17, Image18, Image19]
    ]
  return (
    <div className='py-10 mt-32 w-full relative overflow-hidden'>
        {images.map((elem, index) =>(<Marquee direction={index === 0 ? "left": "right"} key={index} images={elem} />))}
    </div>
  )
}

export default Marqees