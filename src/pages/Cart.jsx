import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListCart from '../components/cart/ListCart'
import Layout from '../components/layouts/Layout'
import HeaderPage from '../components/navbar/HeaderPage'
import { checkOut } from '../redux/slice/CartSlice'

export default function Cart() {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.cart)

    const handleCheckout = () => {
        dispatch(
            checkOut()
        )
    }

    return (
        <Layout>
            <HeaderPage title="Cart 🛒" back={1} />
            {
                carts.carts.length === 0 ? (
                    <div className='text-center mt-20'>
                        <h1 className='text-2xl font-medium'>Your cart is empty</h1>
                        <p className='text-gray-400'>Please add some items from the menu</p>
                    </div>
                ) : (
                    carts.carts.map((cart, index) => (
                        <ListCart key={index} cart={cart} />
                    ))
                )
            }
            {
                carts.carts.length > 0 &&
                <div className="flex flex-row-reverse">
                    <button className='bg-green-500 text-white p-2 rounded-lg transition ease-in-out hover:bg-green-600' onClick={handleCheckout}>Bayar Sekarang</button>
                </div>
            }
            <div>
                Total Price : {carts.totalPrice}
            </div>
        </Layout>
    )
}
