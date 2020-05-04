import React from 'react'
import './headermenu.css'
import { AuthWnd } from '../authwnd/authwnd'
import { useToggle } from '../../hooks/useToggle'
import {Menus} from "../menus/menu";
import '../menus/menu_fixed.js'
import logo from './logo1.png'

export const HeaderMenu = () => {
    var [isShowing, toggle] = useToggle();
    return (
        <header className="app-header">

            <img src={logo} alt="logo" height="60"></img>
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