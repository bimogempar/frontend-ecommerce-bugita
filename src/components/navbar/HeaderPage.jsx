import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function HeaderPage({ title, back }) {
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-3">
            <div className='col-span-1 self-center text-[18px]'><BsArrowLeftCircle size={25} onClick={() => navigate(-back)} className="cursor-pointer" /></div>
            <div className='text-[18px] font-medium col-span-1 text-center'>{title}</div>
            <div className="col-span-1"></div>
        </div>
    )
}
