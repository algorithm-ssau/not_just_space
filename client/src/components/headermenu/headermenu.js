import React from 'react'
import './headermenu.css'
import { AuthWnd } from '../authwnd/authwnd'
import { useToggle } from '../../hooks/useToggle'

export const HeaderMenu = () => {
    var [isShowing, toggle] = useToggle();
    return (
        <header className="app-header">

            <div>
                <button
                    id="menu-btn"
                    className="menu-btn"
                >
                    <h3>{'\u2630'} </h3>{/* \u2630 - 3 полоски */}
                </button>
                <label htmlFor="menu-btn">Meню</label>
            </div>

            <h1>
                Территория Космоса
            </h1>

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