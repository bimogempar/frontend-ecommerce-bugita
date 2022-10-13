import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function HeaderPage({ title, back }) {
    const navigate = useNavigate()
    return (
        <div className="flex justify-between">
            <div className='self-center text-[18px] '><BsArrowLeftCircle size={25} onClick={() => navigate(-back)} className="cursor-pointer" /></div>
            <div className='text-[18px] col-span-4 font-medium text-center '>{title}</div>
            <div className=""></div>
        </div>
    )
}
