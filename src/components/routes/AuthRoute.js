import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

export const UserRoute = ({ component, path, ...rest }) => {
    const { authUser } = useSelector(state => state.authUser)
    return authUser !== null ? (
        <Outlet exact path={path} component={component} {...rest} />
    ) : (
        <Navigate to={"/"} />
    )
}

export const GuestRoute = ({ component, path, ...rest }) => {
    const { authUser } = useSelector(state => state.authUser)
    return authUser === null ? (
        <Outlet exact path={path} component={component} {...rest} />
    ) : (
        <Navigate to={"/"} />
    )
}