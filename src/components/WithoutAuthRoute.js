import React from 'react';
import {Route, Redirect} from 'react-router-dom';


export const WithoutAuthRoute = ({component: Component, loggedIn, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            !loggedIn ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
        )}/>
    );
}