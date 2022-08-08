import React from 'react'
import LayoutAdmin from '../../components/admin/layouts/LayoutAdmin'


export default function Transactions() {
    return (
        <LayoutAdmin>
            <div className='p-5 h-screen'>
                <h1 className='text-xl mb-1'>List Transactions</h1>
                <h6 className=' text-gray-400 mb-5'>Big result start from the small one</h6>

                <div className='overflow-auto rounded-lg shadow hidden md:block'>
                    <table className='w-full'>
                        <thead className='bg-gray-50 border-b-2 border-gray-200'>
                            <tr>
                                <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>Id.</th>
                                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>User</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Details</th>
                                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                                <th className='w-24 p-3 text-sm font-semibold tracking-wide text-left'>Date</th>
                                <th className='w-32 p-3 text-sm font-semibold tracking-wide text-left'>Total</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>1</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Toni</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    Sandal Jepit Swallo Hijau
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50'>Delivered</span></td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>7/8/2022</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Rp 20000</td>
                            </tr>
                            <tr className='bg-gray-100'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>2</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Anwar</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    Sandal Gunung Eiger
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-300 rounded-lg bg-opacity-50'>Shipped</span></td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>7/8/2022</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Rp 20000</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>3</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Adi Gunawan</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    Sepatu Gunung ThreeSecond
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-300 rounded-lg bg-opacity-50'>Canceled</span></td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>7/8/2022</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Rp 20000</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>4</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Gunawan</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    Sepeda Gunung United
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <span className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-300 rounded-lg bg-opacity-50'>Canceled</span></td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>7/8/2022</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Rp 20000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>1</a>
                            </div>
                            <div className='text-sm font-medium text-black'>Toni</div>
                            <div className='text-gray-500'>07/08/2022</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50'>Delivered</div>
                        </div>
                        <div className='text-sm text-gray-700'>Sandal Jepit Swallow Hijau</div>
                        <div className='text-sm font-medium text-black'>
                            Rp 20000
                        </div>
                    </div>
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>2</a>
                            </div>
                            <div className='text-sm font-medium text-black'>Budi</div>
                            <div className='text-gray-500'>07/08/2022</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-300 rounded-lg bg-opacity-50'>Shipped</div>
                        </div>
                        <div className='text-sm text-gray-700'>Sandal Jepit Swallow Hijau</div>
                        <div className='text-sm font-medium text-black'>
                            Rp 20000
                        </div>
                    </div>
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>3</a>
                            </div>
                            <div className='text-sm font-medium text-black'>Bonita</div>
                            <div className='text-gray-500'>07/08/2022</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-300 rounded-lg bg-opacity-50'>Canceled</div>
                        </div>
                        <div className='text-sm text-gray-700'>Sandal Jepit Swallow Hijau</div>
                        <div className='text-sm font-medium text-black'>
                            Rp 20000
                        </div>
                    </div>
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>4</a>
                            </div>
                            <div className='text-sm font-medium text-black'>Dani</div>
                            <div className='text-gray-500'>07/08/2022</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-300 rounded-lg bg-opacity-50'>Canceled</div>
                        </div>
                        <div className='text-sm text-gray-700'>Sandal Jepit Swallow Hijau</div>
                        <div className='text-sm font-medium text-black'>
                            Rp 20000
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}
