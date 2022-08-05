import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Search() {
    return (
        <div className='justify-self-center'>
            <div className='bg-white p-2 rounded-full'>
                <div className="flex space-x-2 items-center">
                    <AiOutlineSearch className='text-green-500 opacity-100' />
                    <input className="bg-white outline-none text-sm w-full text-gray-400" type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    )
}
