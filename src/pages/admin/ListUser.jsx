import React from 'react'
import LayoutAdmin from '../../components/admin/layouts/LayoutAdmin'

export default function ListUser() {
    return (
        <LayoutAdmin>
            <div className='p-5 h-screen'>
                <h1 className='text-xl mb-1'>List User</h1>
                <h6 className=' text-gray-400 mb-5'>Tribute to our costumers</h6>

                <div className='overflow-auto rounded-lg shadow hidden md:block'>
                    <table className='w-full'>
                        <thead className='bg-gray-50 border-b-2 border-gray-200'>
                            <tr>
                                <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>No.</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Image</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Number Phone</th>
                                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Address</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>01</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <img src="https://joeschmoe.io/api/v1/male/jon" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Robert Albert</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>085791182420</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Jalan Kusumawardhana No.12 Jawa Tengah, Semarang, Kecamatan umbul harjo RT 6 RW 4</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>02</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <img src="https://joeschmoe.io/api/v1/male/jake" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Slamet</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>08991928845</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Jalan Papa Kuning No.1 Yogyakarta</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>03</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <img src="https://joeschmoe.io/api/v1/male/james" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Rudy</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>08790112345</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Jalan Diponegoro No.8 Semarang</td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <a href="/" className='font-bold text-blue-500 hover:underline'>04</a>
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                    <img src="https://joeschmoe.io/api/v1/male/jed" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                                </td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Albert</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>082133447768</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Jalan Merdeka Utara No.12 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>01</a>
                            </div>
                            <div className='text-sm font-medium text-black'>
                                <img src="https://joeschmoe.io/api/v1/male/jon" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                            </div>
                            <div className='text-gray-500'>Rudi Gunawan</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50'>085791182420</div>
                        </div>
                        <div className='text-sm text-gray-700'>Jalan Merdeka Utara No.12 Jawa Timur Kabupaten Malang Kecamatan Pakis</div>
                    </div>
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>02</a>
                            </div>
                            <div className='text-sm font-medium text-black'>
                                <img src="https://joeschmoe.io/api/v1/male/jake" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                            </div>
                            <div className='text-gray-500'>Rudi Gunawan</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50'>085791182420</div>
                        </div>
                        <div className='text-sm text-gray-700'>Jalan Merdeka Utara No.12 Jawa Timur Kabupaten Malang Kecamatan Pakis</div>
                    </div>
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>03</a>
                            </div>
                            <div className='text-sm font-medium text-black'>
                                <img src="https://joeschmoe.io/api/v1/male/james" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                            </div>
                            <div className='text-gray-500'>Rudi Gunawan</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50'>085791182420</div>
                        </div>
                        <div className='text-sm text-gray-700'>Jalan Merdeka Utara No.12 Jawa Timur Kabupaten Malang Kecamatan Pakis</div>
                    </div>
                    <div className='bg-white space-y-3 p-4 rounded-lg shadow'>
                        <div className='flex items-center space-x-2 text-sm'>
                            <div>
                                <a href="/" className='text-blue-500 font-bold hover:underline'>04</a>
                            </div>
                            <div className='text-sm font-medium text-black'>
                                <img src="https://joeschmoe.io/api/v1/male/jed" alt="" className='w-10 h-10 rounded-full bg-green-400' />
                            </div>
                            <div className='text-gray-500'>Rudi Gunawan</div>
                            <div className='p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-300 rounded-lg bg-opacity-50'>085791182420</div>
                        </div>
                        <div className='text-sm text-gray-700'>Jalan Merdeka Utara No.12 Jawa Timur Kabupaten Malang Kecamatan Pakis</div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}
