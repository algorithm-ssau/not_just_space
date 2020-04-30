import React from 'react'
import './headermenu.css'
import { AuthWnd } from '../authwnd/authwnd'
import { useToggle } from '../../hooks/useToggle'
import {Menus} from "../menus/menu";
import logos from "../menus/logo.png";

export const HeaderMenu = () => {
    var [isShowing, toggle] = useToggle();
    return (
        <header className="app-header">

            <img src ={logos} alt="logo" height="50"></img>
            <center> <Menus /></center>
            <button className="register-btn">
                Регистрация
            </button>
            <AuthWnd
                isShowing={isShowing}
                hide={toggle}
            />
        </header>
    );
}