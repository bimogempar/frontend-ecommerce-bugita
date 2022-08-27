import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Categories() {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then(res => {
                setCategories(res.data)
            }).catch(err => {
                console.log(err)
            }
            )
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    Categories 😋
                </div>
            </div>

            <div className="grid grid-cols-4 justify-items-center my-5 gap-4">
                {categories.map((category, index) => (
                    <div key={index} onClick={() => navigate(`/category/${category.id}`, { state: category })} className="cursor-pointer">
                        <div className='flex justify-center'>
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white">
                                <img src={category.image} alt="" className='rounded-full h-full object-cover object-center' />
                            </div>
                        </div>
                        <div className='mt-2 text-sm'>{category.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
