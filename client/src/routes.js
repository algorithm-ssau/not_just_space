import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import {AboutForum} from "./pages/AboutForum/About_forum";
import {ContactsPage} from "./pages/Contact/Contacts";
import {Programm} from "./pages/Programm/Programm";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path='/' exact>
                <MainPage />
            </Route>

            <Route path='/client/src/pages/AboutForum/About_forum.js' exact>
                <AboutForum />
            </Route>

            <Route path='/client/src/pages/Contact/Contacts.js' exact>
                <ContactsPage/>
            </Route>

            <Route path='/client/src/pages/Programm/Programm.js' exact>
                <Programm/>
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}