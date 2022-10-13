import React from 'react'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

export default function TableProducts({ products, setPage, page }) {
    return (
        <div>
            {/* Website */}
            <div className='shadow hidden md:block'>
                <table className='table-auto w-full rounded-lg'>
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>No</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Nama Produk</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Kategori</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Foto</th>
                            <th className='hidden md:block p-3 text-sm font-semibold tracking-wide text-left'>Deskripsi Produk</th>
                            <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Harga</th>
                            <th className='w-32 p-3 text-sm font-semibold tracking-wide text-center'>Aksi</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        {
                            products !== undefined &&
                            products.paginateData.map((item, index) => {
                                return (
                                    <tr key={item.id} className='bg-white'>
                                        <td className='p-3 text-sm text-gray-700'><div className='font-bold text-blue-500'>{index + 1}</div></td>
                                        <td className='p-3 text-sm text-gray-700'>{item.name}</td>
                                        <td className='p-3 text-sm text-gray-700'>{item.category.name}</td>
                                        <td className='p-3 text-sm text-gray-700'><img src={item.productsImage[0]?.path} className="h-24 w-full object-cover md:h-full md:w-24" alt="" /></td>
                                        <td className='hidden md:block p-3 text-sm text-gray-700'>{item.description.substring(0, 50) + '...'}</td>
                                        <td className='p-3 text-sm text-gray-700'>Rp. {item.price}</td>
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
            <div className='mt-2 flex justify-end space-x-3'>
                {
                    page !== 1 && <button className='p-2 bg-white rounded-lg' onClick={() => setPage(prevState => prevState - 1)}>Back</button>
                }
                {
                    products?.previous ? null : <button className='p-2 bg-white rounded-lg' onClick={() => setPage(products.next.page)}>Next</button>
                }
            </div>

            {/* Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                {
                    products !== undefined &&
                    products.paginateData?.map((item, index) => {
                        return (
                            <div className='bg-white space-y-3 p-4 rounded-lg shadow' key={index}>
                                <div className='flex items-center space-x-2 text-sm'>
                                    <div>
                                        <div className='text-blue-500 font-bold hover:underline'>{index + 1}.</div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <div className='text-sm font-medium text-black'>{item.name}</div>
                                        <div className='p-1.5 text-sm cursor-pointer font-medium tracking-wider text-green-800 bg-yellow-300 rounded-lg bg-opacity-50'><AiOutlineEdit /></div>
                                    </div>
                                </div>
                                <img src={item.productsImage[0]?.path} className="h-24 w-42 object-cover md:h-full md:w-24" alt="" />
                                <div className='text-sm text-gray-700'>{item.description.substring(0, 50) + '...'}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
