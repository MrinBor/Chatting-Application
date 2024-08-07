import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoute(props) {

    const isIn = {isIn};
    const setIsIn = {setIsIn};
    const children = props.children;


    if(isIn)
    {
        return children
    }
    else
    {
        return <Navigate to="/login"></Navigate>
    }


}

export default ProtectedRoute;