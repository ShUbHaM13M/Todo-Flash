import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const AppRoutes = ({
    component: Component,
    path,
    isPrivate,
    ...rest
}) => {

    const { currentUser } = useAuth();
    return (
        <Route
            path={path}
            render={props =>
                isPrivate && !currentUser ? (
                    <Redirect
                        to='/auth'
                    />
                ) : (
                        <Component {...props} />
                    )
            }
            {...rest}
        />
    )
}

export default AppRoutes