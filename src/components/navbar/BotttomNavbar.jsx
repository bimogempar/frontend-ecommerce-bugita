import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export default function BotttomNavbar() {
    return (
        <div className='flex justify-around items-center sticky bottom-0 -m-5 px-5 py-4 bg-gradient-to-l from-green-600 to-green-500 text-white text-xl'>
            <AiFillHome className='hover:scale-110 transition ease-in-out delay-150' />
            <MdDashboard className='hover:scale-110 transition ease-in-out delay-150' />
            <IoMdListBox className='hover:scale-110 transition ease-in-out delay-150' />
            <NavLink to='/user-profile'>
                <FaUser className='hover:scale-110 transition ease-in-out delay-150' />
            </NavLink>
        </div>
    )
}
