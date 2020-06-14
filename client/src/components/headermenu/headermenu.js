import React from 'react'
import './headermenu.css'
import { AuthWnd } from '../authwnd/authwnd'
import { useToggle } from '../../hooks/useToggle'
import {Menus} from "../menus/menu";
import {NavLink} from 'react-router-dom'
import '../menus/menu_fixed.js'
import logo from './logo1.jpg'

export const HeaderMenu = () => {
    var [isShowing, toggle] = useToggle();
    return (
        <header className="app-header">
            <NavLink className="nav_l" to="/client/src/pages/AboutForum/MainPage.js">
                <img src={logo} alt="logo" height="60" />
            </NavLink>

            <center><Menus/></center>
            <button
                className="register-btn"
                onClick={toggle}
            >
                Регистрация
            </button>
            <AuthWnd
                isShowing={isShowing}
                hide={toggle}
            />
            <script src="/menu_fixed.js"></script>
        </header>
    );
}