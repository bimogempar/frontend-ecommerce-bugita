
import React from 'react'
import NavbarAdmin from '../navbar/NavbarAdmin'
import Footer from '../../footer/Footer'

function LayoutAdmin(props) {
    return (
        <div className='bg-gray-100 w-full'>
            <div>
                <NavbarAdmin />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutAdmin