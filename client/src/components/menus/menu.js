import React from 'react'
import './menu_style.css'



export const Menus = () => {
    return(
        <header class="header">
            <img scr="client/src/components/menus/logo.png" alt="logo" className="logo"></img>
            <nav>
                <ul className="nav_links">
                    <li><a href="#">О форуме</a></li>
                    <li><a href="#">Программа</a></li>
                    <li><a href="#">Мероприятия</a></li>
                    <li><a href="#">Контакты</a></li>

                </ul>
            </nav>
        </header>
)
}

