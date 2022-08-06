import React from 'react'
import BotttomNavbar from '../navbar/BotttomNavbar'
import Navbar from '../navbar/Navbar'

export default function Layout(props) {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className='flex flex-col min-h-screen p-5 bg-gray-100 w-full lg:w-1/3 md:w-1/2 justify-self-center'>
                <div className="mb-auto space-y-5">
                    <Navbar />
                    {props.children}
                </div>
                <BotttomNavbar />
            </div>
        </div>
    )
}
