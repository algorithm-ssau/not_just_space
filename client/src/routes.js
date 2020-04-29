import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import {AboutForum} from "./pages/About_forum";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <MainPage />
            </Route>

            <Route path='/client/src/pages/About_forum.js' exact>
                <AboutForum />
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}