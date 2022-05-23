import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage, RegisterPage, PrivateRoute, ForgotPasswordPage, UserInfoPage } from './auth';
import { TasksPage } from './tasks';

const routes = [
    {
        path: '/',
        Component: TasksPage,
        private: true,
        exact: true
    },
    {
        path: '/login',
        Component: LoginPage
    },
    {
        path: '/register',
        Component: RegisterPage
    },
    {
        path: '/forgot-password',
        Component: ForgotPasswordPage
    },
    {
        path: '/userInfo',
        Component: UserInfoPage
    }
];

export const Routes = ({ isLoading, user}) => {

    return(
        <Router>
            <Switch>
            {routes.map((route, index) => {

                const RouteType = route.private ? PrivateRoute : Route;            
                return (
                    <RouteType
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                    >
                        <route.Component user={user}/>
                    </RouteType>
                )
            })}
            </Switch>
        </Router>
    )
}