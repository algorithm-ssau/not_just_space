import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import {AboutForum} from "./pages/About_forum";
import {ContactsPage} from "./pages/Contact/Contacts";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <MainPage />
            </Route>

            <Route path='/client/src/pages/About_forum.js' exact>
                <AboutForum />
            </Route>

            <Route path='/client/src/pages/Contact/Contacts.js' exact>
                <ContactsPage/>
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}