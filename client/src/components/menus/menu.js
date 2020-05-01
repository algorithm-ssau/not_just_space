import React from 'react'
import './menu_style.css'
import {NavLink} from "react-router-dom";


export const Menus = () => {
    return (
        <header class="header">

            <nav>
                <ul_header className="nav_links">
                    <li_header>
                        <NavLink class="nav_l" to="/client/src/pages/AboutForum/About_forum.js">О форуме</NavLink>
                    </li_header>
                    <li_header>
                        <NavLink class="nav_l" to="/client/src/pages/Programm/Programm.js">Программа</NavLink>
                    </li_header>
                    <li_header>
                        <a_header href="#">Мероприятия</a_header>
                        <ul_header class="s_links">
                            <li_header><NavLink class="nav_l" to="#">Официальная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="#">Образовательная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="#">Научная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="#">Выставочная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="#">Профориентационная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="#">Научно-популярная программа</NavLink></li_header>
                            <li_header><NavLink class="nav_l" to="#">Экскурсионно-ознакомительная программа</NavLink>
                            </li_header>
                        </ul_header>
                    </li_header>
                    <li_header>
                        <NavLink class="nav_l" to="/client/src/pages/Contact/Contacts.js">Контакты</NavLink>
                    </li_header>
                </ul_header>
            </nav>
        </header>
    )
}

