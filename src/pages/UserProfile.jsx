import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import { logout } from '../redux/slice/AuthSlice'

export default function UserProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <Layout>
            User profile<br />
            <button onClick={handleLogout}>Logout</button>
        </Layout>
    )
}
