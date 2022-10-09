import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const UserRoute = () => {
    const authUser = useSelector(state => state.authUser)
    if (authUser.isAuth === false) {
        return <Navigate to={"login"} />
    } else if (authUser !== null) {
        if (authUser.authUser.role === 'admin') {
            return <Navigate to={"admin"} />
        }
        return <Outlet />
    } else {
        return null
    }
}

export const GuestRoute = () => {
    const { authUser, isAuth } = useSelector(state => state.authUser)
    if (isAuth === false) {
        return <Outlet />
    }
    if (authUser.role === 'admin') {
        return <Navigate to={"/"} />
    }
    if (authUser.role === 'user') {
        return <Navigate to={"/"} />
    }
}

export const AdminRoute = () => {
    const authUser = useSelector(state => state.authUser)
    if (authUser.isAuth === false) {
        return <Navigate to={"login"} />
    } else if (authUser !== null) {
        if (authUser.authUser.role === 'user') {
            return <Navigate to={"/"} />
        }
        return <Outlet />
    } else {
        return null
    }
}