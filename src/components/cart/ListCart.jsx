import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { BsArrowLeftCircle } from "react-icons/bs"

export default function ListCart() {
    const carts = [
        {
            id: 1,
            name: "Handmade Frozen Gloves",
            image: "https://api.lorem.space/image/fashion?w=640&h=480&r=2576",
            count: 2,
            price: 549,
        },
        {
            id: 2,
            name: "Intelligent Granite Table",
            image: "https://cdn.lorem.space/images/shoes/.cache/640x480/revolt-164_6wVEHfI-unsplash.jpg",
            count: 1,
            price: 903
        }
    ]

    return (
        <div className=''>
            <div className="grid grid-cols-3">
                <div className='col-span-1 self-center text-[18px]'><BsArrowLeftCircle size={20} /></div>
                <div className='text-[18px] font-medium col-span-1 text-center'>Cart 🛒</div>
                <div className="col-span-1"></div>
            </div>
            {
                carts.map(cart => (
                    <div key={cart} className="divide-y-2">
                        <div className="flex items-center mt-5 space-x-2 justify-between">
                            <div className='flex items-center justify-between space-x-4'>
                                <img src={cart.image} alt="" className='rounded-lg h-16 object-cover' />
                                <div className='text-md'>
                                    <div>{cart.name}</div>
                                    <div className='text-red-500 font-medium'>Rp. {cart.price}</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-4 text-3xl font-light'>
                                <AiFillMinusCircle className='text-gray-300' />
                                <div className="text-black text-2xl">
                                    {cart.count}
                                </div>
                                <AiFillPlusCircle className='text-green-500' />
                            </div>
                        </div>
                        <div className='divide-gray-400 mt-4'></div>
                    </div>
                ))
            }
        </div>
    )
}
