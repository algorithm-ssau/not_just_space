import React from 'react'
import './menu_style.css'
import {NavLink} from "react-router-dom";


export const Menus = () => {
    return (
        <div className="header">

            <nav>
                <ul className="nav_links">
                    <li>
                        <NavLink className="nav_l" to="/client/src/pages/AboutForum/MainPage.js">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_l" to="/client/src/pages/AboutForum/About_forum.js">О форуме</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_l" to="/client/src/pages/Programm/Programm.js">Программа</NavLink>
                    </li>
                    <li>
                        <a href="#">Мероприятия</a>
                        <ul className="s_links">
                            <li><NavLink className="nav_l" to="/client/src/pages/Events/Official.js">Официальная программа</NavLink></li>
                            <li><NavLink className="nav_l" to="/client/src/pages/Events/Educational.js">Образовательная программа</NavLink></li>
                            <li><NavLink className="nav_l" to="/client/src/pages/Events/Study.js">Научная программа</NavLink></li>
                            <li><NavLink className="nav_l" to="/client/src/pages/Events/Exhibition.js">Выставочная программа</NavLink></li>
                            <li><NavLink className="nav_l" to="/client/src/pages/Events/CareerGuidance.js">Профориентационная программа</NavLink></li>
                            <li><NavLink className="nav_l" to="/client/src/pages/Events/PopularScience.js">Научно-популярная программа</NavLink></li>
                            <li><NavLink className="nav_l" to="/client/src/pages/Events/Excursions.js">Экскурсионно-ознакомительная программа</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink className="nav_l" to="/client/src/pages/Contact/Contacts.js">Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

