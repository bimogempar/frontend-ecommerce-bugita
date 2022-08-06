import React from 'react'
import ListCart from '../components/cart/ListCart'
import Layout from '../components/layouts/Layout'

export default function Cart() {
    return (
        <Layout>
            <ListCart />
            <div className="flex flex-row-reverse">
                <button className='bg-green-500 text-white p-2 rounded-lg transition ease-in-out hover:bg-green-600'>Bayar Sekarang</button>
            </div>
        </Layout>
    )
}
