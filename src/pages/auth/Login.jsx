import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slice/AuthSlice'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layouts/Layout'
import axios from 'axios'

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
            axios.post(`${process.env.REACT_APP_API_URL}auth/login`, values)
                .then(res => {
                    const user = res.data.user
                    dispatch(login(res.data))
                    console.log(user)
                    if (user.role === 'admin') {
                        navigate('/admin')
                    } else {
                        navigate('/')
                    }
                })
                .catch(err => {
                    console.log(err)
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
                <div className="flex">
                    <button type="submit" className='bg-green-500 text-white mt-2 p-2 rounded-lg transition ease-in-out hover:bg-green-600'>Login</button>
                </div>
            </form>
        </Layout>
    )
}
