import React from 'react'
import { NavLink } from 'react-router-dom'
import { Slider } from '../../components/slider/slider'
import { useToggle } from '../../hooks/useToggle'
import { BaseWnd } from '../../components/basewnd/basewnd'

import '../../App.css'

import SULogo from './SamaraUniversityLogo.jpg'
import RCLogo from './RoscosmosLogo.jpg'
import RSCPLogo from './RSCProgressLogo.jpg'
import smallPrince from './SmallPrince.jpg'
import SPKorolev from './SPKorolev.jpg'
import MessagesHarshMan from './MessagesHarshMan.jpg'

import FarSpace from './FarSpace.jpg'
import DreamToReality from './DreamToReality.jpg'
import ScienceProjects from './ScienceProjects.jpg'

import Spiker1 from './Spiker1.jpg'
import Spiker2 from './Spiker2.jpg'
import Spiker3 from './Spiker3.jpg'
import Spiker4 from './Spiker4.jpg'
import Spiker5 from './Spiker5.jpg'
import Spiker6 from './Spiker6.jpg'
import Spiker7 from './Spiker7.jpg'


export const MainPage = () => {

    let [isShowingDay1, toggleDay1] = useToggle(false)
    let [isShowingDay2, toggleDay2] = useToggle(false)
    let [isShowingDay3, toggleDay3] = useToggle(false)

    const daysWndStyle = {
        width: '90vw',
        height: '90vh'
    }

    return (
        <div>
            <div className="container present-container dark-container">
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

            <div className="container days-container dark-container">
                <NavLink to="/client/src/pages/Events/Educational.js">
                    <div>
                        <center><p>Технологическая форсайт-сессия «Дальний космос»</p></center>
                        <img src={FarSpace} alt="" height="250"/>
                    </div>
                </NavLink>
                <NavLink to="/client/src/pages/Events/Study.js">
                    <div>
                        <center><p>«Краш-тест» научных проектов</p></center>
                        <img src={ScienceProjects} alt="" height="250"/>
                    </div>
                </NavLink>

                <NavLink to="/client/src/pages/Events/Excursions.js">
                    <div>
                        <center><p>Экскурсия-квест «От мечты к свершениям»</p></center>
                        <img src={DreamToReality} alt="" height="250"/>
                    </div>
                </NavLink>
            </div>

            <hr />

            <Slider>
                <div>
                    <div className="citation-container dark-container">
                        <div>
                            <img src={smallPrince} alt="" height="256" />
                        </div>

                        <div className="citation-and-author">
                            <p></p>
                            <p>
                                — Хотел бы я знать, зачем звезды светятся...<br />
                                — Наверное, затем, чтобы рано или поздно каждый мог вновь отыскать свою.
                            </p>
                            <p align="right">
                                Антуан де Сент-Экзюпери «Маленький принц»
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="citation-container dark-container">
                        <div>
                            <img src={SPKorolev} alt="" height="256" />
                        </div>

                        <div className="citation-and-author">
                            <p></p>
                            <p>
                                Человек, который верит в сказку, однажды в неё попадает, потому что у него есть сердце…
                            </p>
                            <p align="right">
                                Сергей Павлович Королёв
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="citation-container dark-container">
                        <div>
                            <img src={MessagesHarshMan} alt="" height="256" />
                        </div>

                        <div className="citation-and-author">
                            <p></p>
                            <p>
                                Космонавтика имеет безграничное будущее, и ее перспективы беспредельны, как сама Вселенная
                            </p>
                            <p align="right">
                                Нежные письма сурового человека:<br />
                                из архива Мемориального дома-музея академика С. П. Королёва»
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>

            <hr />

            <div className="container dark-container">
                <center>
                    <h1 style={{margin: 0}}>Наши спикеры</h1>
                </center>
                <Slider>
                    <div>
                        <div className="citation-container">
                            <img src={Spiker1} height="300" alt=""/>
                            <div className="spiker-description">
                                Герой Российской Федерации, лётчик-космонавт РФ, к.э.н. <br/>
                                космонавт 118/534 (России/мира) <br/>
                                2 полёта – 365 сут. 23 час. 5 мин. <br/>
                                3 выхода в открытый космос – 20 час. 20 мин
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="citation-container">
                            <img src={Spiker2} height="300" alt=""/>
                            <div className="spiker-description">
                                Космонавт-испытатель отряда космонавтов Роскосмоса <br/>
                                мастер спорта по полиатлону (многоборье) и рафтингу
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="citation-container">
                            <img src={Spiker3} height="300" alt=""/>
                            <div className="spiker-description">
                                Внук советского учёного, конструктора С.П. Королёва <br/>
                                доктор медицинских наук, профессор, <br/>
                                хирург-ортопед-травматолог, профессор Российского университета <br/>
                                дружбы народов, главный врач и директор Европейской клиники <br/>
                                спортивной травматологии и ортопедии ECSTO
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="citation-container">
                            <img src={Spiker4} height="300" alt=""/>
                            <div className="spiker-description">
                                Ветеран поисково-спасательного отдела космонавтов
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="citation-container">
                            <img src={Spiker5} height="300" alt=""/>
                            <div className="spiker-description">
                                Ведущий инженер Института медико-биологических проблем РАН <br/>
                                участница международного проекта Марс 160, <br/>
                                испытатель-исследователь экипажа изоляционного имитационного <br/>
                                полета к Луне «SIRIUS-19» <br/>
                                космический журналист, волонтер-спасатель отряда Спасрезерв
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="citation-container">
                            <img src={Spiker6} height="300" alt=""/>
                            <div className="spiker-description">
                                Герой Советского Союза, лётчик-космонавт СССР <br/>
                                космонавт 54/118 (России/мира) <br/>
                                4 полёта – 387 сут. 00 час. 45 мин. <br/>
                                4 выхода в открытый космос – 18 час. 48 мин.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="citation-container">
                            <img src={Spiker7} height="300" alt=""/>
                            <div className="spiker-description">
                                Герой Российской Федерации, полковник <br/>
                                инструктор-испытатель авиационно-космической техники, <br/>
                                совершил свыше 900 полётов в воздушной лаборатории для <br/>
                                проверки влияния перегрузок и невесомости на человека; <br/>
                                свыше 2000 парашютных прыжков <br/>
                                свыше 400 часов работал под водой в скафандрах
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <hr />

            <div className="dark-container">
                <center>
                    <h1 style={{margin: '0px'}}>Программа</h1>
                </center>

                <div name="days" className="days-container">
                    <div className="day-box">
                        <center>
                            <h2>
                                <a onClick={toggleDay1}>30 июня</a>
                            </h2>
                            <BaseWnd
                                isShowing={isShowingDay1}
                                hide={toggleDay1}
                                wndStyle={daysWndStyle}
                                wndTitle='30 июня'
                            >
                                <center className='tabl2'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td className="members"><b>Участники форсайт-сессии «Дальний космос»</b> (до 100 человек)</td>
                                                <td className="members" colSpan="2"><b>Участники конкурса проектов</b> (до 50 человек)</td>
                                                <td className="members"><b>Участники дополнительных мероприятий</b></td>
                                                <td className="members"><b>Участники профориентационных мероприятий</b></td>
                                            </tr>
                                            <tr>
                                                <td> до 12:00</td>
                                                <td className="live" colSpan="3"><b>Заселение участников мероприятия</b></td>
                                                <td rowSpan="7">Экскурсия-квест по космическим местам Самары</td>
                                                <td rowSpan="3">Экскурсия-квест по космическим местам Самары</td>
                                            </tr>

                                            <tr>
                                                <td> 12:00</td>
                                                <td rowSpan="4"> Экскурсии на РКЦ «Прогресс», ПАО «Кузнецов», бункер Сталина</td>
                                                <td>Экскурсия в музей «Самара-космическая»</td>
                                                <td rowSpan="3">Экскурсия-квест по космическим местам Самары</td>
                                            </tr>

                                            <tr>
                                                <td> 13:00</td>
                                                <td rowSpan="3">Экскурсия-квест по космическим местам Самары</td>
                                            </tr>

                                            <tr>
                                                <td> 14:00</td>
                                                <td>Брейн-ринг «Экипаж к полету готов!»</td>
                                            </tr>

                                            <tr>
                                                <td> 15:00</td>
                                                <td>Экскурсия в музей «Самара-космическая»</td>
                                                <td rowSpan="3">Экскурсия-квест по космическим местам Самары</td>
                                            </tr>

                                            <tr>
                                                <td> 16:00</td>
                                                <td></td>
                                                <td rowSpan="2" colSpan="2"> </td>
                                            </tr>

                                            <tr>
                                                <td> 17:00</td>
                                                <td rowSpan="2"> Экскурсия-квест по лабораториям Самарского университета</td>
                                            </tr>

                                            <tr>
                                                <td> 18:00</td>
                                                <td className="food" colSpan="2"> Ужин </td>
                                                <td rowSpan="2" colSpan="2"> Фестиваль научно-популярного кино о космонавтике</td>
                                            </tr>

                                            <tr>
                                                <td> 19:00</td>
                                                <td className="food"> Ужин </td>
                                                <td colSpan="2"></td>
                                            </tr>

                                            <tr>
                                                <td> 20:00</td>
                                                <td rowSpan="2" colSpan="4">Science Slam</td>
                                                <td rowSpan="2"></td>
                                            </tr>

                                            <tr>
                                                <td> 21:00</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </center>
                            </BaseWnd>
                        </center>
                        <ul>
                            <li>Заселение участников мероприятия</li>
                            <li>Экскурсия-квест по космическим местам Самары</li>
                            <li>Science Slam</li>
                        </ul>
                    </div>
                    <div className="day-box">
                        <center>
                            <h2>
                                <a onClick={toggleDay2}>1 июля</a>
                            </h2>
                            <BaseWnd
                                isShowing={isShowingDay2}
                                hide={toggleDay2}
                                wndStyle={daysWndStyle}
                                wndTitle='1 июля'
                            >
                                <center className='tabl2'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td className="members"><b>Участники форсайт-сессии «Дальний космос»</b> (до 100 человек)</td>
                                                <td className="members"><b>Участники конкурса проектов</b> (до 50 человек)</td>
                                                <td className="members"><b>Участники дополнительных мероприятий</b></td>
                                                <td className="members" colSpan="2"><b>Участники профориентационных мероприятий</b></td>
                                            </tr>
                                            <tr>
                                                <td> 9:00</td>
                                                <td rowSpan="2"> Работа в группах. Установочная лекция.</td>
                                                <td rowSpan="2">Экскурсия-квест по лабораториям Самарского университета</td>
                                                <td rowSpan="2"></td>
                                                <td rowSpan="4" colSpan="2">Детский научно-технический конкурс «Азбука науки»</td>
                                            </tr>

                                            <tr>
                                                <td> 10:00</td>
                                            </tr>

                                            <tr>
                                                <td> 11:00</td>
                                                <td colSpan="3" rowSpan="2"><b>Торжественное открытие. Панельная дискуссия.
                            Награждение победителей конкурса «Азбука науки»</b></td>
                                            </tr>

                                            <tr>
                                                <td> 12:00</td>
                                            </tr>

                                            <tr>
                                                <td> 13:00</td>
                                                <td className="food"> Обед </td>
                                                <td>Лекция космонавта</td>
                                                <td></td>
                                                <td rowSpan="2">Космическое ГТО</td>
                                                <td rowSpan="2">Фестиваль научно-популярного кино о космонавтике</td>
                                            </tr>

                                            <tr>
                                                <td> 14:00</td>
                                                <td rowSpan="4">Работа в группах</td>
                                                <td className="food"> Обед </td>
                                                <td rowSpan="2">Космическое ГТО</td>
                                            </tr>

                                            <tr>
                                                <td> 15:00</td>
                                                <td rowSpan="4">Защита проектов</td>
                                                <td colSpan="2">Лекция космонавта</td>
                                            </tr>

                                            <tr>
                                                <td> 16:00</td>
                                                <td rowSpan="2">Экскурсия-квест по космическим местам Самары</td>
                                                <td colSpan="2" rowSpan="2"></td>
                                            </tr>

                                            <tr>
                                                <td> 17:00</td>
                                            </tr>

                                            <tr>
                                                <td> 18:00</td>
                                                <td className="food"> Ужин </td>
                                                <td rowSpan="2" colSpan="3">Фестиваль научно-популярного кино о космонавтике</td>
                                            </tr>

                                            <tr>
                                                <td> 19:00</td>
                                                <td rowSpan="2">Экскурсия-квест по космическим местам Самары</td>
                                                <td className="food"> Ужин </td>
                                            </tr>

                                            <tr>
                                                <td> 20:00</td>
                                                <td></td><td></td><td colSpan="2"></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </center>
                            </BaseWnd>
                        </center>
                        <ul>
                            <li>Торжественное открытие</li>
                            <li>Панельная дискуссия</li>
                            <li>Награждение победителей конкурса "«Азбука науки»</li>
                        </ul>
                    </div>
                    <div className="day-box">
                        <center>
                            <h2>
                                <a onClick={toggleDay3}>2 июля</a>
                            </h2>
                            <BaseWnd
                                isShowing={isShowingDay3}
                                hide={toggleDay3}
                                wndStyle={daysWndStyle}
                                wndTitle='2 июля'
                            >
                                <center className='tabl2'>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td className="members"><b>Участники форсайт-сессии «Дальний космос»</b> (до 100 человек)</td>
                                                <td className="members"><b>Участники конкурса проектов</b> (до 50 человек)</td>
                                                <td className="members"><b>Участники дополнительных мероприятий</b></td>
                                                <td className="members"><b>Участники профориентационных мероприятий</b></td>
                                            </tr>
                                            <tr>
                                                <td> 9:00</td>
                                                <td rowSpan="5"> Работа в группах</td>
                                                <td rowSpan="4">Технический музей (г. Тольятти)</td>
                                                <td colSpan="2"></td>
                                            </tr>

                                            <tr>
                                                <td> 10:00</td>
                                                <td rowSpan="6" colSpan="2">
                                                    Интерактивные площадки предприятий Роскосмоса<br />
                                                    <br />
                                                    Экскурсия-квест по космическим местам Самары
                                                </td>
                                            </tr>

                                            <tr>
                                                <td> 11:00</td>
                                            </tr>

                                            <tr>
                                                <td> 12:00</td>
                                            </tr>

                                            <tr>
                                                <td> 13:00</td>
                                                <td className="food"> Обед </td>
                                            </tr>

                                            <tr>
                                                <td> 14:00</td>
                                                <td className="food"> Обед </td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td> 15:00</td>
                                                <td colSpan="2">Интерактивные площадки предприятий Роскосмоса</td>
                                            </tr>

                                            <tr>
                                                <td> 16:00</td>
                                                <td colSpan="2" rowSpan="2"><b>Церемония закрытия</b></td>
                                                <td colSpan="2" rowSpan="3"></td>
                                            </tr>

                                            <tr>
                                                <td> 17:00</td>
                                            </tr>

                                            <tr>
                                                <td> 18:00</td>
                                                <td className="food" colSpan="2"> Отъезд участников </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </center>
                            </BaseWnd>
                        </center>
                        <ul>
                            <li>Интерактивные площадки предприятий Роскосмоса</li>
                            <li>Отъезд участников</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />

            <div className="days-container programms-container" style={{color: 'black'}}>
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

            <hr />

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
                    }} />
                    <img {...{
                        src: RSCPLogo,
                        alt: 'РКЦ Прогресс'
                    }} />
                </div>
            </div>
        </div>
    )
}