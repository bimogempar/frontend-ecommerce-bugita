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
            <HeaderPage title="Keranjang 🛒" back={1} />
            {
                carts.carts.length === 0 ? (
                    <div className='text-center mt-20'>
                        <h1 className='text-2xl font-medium'>Keranjang anda kosong!</h1>
                        <p className='text-gray-400'>Pilih produk dan masukkan ke keranjang</p>
                    </div>
                ) : (
                    carts.carts.map((cart, index) => (
                        <ListCart key={index} cart={cart} />
                    ))

                )
            }
            {
                carts.carts.length !== 0 && <div className='space-y-4'>
                    <div className='text-[18px] col-span-4 col-span-1 text-center'>Data Pemesan 📝</div>
                    <form className='grid grid-cols-1 space-y-2'>
                        <label htmlFor="nama">Nama</label>
                        <input
                            className='p-2 rounded-xl mt-2'
                            type="text"
                            name="nama"
                            placeholder="Nama"
                        />
                        <label htmlFor="no_hp">Nomor Handphone</label>
                        <input
                            className='p-2 rounded-xl'
                            type="text"
                            name="no_hp"
                            placeholder="ex: 081234123423"
                        />
                        <label htmlFor="address">Alamat</label>
                        <textarea
                            className='p-2 rounded-xl'
                            type="text"
                            name="address"
                            placeholder="Jl. Soekarno Hatta..."
                        />
                        <label htmlFor="note">Catatan</label>
                        <textarea
                            className='p-2 rounded-xl'
                            type="text"
                            name="note"
                            placeholder="Saya mau order..."
                        />
                    </form>

                    <div className='text-[18px] col-span-4 col-span-1 text-center'>Pengiriman 🚚</div>
                    <div className="bg-green-200 text-center p-4 rounded-lg border border-green-300">
                        Ongkos kirim akan diinfokan di whatsapp
                    </div>

                    <div className='text-[18px] col-span-4 col-span-1 text-center'>Detail Pesanan 💲</div>
                    <div className="bg-white p-4 rounded-lg">
                        {
                            carts.carts.map(product => {
                                return (
                                    <div key={product.id} className="flex justify-between">
                                        <div>
                                            ({product.count}) {product.title}
                                        </div>
                                        <div className='text-red-500 font-medium'>Rp. {product.price}</div>
                                    </div>
                                )
                            })
                        }
                        <div className='flex justify-end border-t-2 border-gray-200 mt-3'>
                            <div className='font-medium mt-2'>Rp. {carts.totalPrice}</div>
                        </div>
                    </div>
                </div>
            }
            {
                carts.carts.length > 0 &&
                <div className="flex flex-row-reverse">
                    <button className='bg-green-500 text-white p-2 rounded-lg transition ease-in-out hover:bg-green-600' onClick={handleCheckout}>Bayar Sekarang</button>
                </div>
            }
        </Layout>
    )
}
