import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slice/AuthSlice'
import { useNavigate } from 'react-router-dom'

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
            dispatch(
                login(values)
            )
            navigate('/')
        }
    })

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={formikLogin.handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formikLogin.handleChange}
                    value={formikLogin.values.email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={formikLogin.handleChange}
                    value={formikLogin.values.password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
