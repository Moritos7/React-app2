import React from 'react'
import { Redirect, Route } from 'react-router'

function PublicRouter({component: Component,auth, restricted, ...rest}) {
    return (
        <Route {...rest} render={props => (
            auth && restricted ?
                <Redirect to="/profile" />
            : <Component {...props} />
        )} />
    )
}

export default PublicRouter
