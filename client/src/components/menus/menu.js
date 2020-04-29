import React from 'react'
import './menu_style.css'
import {NavLink} from "react-router-dom";

export const Menus = () => {
    return(
        <header class="header">
            <nav>
                <ul_header className="nav_links">
                    <li_header><NavLink to="/client/src/pages/About_forum.js">О форуме</NavLink></li_header>
                    <li_header><a_header href="#">Программа</a_header></li_header>
                    <li_header><a_header href="#">Мероприятия</a_header></li_header>
                    <li_header><a_header href="#">Контакты</a_header></li_header>
                </ul_header>
            </nav>
        </header>
        )
}

