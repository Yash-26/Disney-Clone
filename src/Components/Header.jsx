import React, { useState } from 'react'
import profile from '../assets/Images/Profile.png'
import logo from '../assets/Images/logo.png'
import { HiHome, HiPlay, HiDotsVertical, HiPlus, HiStar} from "react-icons/hi";
import { HiTv, HiMagnifyingGlass } from "react-icons/hi2";
import HeaderItems from './HeaderItems';


function Header() {

    const [toggle,settoggle] = useState(false) 

    const menu = [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCHLIST',
            icon:HiPlus
        },
        {
            name:'Original',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlay
        },
        {
            name:'TV SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-8'>
            <img src={logo} className='w-[80px] md:w-[120px] object-cover' />

            <div className='hidden md:flex gap-8'>
            {
                menu.map((item) => (
                    <HeaderItems name={item.name} Icon={item.icon}/>
                ))
            }
            </div>
            <div className='flex md:hidden gap-5'>
            {
                menu.map((item,index) => index<3&& (
                    <HeaderItems name={''} Icon={item.icon}/>
                ))
            }
            <div className='md:hidden' onClick={e=>settoggle(!toggle)}>
                <HeaderItems name={''} Icon={HiDotsVertical} />

                {toggle?
                <div className='absolute mt-2 px-5 py-4 bg-[#121212] border-gray-700 border-[1px] p-4'>
                    {
                        menu.map((item,index) => index>2&&(
                            <HeaderItems name={item.name} Icon={item.icon}/>
                        ))
                    }
                </div>
                :null}
            </div>
            </div>

        </div>

        <img src={profile} className='w-[40px] rounded-full'/>

    </div>
  )
}

export default Header