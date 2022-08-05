import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center sticky top-0 bg-white -m-5 px-5 py-2 mb-5'>
            <div className='flex items-center'>
                <img src="https://joeschmoe.io/api/v1/female/jeri" alt="" className='rounded-full w-10 h-10 bg-red-500' />
                <div className='ml-4'>
                    <div className='text-xs text-gray-500'>Good Morning</div>
                    <div className='text-sm'>Arif T B</div>
                </div>
            </div>
            <NavLink to="/mycart">
                <Cart />
            </NavLink>
        </div>
    )
}
