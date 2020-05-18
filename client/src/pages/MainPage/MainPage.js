import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../App.css'
import SULogo from './SamaraUniversityLogo.jpg'
import RCLogo from './RoscosmosLogo.jpg'
import RSCPLogo from './RSCProgressLogo.jpg'
import { Slider } from '../../components/slider/slider'

export const MainPage = () => {
    return (
        <div>
            <div className="container present-container">
                <h3 className="date-text">
                    24-25 июня 2020
                </h3>
                <div className="main-text-container">
                    <center>
                        <h1 className="main-text">
                            Всероссийский космический форум "Территория Космоса"
                        </h1>
                    </center>
                </div>
            </div>

            <hr />

            <div className="container days-container">
                <NavLink to="/client/src/pages/Events/Educational.js">
                    <div>
                        <p>Технологическая форсайт-сессия «Дальний космос»</p>
                        <button>
                            1
                        </button>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/Study.js">
                    <div>
                        <p>«Краш-тест» научных проектов</p>
                        <button>
                            2
                    </button>
                    </div>
                </NavLink>

                <NavLink to="/client/src/pages/Events/Excursions.js">
                    <div>
                        <p>Экскурсия-квест «От мечты к свершениям»</p>
                        <button>
                            3
                    </button>
                    </div>
                </NavLink>
            </div>

            <hr/>

            <div className="container citation-container"> {/* TODO Реализовать карусель с цитатами */}
                <Slider>
                    <center>Цитатки1</center>
                    <center>Цитатки2</center>
                    <center>Цитатки3</center>
                </Slider>
            </div>

            <hr />

            <div className="container">
                <center>
                    <h1>Наши спикеры</h1>
                </center>
            </div>

            <hr />

            <div>
                <center>
                    <h1>Программа</h1>
                </center>

                <div name="days" className="container days-container">
                    <div className="day-box">
                        <center>
                            <h2>
                                <a href="#days">День 1</a>{/* TODO заменить href, а может и вообще убрать и вставить окошки*/}
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
                                <a href="#days">День 2</a>{/* TODO заменить href, а может и вообще убрать и вставить окошки*/}
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
                                <a href="#days">День 3</a>{/* TODO заменить href, а может и вообще убрать и вставить окошки*/}
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

            <div className="days-container programms-container">
                <NavLink to="/client/src/pages/Events/Official.js">
                    <div>
                        <center>Официальная программа</center>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/Educational.js">
                    <div>
                        <center>Образовательная программа</center>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/Study.js">
                    <div>
                        <center>Научная программа</center>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/Exhibition.js">
                    <div>
                        <center>Выставочная программа</center>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/CareerGuidance.js">
                    <div>
                        <center>Профориентационная программа</center>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/PopularScience.js">
                    <div>
                        <center>Научно-популярная программа</center>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/Excursions.js">
                    <div>
                        <center>Экскурсионно-ознакомительная программа</center>
                    </div>
                </NavLink>
            </div>

            <hr/>

            <div className="container">
                <center>
                    <h1>Организаторы и партнёры</h1>
                </center>
                <div className='logos-container'>
                    <img {...{
                        src: SULogo,
                        alt: 'Самарский университет'
                    }} />
                    <img {...{
                        src: RCLogo,
                        alt: 'Роскосмос'
                    }}/>
                    <img {...{
                        src: RSCPLogo,
                        alt: 'РКЦ Прогресс'
                    }}/>
                </div>
            </div>
        </div>
    )
}