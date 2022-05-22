import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ isAuthed, isLoading, ...props}) => {
    if(isLoading){
        return <p style={{textAlign: 'center'}}>Loading...</p>
    }

    if(!isAuthed){
        return <Redirect to="/login" />;
    }

    return (
        <Route {...props} />
    )
}