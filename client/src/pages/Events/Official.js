import React from 'react'
import '../../App.css'
import './ed_style.css'

export const OfficialPage = () => {
    return (
        <div>
            <div className="head">
                <h1>Официальная программа</h1>
            </div>
            <div className="info-container1">
                <br/>
                <b>Дата проведения:</b> 24-25 июня 2020 г.
                <br/>
                <b>Организаторы:</b> Госкорпорация «Роскосмос», Самарский национальный исследовательский университет
                имени академика С.П. Королёва, РКЦ «Прогресс»
                <br/>
                <b>Место проведения:</b> Самарский национальный исследовательский университет имени академика С.П.
                Королёва, РКЦ «Прогресс»
                <br/>
                <b>Цели проведения:</b>
                <ul className="ed">
                    <li> создание ежегодной площадки с целью объединения усилий молодых учёных и специалистов
                        аэрокосмической отрасли для обсуждения и анализа основных тенденций и вызовов развития
                        исследований и новых технологий, формирования образа будущего отрасли;
                    </li>
                    <li>выявление новых идей и поддержка перспективных работ молодых учёных, способствующих росту
                        научно-технического потенциала отдельных предприятий и аэрокосмической отрасли в целом;
                    </li>
                    <li>повышение интереса учащихся образовательных учреждений и студентов к развитию инженерных
                        направлений аэрокосмической отрасли; пропаганда достижений отечественной космонавтики.
                    </li>
                </ul>
                <br/><b>Участники мероприятия:</b>
                <ul className="ed">
                    <li> студенты, аспиранты и молодые учёные вузов;
                    </li>
                    <li> специалисты предприятий;
                    </li>
                    <li>учащиеся образовательных учреждений Самарской области.
                    </li>
                </ul>
                <b>Мероприятия:</b> церемония открытия, церемония закрытия, панельная дискуссия
            </div>
        </div>
    )
}
