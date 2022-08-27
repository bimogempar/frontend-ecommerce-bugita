import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

export default function TableProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=5')
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    return (
        <div>
            <h1 className='text-xl mb-1'>List Products</h1>
            <h6 className=' text-gray-400 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, iste?</h6>

            <div className="flex m-3 gap-x-3 justify-between align-items-center">
                <button className="bg-white text-gray-500 p-2 rounded-xl" onClick={console.log('click')}>New Employee</button>
                <div className="flex bg-white p-2 w-2/5 xl:w-1/5 space-x-4 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input className="bg-white w-full outline-none text-gray-500" type="text" placeholder="Search" onKeyUp={e => console.log(e.target.value)} />
                </div>
            </div>

            {/* Website */}
            <div className='shadow hidden md:block'>
                <table className='table-auto w-full rounded-lg'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>No</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Product</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Images</th>
                            <th className='hidden md:block p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
                            <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
                            <th className='w-32 p-3 text-sm font-semibold tracking-wide text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        {
                            products.map((product, index) => {
                                return (
                                    <tr key={product.id} className='bg-white'>
                                        <td className='p-3 text-sm text-gray-700'><div className='font-bold text-blue-500'>{index + 1}</div></td>
                                        <td className='p-3 text-sm text-gray-700'>{product.title}</td>
                                        <td className='p-3 text-sm text-gray-700'><img src={product.images[0]} className="h-24 w-full object-cover md:h-full md:w-24" alt="" /></td>
                                        <td className='hidden md:block p-3 text-sm text-gray-700'>{product.description.substring(0, 50) + '...'}</td>
                                        <td className='p-3 text-sm text-gray-700'>Rp. {product.price}</td>
                                        <td className='p-3 text-sm text-gray-700'>
                                            <div className='flex gap-5 items-center justify-center'>
                                                <div className="bg-yellow-200 text-yellow-800 rounded-lg p-2 cursor-pointer">
                                                    <AiOutlineEdit />
                                                </div>
                                                <div className="bg-red-200 text-red-800 rounded-lg p-2 cursor-pointer">
                                                    <AiOutlineDelete />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {/* Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {
                    products.map((product, index) => {
                        return (
                            <div className='bg-white space-y-3 p-4 rounded-lg shadow' key={index}>
                                <div className='flex items-center space-x-2 text-sm'>
                                    <div>
                                        <div className='text-blue-500 font-bold hover:underline'>{index + 1}.</div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <div className='text-sm font-medium text-black'>{product.title}</div>
                                        <div className='p-1.5 text-sm cursor-pointer font-medium tracking-wider text-green-800 bg-yellow-300 rounded-lg bg-opacity-50'><AiOutlineEdit /></div>
                                    </div>
                                </div>
                                <img src={product.images[0]} className="h-24 w-42 object-cover md:h-full md:w-24" alt="" />
                                <div className='text-sm text-gray-700'>{product.description.substring(0, 50) + '...'}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
