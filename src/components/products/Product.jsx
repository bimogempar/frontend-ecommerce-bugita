import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'

export default function Product() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=5')
            .then(res => {
                setProducts(res.data)
                console.log(res.data)
            })
    })

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    Best Seller 🔥
                </div>
                <div className='text-sm font-medium text-green-500'>
                    See All
                </div>
            </div>

            <div className="mx-auto mt-4 grid grid-cols-2 gap-4">
                {products.map(product => (
                    <div className="col-span-1 flex flex-col bg-white p-4 rounded-lg">
                        <img src={product.images[0]} alt="" className='rounded-lg h-2/5 md:h-1/3 lg:h-2/6 xl:h-1/2 mb-4 object-cover' />
                        <div className="mb-2">
                            {product.title}
                        </div>
                        <div className="text-xs">{product.description.substring(0, 100) + '...'}</div>
                        <div class="mt-auto text-xs">
                            <p class="mr-2 mb-2">#{product.category.name}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className='text-sm font-medium mt-2'>Rp. {product.price}</div>
                            <BsCartPlus size={20} className="text-green-500" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
