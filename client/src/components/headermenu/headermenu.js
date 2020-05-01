import React from 'react'
import './headermenu.css'
import { AuthWnd } from '../authwnd/authwnd'
import { useToggle } from '../../hooks/useToggle'
import {Menus} from "../menus/menu";
import '../menus/menu_fixed.js'

export const HeaderMenu = () => {
    var [isShowing, toggle] = useToggle();
    return (
        <body>
        <header className="app-header">

            <img src="#" alt="logo" height="50"></img>
            <center><Menus/></center>
            <button className="register-btn">
                Регистрация
            </button>
            <AuthWnd
                isShowing={isShowing}
                hide={toggle}
            />
        </header>
        <script src="/menu_fixed.js"></script>
        </body>
    );
}