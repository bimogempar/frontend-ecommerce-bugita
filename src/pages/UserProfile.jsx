import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import HeaderPage from '../components/navbar/HeaderPage'
import { logout } from '../redux/slice/AuthSlice'

export default function UserProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { authUser } = useSelector(state => state.authUser)
    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    return (
        <Layout>
            <HeaderPage title="My Profile 😄" back={1} />
            <div>
                User : <span className="font-medium">{authUser.email}</span><br />
                Role : <span className="font-medium">{authUser.role}</span><br />
            </div>
            <button onClick={handleLogout} className="text-red-500 font-medium">Logout</button>
        </Layout>
    )
}
