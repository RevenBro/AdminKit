import React from 'react'

function Trendcard({title, number}) {
  return (
    <div className='border-b-[1px] flex flex-col text-center px-14 py-[15px]'>
        <span className='text-[16px] font-semibold leading-6 text-[#9FA2B4] mb-[6px]'>{title}</span>
        <strong className='text-[24px] font-bold text-[#252733]'>{number}</strong>
    </div>
  )
}

export default Trendcard