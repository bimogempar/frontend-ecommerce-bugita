import React from 'react'
import { useSelector } from 'react-redux'
import ListCart from '../components/cart/ListCart'
import Layout from '../components/layouts/Layout'
import HeaderPage from '../components/navbar/HeaderPage'

export default function Cart() {
    const carts = useSelector(state => state.cart)

    return (
        <Layout>
            <HeaderPage title="Cart 🛒" />
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
            <div className="flex flex-row-reverse">
                <button className='bg-green-500 text-white p-2 rounded-lg transition ease-in-out hover:bg-green-600'>Bayar Sekarang</button>
            </div>
        </Layout>
    )
}
