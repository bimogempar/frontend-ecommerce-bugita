import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const UserRoute = () => {
    const { authUser } = useSelector(state => state.authUser)
    if (!localStorage.getItem('access_token')) {
        return <Navigate to={"login"} />
    } else if (authUser !== null) {
        if (authUser.role === 'admin') {
            return <Navigate to={"admin"} />
        }
        return <Outlet />
    } else {
        return null
    }
}

export const GuestRoute = () => {
    const { authUser } = useSelector(state => state.authUser)
    return authUser === null ? (
        <Outlet />
    ) : (
        <Navigate to={"/"} />
    )
}

export const AdminRoute = () => {
    const { authUser } = useSelector(state => state.authUser)
    if (!localStorage.getItem('access_token')) {
        return <Navigate to={"login"} />
    } else if (authUser !== null) {
        if (authUser.role === 'user') {
            return <Navigate to={"/"} />
        }
        return <Outlet />
    } else {
        return null
    }
}