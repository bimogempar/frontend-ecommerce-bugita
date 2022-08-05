import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

export default function Layout(props) {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <div className='relative min-h-screen p-5 bg-gray-100 w-full lg:w-1/3 md:w-1/2 justify-self-center space-y-5 pb-14'>
                <Navbar />
                {props.children}
                <Footer />
            </div>
        </div>
    )
}
