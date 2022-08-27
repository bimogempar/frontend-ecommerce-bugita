import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
                                    <div className='text-sm font-medium text-black'>{product.title}</div>
                                    <div className='p-1.5 text-xs font-medium tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50'>Rp. {product.price}</div>
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
