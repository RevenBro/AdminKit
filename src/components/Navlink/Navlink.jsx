import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({url, children, title}) {
  return (
    <NavLink className={"py-[17px] pl-[32px] text-[#999ba8] relative flex items-center space-x-6"} to={url}>
        {children}
        <span className=' text-[16px] font-normal '>{title}</span>
    </NavLink>
  )
}

export default Navlink