import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import NotFoundPage from '../components/NotFoundPage'
import DashboardPage from '../components/DashboardPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import AddPostPage from '../components/AddPostPage'
import EditPostPage from '../components/EditPostPage'
import SinglePostPage from '../components/SinglePostPage'


export const history = createHistory()

const AppRouter = () => {

    return (
        <Router history={history}>
            <div>
                <Switch>
                    <PublicRoute path="/" component={LoginPage} exact={true} />
                    <PrivateRoute path="/dashboard" component={DashboardPage} />
                    <PrivateRoute path="/create" component={AddPostPage} />
                    <PrivateRoute path="/edit/:id" component={EditPostPage} />
                    <Route path="/post/:user/:id" component={SinglePostPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>

    )
}

export default AppRouter