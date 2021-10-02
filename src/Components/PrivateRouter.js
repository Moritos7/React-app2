import React, { Component }  from 'react'
import { Redirect, Route } from 'react-router'

function PrivateRouter({component:Component,auth, ...rest}) {
    return (
        <Route {...rest} render={props => (
            auth ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    )
}

export default PrivateRouter
