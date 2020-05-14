import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import {AboutForum} from "./pages/AboutForum/About_forum";
import {ContactsPage} from "./pages/Contact/Contacts";
import {Programm} from "./pages/Programm/Programm";
import {OfficialPage} from "./pages/Events/Official";
import {EducationalPage} from "./pages/Events/Educational";
import {StudyPage} from "./pages/Events/Study";
import {ExhibitPage} from "./pages/Events/Exhibition";
import {Career} from "./pages/Events/CareerGuidance";
import {PopScience} from "./pages/Events/PopularScience";
import {Excurs} from "./pages/Events/Excursions";

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

            <Route path='/client/src/pages/Events/Official.js' exact>
                <OfficialPage/>
            </Route>

            <Route path='/client/src/pages/Events/Educational.js' exact>
                <EducationalPage/>
            </Route>

            <Route path='/client/src/pages/Events/Study.js' exact>
                <StudyPage/>
            </Route>

            <Route path='/client/src/pages/Events/Exhibition.js' exact>
                <ExhibitPage/>
            </Route>

            <Route path='/client/src/pages/Events/CareerGuidance.js' exact>
                <Career/>
            </Route>

            <Route path='/client/src/pages/Events/PopularScience.js' exact>
                <PopScience/>
            </Route>

            <Route path='/client/src/pages/Events/Excursions.js' exact>
                <Excurs/>
            </Route>

            <Redirect to="/" />
        </Switch>
    )
}