import React, { useState } from 'react'

function NavbarAdmin() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className='bg-white'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='flex items-center justify-between px-4 py-4 lg:py-0 border-b border-gray-300 lg:border-b-0'>
                        <div>
                            <a href="/" className='uppercase font-semibold'>Logo</a>
                        </div>
                        <div>
                            <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none block lg:hidden'>
                                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path className={!isOpen ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} lg:flex flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0`}>
                        <div className='flex flex-col lg:flex-row'>
                            <a href="/" className='block px-4 py-2 lg:py-5 text-black hover:text-gray-500'>Transactions</a>
                            <a href="/" className='block px-4 py-2 lg:py-5 text-black hover:text-gray-500'>Add</a>
                            <a href="/" className='block px-4 py-2 lg:py-5 text-black hover:text-gray-500'>List User</a>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <a href="/" className='block px-4 py-2 lg:py-5 text-black hover:text-gray-500'>Sign In</a>
                            <a href="/" className='block px-4 py-2 lg:py-5 text-black hover:text-gray-500'>Sign Out</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin