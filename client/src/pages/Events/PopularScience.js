import React from 'react'
import '../../App.css'
import './ed_style.css'

export const PopScience = () => {
    return (
        <div className="education">

            <div className="head-npp">
                <h1>Научно-популярная программа</h1>
            </div>

            <br/>
            <div className="info-container1">
                <center><h2>ЛЕКЦИИ КОСМОНАВТОВ</h2></center>
                <br/>
                <b>Участники:</b> студенты, аспиранты и молодые учёные вузов, специалисты предприятий, учащиеся
                общеобразовательных учреждений.
                <br/>
                <br/>
                <center><h2>ФЕСТИВАЛЬ НАУЧНО-ПОПУЛЯРНОГО КИНО</h2></center>
                <br/>
                <b>Участники:</b> студенты, аспиранты и молодые учёные вузов, специалисты предприятий, учащиеся
                общеобразовательных учреждений, жители и гости города Самары.
                <br/><b>Цель мероприятия</b>: популяризация достижений космонавтики и повышение престижа космической
                деятельности. <br/>
                Цикл кинопоказов фильмов научно-исторического формата, который представляет самые интересные
                документальные фильмы о науке, истории и космических достижениях человечества:
                <ul className="ed">
                    <li> обзорные документальные фильмы;</li>
                    <li> документальные фильмы об отдельных объектах и событиях:
                        <ul className="ed2">
                            <li>пилотируемые полёты в космос;</li>
                            <li> ракеты космического назначения, автоматические космические аппараты и их
                                компоненты;
                            </li>
                            <li> космодромы, стартовые комплексы и наземные службы;</li>
                        </ul></li>
                    <li> документальные фильмы о важнейших предприятиях российской космической промышленности;</li>
                    <li> документальные фильмы о наиболее известных генеральных конструкторах российской
                        космонавтики;
                    </li>
                    <li> документальные фильмы о наиболее известных отечественных космонавтах;</li>
                    <li> художественные игровые фильмы.</li>
                </ul>
                <br/>
            </div>
        </div>
    )
}