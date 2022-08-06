import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addCount, minusCount } from '../../redux/slice/CartSlice'

export default function ListCart({ cart }) {
    const dispatch = useDispatch()

    const handleMinQty = (product) => {
        dispatch(
            minusCount(product)
        )
    }

    const handlePlusQty = (product) => {
        dispatch(
            addCount(product)
        )
    }

    return (
        <div className=''>
            <div key={cart.id} className="divide-y-2">
                <div className="flex items-center mt-5 space-x-2 justify-between">
                    <div className='flex items-center justify-between space-x-4'>
                        <img src={cart.images[0]} alt="" className='rounded-lg w-16 h-16 object-cover' />
                        <div className='text-md'>
                            <div>{cart.title}</div>
                            <div className='text-red-500 font-medium'>Rp. {cart.price}</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-4 text-3xl font-light'>
                        <AiFillMinusCircle className='text-gray-300 cursor-pointer' onClick={() => handleMinQty(cart)} />
                        <div className="text-black text-2xl">
                            {cart.count}
                        </div>
                        <AiFillPlusCircle className='text-green-500 cursor-pointer' onClick={() => handlePlusQty(cart)} />
                    </div>
                </div>
                <div className='divide-gray-400 mt-4'></div>
            </div>
        </div>
    )
}
