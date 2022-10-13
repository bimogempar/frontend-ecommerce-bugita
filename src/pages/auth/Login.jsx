import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slice/AuthSlice'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layouts/Layout'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msgError, setMsgError] = useState(null)

    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            axios.post(`${process.env.REACT_APP_API_URL}auth/login`, values)
                .then(res => {
                    const user = res.data.user
                    if (user) {
                        Swal.fire({
                            title: 'Sukses login!',
                            text: `${res.data.message}`,
                            icon: 'success',
                            timer: 100000,
                            didClose: () => {
                                dispatch(login(res.data))
                                if (user.role === 'admin') {
                                    navigate('/admin')
                                } else {
                                    navigate('/')
                                }
                            }
                        })
                    } else {
                        Swal.fire({
                            title: 'Gagal login!',
                            text: `${res.data.message}`,
                            icon: 'error',
                        })
                        setMsgError(res.data.message)
                    }
                })
                .catch(err => {
                    Swal.fire({
                        title: 'Gagal login!',
                        icon: 'error',
                    })
                })
        }
    })

    return (
        <Layout>
            <div className="grid grid-cols-1">
                <div className='text-[18px] font-medium col-span-1 text-center'>Login 🔑</div>
            </div>
            <form className='grid grid-cols-1 space-y-2' onSubmit={formikLogin.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    className='w-1/2 p-2 rounded-xl mt-2'
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formikLogin.handleChange}
                    value={formikLogin.values.email}
                />
                <label htmlFor="password">Password</label>
                <input
                    className='w-1/2 p-2 rounded-xl'
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formikLogin.handleChange}
                    value={formikLogin.values.password}
                />
                {msgError && <p className="text-red-500 text-sm mb-5">{msgError}</p>}
                <div className="flex">
                    <button type="submit" className='bg-green-500 text-white mt-2 p-2 rounded-lg transition ease-in-out hover:bg-green-600'>Login</button>
                </div>
            </form>
        </Layout>
    )
}
