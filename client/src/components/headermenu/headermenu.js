import React from 'react'
import './headermenu.css'

export const HeaderMenu = () => {
    var test = () => {console.log(1)}
    return (
        <header className="app-header">

            <div>
                <button
                    id="menu-btn"
                    className="menu-btn"
                    onClick={test}
                >
                    <h3>{'\u2630'} </h3>{/* \u2630 - 3 полоски */}
                </button>
                <label htmlFor="menu-btn">Meню</label>
            </div>

            <h1>
                Территория Космоса
            </h1>

            <button className="register-btn">
                Регистрация
            </button>
        </header>
    );
}