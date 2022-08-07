import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import HeaderPage from '../components/navbar/HeaderPage'

export default function DetailProduct() {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
            .then(res => {
                setProduct(res.data)
            })
    }, [params.id])

    return (
        <Layout>
            <HeaderPage back={1} />
            <div className="mt-3">
                detail product id : {params.id}
            </div>
            <div className="bg-white space-y-5 p-4 rounded-md">
                <div className="flex justify-center">
                    <img src={product.images} alt="" className='rounded-lg h-2/5 md:h-1/3 lg:h-2/6 xl:h-1/2 object-cover' />
                </div>
                <div className='space-y-2'>
                    <div className="flex justify-between">
                        <div className='text-xl font-medium'>{product.title}</div>
                        <div className='flex items-center gap-x-4 text-3xl font-light'>
                            <AiFillMinusCircle className='text-gray-300' />
                            <div className="text-black text-2xl">
                                5
                            </div>
                            <AiFillPlusCircle className='text-green-500' />
                        </div>
                    </div>
                    <div className='font-medium text-red-500'>Rp. {product.price}</div>
                    <div className='text-sm'>{product.description}</div>
                </div>
                <div className="flex flex-row-reverse">
                    <button className='bg-green-500 text-white p-2 rounded-lg transition ease-in-out hover:bg-green-600 flex items-center'><BsCartPlus className='mr-2' />Tambah</button>
                </div>
            </div>
        </Layout>
    )
}
