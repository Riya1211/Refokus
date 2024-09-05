import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] mt-20 px-4 py-3 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center'>
        <img src={val.img} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe