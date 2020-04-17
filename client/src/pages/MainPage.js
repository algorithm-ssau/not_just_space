import React from 'react'
import '../App.css'

export const MainPage = () => {
    return (
        <div>
            <div className="container present-container">
                <h3 className="date-text">
                    19-21 мая 2020
                </h3>
                <div className="main-text-container">
                    <center>
                        <h1 className="main-text">
                            Всероссийский космический форум "Территория Космоса"
                        </h1>
                    </center>
                </div>
            </div>

            <hr/>

            <div>
                <center>
                    <h1>Программа</h1>
                </center>

                <div name="days" className="container days-container">
                    <div className="day-box">
                        <center>
                            <h2>
                                <a href="#days">День 1</a>{/* TODO заменить href */}
                            </h2>
                        </center>
                        <ul>
                            <li>Какое-то мероприятие</li>
                            <li>Какое-то мероприятие</li>
                            <li>Какое-то мероприятие</li>
                        </ul>
                    </div>
                    <div className="day-box">
                        <center>
                            <h2>
                                <a href="#days">День 2</a>{/* TODO заменить href */}
                            </h2>
                        </center>
                        <ul>
                            <li>Какое-то мероприятие</li>
                            <li>Какое-то мероприятие</li>
                            <li>Какое-то мероприятие</li>
                        </ul>
                    </div>
                    <div className="day-box">
                        <center>
                            <h2>
                                <a href="#days">День 3</a>{/* TODO заменить href */}
                            </h2>
                        </center>
                        <ul>
                            <li>Какое-то мероприятие</li>
                            <li>Какое-то мероприятие</li>
                            <li>Какое-то мероприятие</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className="container citation-container"> {/* Реализовать карусель с цитатами */}
                <center>
                    <h3>
                        Какая-то цитата
                    </h3>
                </center>
            </div>

            <hr />

            <div className="container">
                <center>
                    <h1>Наши спикеры</h1>
                </center>
            </div>

            <hr />

            <div className="container">
                <center>
                    <h1>Зачем приходить</h1>
                </center>
                <ul>
                    <li>Краткая цель 1</li>
                    <li>Краткая цель 2</li>
                    <li>Краткая цель 3</li>
                </ul>
            </div>

            <hr />

            <div className="container">
                <center>
                    <h1>Как нас найти</h1>
                </center>
                <div id="map">
                    блок для карты
                </div>
            </div>

            <hr/>

            <div className="container">
                <center>
                    <h1>Организаторы и партнёры</h1>
                </center>
                <div>
                    Здесь логотипы организаторов и названия
                </div>
            </div>
        </div>
    )
}