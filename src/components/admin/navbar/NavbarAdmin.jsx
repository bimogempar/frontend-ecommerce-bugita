import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, NavLink } from 'react-router-dom'
import { logout } from '../../../redux/slice/AuthSlice'
import { FiLogOut } from 'react-icons/fi'
import Swal from 'sweetalert2'

function NavbarAdmin() {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const handleLogout = () => {
        Swal.fire({
            title: "Yakin logout?",
            text: "Apakah anda yakin untuk log out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "rgb(22 163 74)",
            cancelButtonColor: "rgb(156 163 175)",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logout())
                Navigate('/')
            }
        });
    }

    return (
        <div className='bg-white'>
            <div className='md:mx-20 flex flex-col lg:flex-row'>
                <div className='flex items-center justify-between px-4 py-4 lg:py-0 border-b border-gray-300 lg:border-b-0'>
                    <div>
                        <NavLink to='/admin' className='uppercase font-semibold'>Logo</NavLink>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none block lg:hidden'>
                            <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}>
                    <div className='flex flex-col lg:flex-row'>
                        <NavLink to="/admin/products" className='block px-4 py-2 lg:py-5 text-black hover:bg-green-600 hover:text-white'>Products</NavLink>
                        <NavLink to="/admin/users" className='block px-4 py-2 lg:py-5 text-black hover:bg-green-600 hover:text-white'>Users</NavLink>
                    </div>
                    <div className='flex flex-col lg:flex-row'>
                        <div onClick={handleLogout} className='cursor-pointer hover:bg-green-600 hover:text-white block px-4 py-2 lg:py-5 text-black'><div className="flex items-center gap-3"><FiLogOut /> Logout</div></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NavbarAdmin