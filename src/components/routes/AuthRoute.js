import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const UserRoute = () => {
    const { authUser } = useSelector(state => state.authUser)
    if (!localStorage.getItem('access_token')) {
        return <Navigate to={"login"} />
    } else if (authUser !== null) {
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