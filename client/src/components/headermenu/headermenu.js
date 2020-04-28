import React from 'react'
import './headermenu.css'
import { AuthWnd } from '../authwnd/authwnd'
import { useToggle } from '../../hooks/useToggle'
import {Menus} from "../menus/menu";

export const HeaderMenu = () => {
    var [isShowing, toggle] = useToggle();
    return (
        <header className="app-header">

            <Menus/>

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
        </header>
    );
}