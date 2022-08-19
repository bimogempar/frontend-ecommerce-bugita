import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function CategoryProduct(){
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products/')
            .then(res => {
                setCategorys(res.data)
            })
        }, []
    )
   

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    Category Products 😋
                </div>
                <div className='text-sm font-medium text-green-500'>
                    See All
                </div>
            </div>

            <div className="grid grid-cols-4 justify-items-center my-5 gap-4">
                {categorys.map((category, index) => (
                    <div key={index}>
                        <div className='flex justify-center'>
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white">
                                <img src={category.category.image} alt="" className='rounded-full h-full object-cover object-center' />
                            </div>
                        </div>
                        <div className='mt-2 text-sm'>{category.category.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )

}