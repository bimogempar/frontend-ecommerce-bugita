import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const carts = useSelector(state => state.cart)
    const { authUser } = useSelector(state => state.authUser)

    const navigate = useNavigate()
    return (
        <div className='flex justify-between items-center sticky top-0 bg-white -m-5 px-5 py-3 mb-5 drop-shadow-md'>
            <NavLink to="/">
                Logo
            </NavLink>
            <div className='flex items-center space-x-3'>
                <NavLink to="/cart">
                    <div className="flex items-center">
                        <AiOutlineShoppingCart size={30} className="text-green-500" />
                        {
                            carts.carts.length > 0 &&
                            <span className='bg-red-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center'>{carts.totalQty} </span>
                        }
                    </div>
                </NavLink>
                <img src={authUser ? authUser.avatar : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="" className='rounded-full w-8 h-8 bg-gradient-to-t from-green-600 to-green-400' onClick={() => navigate('/userprofile')} />
            </div>
        </div>
    )
}
