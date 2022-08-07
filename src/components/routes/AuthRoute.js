import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const UserRoute = () => {
    const { authUser } = useSelector(state => state.authUser)
    if (authUser !== null) {
        return <Outlet />
    } else {
        return <Navigate to={"login"} />
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