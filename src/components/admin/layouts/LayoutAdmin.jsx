
import React from 'react'
import NavbarAdmin from '../navbar/NavbarAdmin'
import Footer from '../../admin/footer/Footer'

function LayoutAdmin(props) {
    return (
        <div className='bg-gray-100 w-full'>
            <div className='min-h-screen flex flex-col'>
                <NavbarAdmin />
                <div className='mb-auto p-10 md:p-10 lg:mx-20'>
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LayoutAdmin