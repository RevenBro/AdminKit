import React from 'react'

import SearchIcon from '../../assets/Images/search-icon.svg'
import NotifyIcon from '../../assets/Images/notify-icon.svg'
import BrattiRasmi from '../../assets/Images/bratti-rasmi.svg'
import Minicard from '../../components/Minicard/Minicard'
import Trendcard from '../../components/Trendcard/Trendcard'

import PlusIcon from '../../assets/Images/plus-icon.svg'

function Overview() {
  return (
    <div>
      <div className='p-[30px] mb-[28px] flex items-center justify-between w-full'>
        <h2 className='text-[#252733] text-[24px] font-bold'>Overview</h2>
        <div className='flex items-center'>
          <div className='head-top-wrap flex items-center space-x-[20px] mr-[32px]'>
            <img className='cursor-pointer' src={SearchIcon} width={18} height={18} alt='Search'/>
            <img className='cursor-pointer' src={NotifyIcon} width={18} height={18} alt="Notification"/>
          </div>
          <span className='vertical-line'>|</span>
          <div className='flex items-center ml-[32px] space-x-3'>
            <span className='text-[#252733] text-[14px] font-semibold leading-5'>Jones Ferdinand</span>
            <img className='rounded-[50%]' src={BrattiRasmi} width={44} height={44} alt='Bitta brat'/>
          </div>
        </div>
      </div>

      <ul className='flex mb-[30px] items-center justify-between'>
        <Minicard title={"Unresolved"} number={"60"}/>
        <Minicard title={"Overdue"} number={"16"}/>
        <Minicard title={"Open"} number={"43"}/>
        <Minicard title={"On hold"} number={"64"}/>
      </ul>

      <div className='px-[30px] mb-[30px]'>
        <div className='p-[32px] relative rounded-[8px] items-start flex justify-between border-[1px] border-solid border-[#DFE0EB]'>
          <div className='relative w-70% flex items-end justify-between'>
            <div>
              <span className='text-[19px] font-bold text-[#252733] mb-[9px]'>Today's trends</span>
              <p className='text-[#9FA2B4] text-[12px] font-normal leading-4'>as of 25 May 2019, 09:41 PM</p>
            </div>
            <div className='space-x-3 flex'>
              <span className='absolute right-[-400px] pl-2 border-l-[2px] border-l-[#9FA2B4]'>Today</span>
              <span className='absolute right-[-550px] pl-2 border-l-[2px] border-l-[#9FA2B4]'>Yesterday</span>
            </div>
          </div>

          <div className='w-30%'>
            <Trendcard title={"Resolved"} number={"449"}/>
            <Trendcard title={"Recieved"} number={"426"}/>
            <Trendcard title={"Average first response time"} number={"33m"}/>
            <Trendcard title={"Average response time"} number={"3h 8m"}/>
            <Trendcard title={"Resolution within SLA"} number={"94%"}/>
          </div>
        </div>
      </div>

      <div className='flex justify-between px-[30px] mb-[30px]'>
        <div className='w-[45%] border-[1px] border-solid border-[#DFE0EB] rounded-[8px] p-[30px]'>
          <div className='flex justify-between mb-[16px]'>
            <div>
              <h3 className='text-[19px] font-bold leading-[-1px] text-[#252733] tracking-[0.4px] mb-[9px]'>Unsolved tickets</h3>
              <p className='text-[12px] text-[#9FA2B4] font-normal'>Group: <span className='text-[#4B506D] font-medium'>Support</span></p>
            </div>
            <span className='text-[#3751FF] text-[14px] font-semibold leading-5 tracking-[0.2px] cursor-pointer'>View details</span>
          </div>
          <ul>
            <li className='flex justify-between items-center py-[20px]'>
              <p className='text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]'>Waiting on Feature Request</p>
              <span className='text-[#9FA2B4] [text-14px] font-semibold leading-5 tracking-[0.2px]'>4238</span>
            </li>
            <hr/>
            <li className='flex justify-between items-center py-[20px]'>
              <p className='text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]'>Awaiting Customer Response</p>
              <span className='text-[#9FA2B4] [text-14px] font-semibold leading-5 tracking-[0.2px]'>1005</span>
            </li>
            <hr/>
            <li className='flex justify-between items-center py-[20px]'>
              <p className='text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]'>Awaiting Developer Fix</p>
              <span className='text-[#9FA2B4] [text-14px] font-semibold leading-5 tracking-[0.2px]'>914</span>
            </li>
            <hr/>
            <li className='flex justify-between items-center py-[20px]'>
              <p className='text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]'>Pending</p>
              <span className='text-[#9FA2B4] [text-14px] font-semibold leading-5 tracking-[0.2px]'>281</span>
            </li>
          </ul>
        </div>

        <div className='w-[45%] border-[1px] border-solid border-[#DFE0EB] rounded-[8px] p-[30px]'>
          <div className='flex justify-between mb-[16px]'>
            <div>
              <h3 className='text-[19px] font-bold leading-[-1px] text-[#252733] tracking-[0.4px] mb-[9px]'>Tasks</h3>
              <p className='text-[12px] text-[#9FA2B4] font-normal'>Today</p>
            </div>
            <span className='text-[#3751FF] text-[14px] font-semibold leading-5 tracking-[0.2px] cursor-pointer'>View all</span>
          </div>

          <ul>
            <li className='flex justify-between items-center py-[20px]'>
              <input className='outline-none' type="text" required placeholder='Create new task'/>
              <button className='text-[30px] inline-block bg-[#F0F1F7] rounded-[8px]'>
                <img src={PlusIcon} width={24} height={24} alt="Add"/>
              </button>
            </li>
            <hr/>
            <li className='flex justify-between items-center py-[20px]'>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox'/>
                <p className='text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]'>Finish ticket update</p>
              </div>
              <button className='text-[11px] font-bold leading-[-1px] tracking-[0.5px] bg-[#FEC400] rounded-[8px] py-[5px] w-[74px] text-white'>URGENT</button>
            </li>
            <hr/>
            <li className='flex justify-between items-center py-[20px]'>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox'/>
                <p className='text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]'>Create new ticket example</p>
              </div>
              <button className='text-[11px] font-bold leading-[-1px] tracking-[0.5px] bg-[#29CC97] rounded-[8px] py-[5px] w-[54px] text-white'>NEW</button>
            </li>
            <hr/>
            <li className='flex justify-between items-center py-[20px]'>
              <div className='flex space-x-2 items-center'>
                <input type='checkbox'/>
                <p className='text-[14px] font-semibold leading-5 tracking-[0.2px] text-[#252733]'>Update ticket report</p>
              </div>
              <button className='text-[11px] font-bold leading-[-1px] tracking-[0.5px] bg-[#F0F1F7] rounded-[8px] py-[5px] w-[76px] text-[#9FA2B4]'>DEFAULT</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Overview