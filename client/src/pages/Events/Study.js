import React from 'react'
import '../../App.css'
import './ed_style.css'

export const StudyPage = () => {
    return (
        <div className="education">
            <div>

                <div className="head">
                    <br/>
                    <center>
                        <h1>Научная программа</h1>
                    </center>
                    <br/>
                </div>


                <br/>
            </div>
            <div className="info-container">
                <center><h2>ЗАЩИТА ПРОЕКТОВ УЧАСТНИКОВ НАУЧНОГО КОНКУРСА В ФОРМАТЕ «КРАШ-ТЕСТА»</h2></center>
                <br/>
                <b>Участники:</b> студенты, аспиранты и молодые учёные вузов, специалисты предприятий.
                <br/>
                <b> Цель мероприятия:</b>
                <ul className="ed">
                    <li> представление и защита научно-технических проектов;</li>
                    <li> тестирование проектов на реалистичность и оценка уровня их готовности к внедрению в
                        производственный процесс отрасли;
                    </li>
                    <li> поиск и поддержка талантливой молодёжи;</li>
                    <li>получение экспертной оценки проекта.</li>
                </ul>
                <br/>

                <b> Оценка проектов проводится по следующим критериям:</b>
                <ul className="ed">
                    <li> актуальность;</li>
                    <li> научная новизна;</li>
                    <li> техническая значимость проекта и его востребованность;</li>
                    <li> качество изложения материала;</li>
                    <li> ведение дискуссии.</li>
                </ul>
                <br/>
                <b>Регламент индивидуального выступления:</b>
                <ul className="ed">
                    <li> выступление с презентацией в рамках защиты проекта (6 минут);</li>

                    <li> ответы на вопросы и дискуссия по проекту (6 минут).</li>
                </ul>
                <br/>
            </div>
        </div>
    )
}