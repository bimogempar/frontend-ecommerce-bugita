import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center sticky top-0 bg-white -m-5 px-5 py-3 mb-5'>
            <NavLink to="/">
                Logo
            </NavLink>
            <div className='flex items-center space-x-3'>
                <NavLink to="/mycart">
                    <div className="flex items-center">
                        <AiOutlineShoppingCart size={30} className="text-green-500" />
                    </div>
                </NavLink>
                <img src="https://joeschmoe.io/api/v1/female/jeri" alt="" className='rounded-full w-8 h-8 bg-red-500' />
            </div>
        </div>
    )
}
