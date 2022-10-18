import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListCart from '../components/cart/ListCart'
import Layout from '../components/layouts/Layout'
import HeaderPage from '../components/navbar/HeaderPage'
import { checkOut } from '../redux/slice/CartSlice'
import ReactWhatsapp from 'react-whatsapp';

export default function Cart() {
    const carts = useSelector(state => state.cart)
    const { authUser } = useSelector(state => state.authUser)
    const [shipping, setShipping] = useState({
        nama: authUser !== null ? authUser.name : null,
        no_hp: authUser !== null ? authUser.no_hp : null,
        address: authUser !== null ? authUser.address : null,
        note: null,
    })
    const dispatch = useDispatch()
    const handleCheckout = () => {
        console.log('checkout bro')
        dispatch(
            checkOut()
        )
    }
    const handleChangeShipping = e => {
        const { name, value } = e.target
        setShipping(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const val = `Hai kak saya mau order...\n\nNama : ${authUser.name}\nNo Hp : 083123132\nAlamat : Magetan\n\nProduk :\n${carts.carts.map(item => `- ${item.title} | ${item.count}pcs | Rp. ${item.price}`).join('\n')}\n\nTerimakasih`
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
                            defaultValue={shipping.nama}
                            onChange={handleChangeShipping}
                        />
                        <label htmlFor="no_hp">Nomor Handphone</label>
                        <input
                            className='p-2 rounded-xl'
                            type="text"
                            name="no_hp"
                            defaultValue={shipping.no_hp}
                            onChange={handleChangeShipping}
                            placeholder="ex: 081234123423"
                        />
                        <label htmlFor="address">Alamat</label>
                        <textarea
                            className='p-2 rounded-xl'
                            type="text"
                            name="address"
                            defaultValue={shipping.address}
                            onChange={handleChangeShipping}
                            placeholder="Jl. Soekarno Hatta..."
                        />
                        <label htmlFor="note">Catatan</label>
                        <textarea
                            className='p-2 rounded-xl'
                            type="text"
                            name="note"
                            defaultValue={shipping.note}
                            onChange={handleChangeShipping}
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
                    <button className='bg-green-500 text-white p-2 rounded-lg transition ease-in-out hover:bg-green-600' onClick={handleCheckout}>
                        <ReactWhatsapp number="+628815564240" message={val}>
                            Bayar Sekarang
                        </ReactWhatsapp>
                    </button>
                </div>
            }
        </Layout>
    )
}
