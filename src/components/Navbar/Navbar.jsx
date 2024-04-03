import React from 'react'

import { Link } from 'react-router-dom'
import Navlink from '../Navlink/Navlink'

import SiteLogo from '../../assets/Images/logo.svg'
import {Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets} from '../../assets/Images/icon'

function Navbar() {
  return (
    <div className='w-[280px] overflow-auto bg-[#363740] h-[100vh]'>
        <Link to={"/"} className='pt-9 pl-8 flex items-center space-x-3 mb-[60px]'>
          <img src={SiteLogo} width={32} height={32} alt='Site Logo'/>
          <span className='font-bold text-[19px] text-[#A4A6B3]'>Dashboard Kit</span>
        </Link>
        <div>
          <ul>
            <Navlink url={"/"} title={"Overview"}>
              <Overview/>
            </Navlink>
            <Navlink url={"/tickets"} title={"Tickets"}>
              <Tickets/>
            </Navlink>
            <Navlink url={"/ideas"} title={"Ideas"}>
              <Ideas/>
            </Navlink>
            <Navlink url={"/contacts"} title={"Contacts"}>
              <Contacts/>
            </Navlink>
            <Navlink url={"/agents"} title={"Agents"}>
              <Agents/>
            </Navlink>
            <Navlink url={"/articles"} title={"Articles"}>
              <Articles/>
            </Navlink>
            <hr className='h-[1px] text-[#9b9ba2] my-[16px]'/>
            <Navlink url={"/settings"} title={"Settings"}>
              <Settings/>
            </Navlink>
            <Navlink url={"/subscription"} title={"Subscription"}>
              <Subscription/>
            </Navlink>
          </ul>
        </div>
    </div>
  )
}

export default Navbar