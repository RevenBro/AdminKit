import React from 'react'

function Minicard({title, number}) {
  return (
    <li className='minicard flex flex-col mx-[30px] hover:border-[#3751FF] hover:shadow-sm cursor-pointer rounded-[8px] text-center space-y-3 w-[258px] py-[24px] px-[40px] border-[1px] border-solid border-[#DFE0EB]'>
        <span className='text-[#9FA2B4] text-[19px] font-bold leading-[-1px]'>{title}</span>
        <strong className='text-[40px] text-[#252733] font-bold leading-[-1px]'>{number}</strong>
    </li>
  )
}

export default Minicard