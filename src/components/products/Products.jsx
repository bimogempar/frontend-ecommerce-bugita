import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slice/CartSlice'

export default function Products() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=5')
            .then(res => {
                setProducts(res.data)
            })
    }, [])

    const handleAddCart = (product) => {
        // console.log(product)
        dispatch(
            addToCart(product)
        )
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    Produk Terbaru 🔥
                </div>
                <div className='text-sm font-medium text-green-500 cursor-pointer' onClick={() => navigate(`/products`)}>
                    See All
                </div>
            </div>

            <div className="mx-auto mt-4 grid grid-cols-2 gap-4">
                {products.map((product, index) => (
                    <div key={index} className="col-span-1 flex flex-col bg-white p-4 rounded-lg">

                        <img src={product.images[0]} alt="" className='rounded-lg h-2/5 md:h-1/3 lg:h-2/6 xl:h-1/2 mb-4 object-cover cursor-pointer' onClick={() => navigate(`/products/${product.id}`)} />
                        <div className='mb-2 cursor-pointer' onClick={() => navigate(`/products/${product.id}`)}>{product.title}</div>
                        <div className="text-xs">{product.description.substring(0, 100) + '...'}</div>
                        <div className="mt-auto text-xs">
                            <div className="mr-2 mb-2">#{product.category.name}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className='text-sm font-medium mt-2'>Rp. {product.price}</div>
                            <BsCartPlus size={20} className="text-green-500 cursor-pointer" onClick={() => handleAddCart(product)} />
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    )
}
