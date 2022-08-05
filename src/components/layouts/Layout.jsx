import React from 'react'
import Navbar from '../navbar/Navbar'

export default function Layout(props) {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className='p-5 bg-gray-100 w-full lg:w-1/3 md:w-1/2 justify-self-center space-y-5'>
                <Navbar />
                {props.children}
            </div>
        </div>
    )
}
