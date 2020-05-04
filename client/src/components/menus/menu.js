import React from 'react'
import './menu_style.css'
import {NavLink} from "react-router-dom";


export const Menus = () => {
    return (
        <body>
        <header class="header">

            <nav>
                <ul_header className="nav_links">
                    <li_header>
                        <NavLink class="nav_l" to="/client/src/pages/AboutForum/MainPage.js">Главная</NavLink>
                    </li_header>
                    <li_header>
                        <NavLink class="nav_l" to="/client/src/pages/AboutForum/About_forum.js">О форуме</NavLink>
                    </li_header>
                    <li_header>
                        <NavLink class="nav_l" to="/client/src/pages/Programm/Programm.js">Программа</NavLink>
                    </li_header>
                    <li_header>
                        <a_header href="#">Мероприятия</a_header>
                        <ul_header class="s_links">
                            <li_header><NavLink class="nav_l" to="/client/src/pages/Events/Official.js">Официальная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="/client/src/pages/Events/Educational.js">Образовательная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="/client/src/pages/Events/Study.js">Научная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="/client/src/pages/Events/Exhibition.js">Выставочная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="/client/src/pages/Events/CareerGuidance.js">Профориентационная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="/client/src/pages/Events/PopularScience.js">Научно-популярная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="/client/src/pages/Events/Excursions.js">Экскурсионно-ознакомительная программа</NavLink>
                            </li_header>
                        </ul_header>
                    </li_header>
                    <li_header>
                        <NavLink class="nav_l" to="/client/src/pages/Contact/Contacts.js">Контакты</NavLink>
                    </li_header>
                </ul_header>
            </nav>
        </header>
        </body>
    )
}

