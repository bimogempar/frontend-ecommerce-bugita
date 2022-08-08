import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function BotttomNavbar() {
    const navigate = useNavigate()

    return (
        <div className='flex justify-around items-center sticky bottom-0 -m-5 px-5 py-4 bg-gradient-to-l from-green-600 to-green-500 text-white text-xl'>
            <AiFillHome className='hover:scale-110 transition ease-in-out delay-150 cursor-pointer' onClick={() => navigate('/')} />
            <MdDashboard className='hover:scale-110 transition ease-in-out delay-150 cursor-pointer' onClick={() => navigate('/products')} />
            <IoMdListBox className='hover:scale-110 transition ease-in-out delay-150 cursor-pointer' onClick={() => navigate('/notification')} />
            <FaUser className='hover:scale-110 transition ease-in-out delay-150 cursor-pointer' onClick={() => navigate('/userprofile')} />
        </div>
    )
}
