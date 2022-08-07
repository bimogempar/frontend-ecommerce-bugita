
import React from 'react'
import NavbarAdmin from '../navbar/NavbarAdmin'
import Footer from '../../footer/Footer'

function LayoutAdmin() {
    return (
        <div className='bg-gray-100 w-full'>
            <div>
                <NavbarAdmin />
            </div>
            <Footer />
        </div>
    )
}

export default LayoutAdmin