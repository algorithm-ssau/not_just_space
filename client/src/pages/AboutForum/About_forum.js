import React from 'react'
import '../../App.css'
import map1 from './map1.jpg'
import map2 from'./map2.jpg'

export const AboutForum = () => {
    return (
        <div className="aboutForum">
            <div>
                <p><b>Всероссийский космический форум «НеПростоКосмос»</b> представляет из себя комплекс
                    мероприятий образовательной, научной, просветительской и патриотической направленности</p>
                    <br></br>
            </div>

                <div className="row">
                    <div className="col_2-3">
                        <p><b>Дата проведения:</b> 24-25 июня 2020 г.</p>
                            <br></br>
                        <p><b>Организаторы:</b> Госкорпорация «Роскосмос», Самарский
                            национальный исследовательский университет имени
                            академика С.П. Королёва, РКЦ «Прогресс»</p>
                            <br></br>
                        <p><b>Место проведения:</b> Самарский национальный
                            исследовательский университет имени академика С.П. Королёва,
                            РКЦ «Прогресс»</p>

                    </div>
                    <div className="col_1-3">
                        <img
                            src={map1} alt="map1" width={242} height={249}>
                        </img>
                    </div>

                </div>

                <div>
                    <br></br>
                    <p><b>Цели проведения:</b></p>
                    <ul className="cels">
                        <li>создание ежегодной площадки с целью объединения усилий молодых учёных и
                            специалистов аэрокосмической отрасли для обсуждения и анализа основных
                            тенденций и вызовов развития исследований и новых технологий, формирования
                            образа будущего отрасли;</li>
                        <li>выявление новых идей и поддержка перспективных работ молодых учёных,
                            способствующих росту научно-технического потенциала отдельных предприятий и
                            аэрокосмической отрасли в целом;</li>
                        <li>повышение интереса учащихся образовательных учреждений и студентов к
                            развитию инженерных направлений аэрокосмической отрасли; пропаганда
                            достижений отечественной космонавтики.</li>
                    </ul>
                        <br></br>
                </div>

                <div>
                    <p><b>Участники мероприятия:</b></p>
                    <ul className="cels">
                        <li>студенты, аспиранты и молодые учёные вузов;</li>
                        <li>специалисты предприятий;</li>
                        <li>учащиеся образовательных учреждений Самарской области.</li>
                    </ul>
                    <br></br>
                </div>

                <div>
                    <img
                        src={map2} alt="map2" width={450} height={230}>
                    </img>
                </div>

                <div>
                    <br></br><br></br>
                    <p>Форум не имеет возрастных и профессиональных ограничений и охватывает широкую аудиторию
                        0+.</p>
                </div>

        </div>
    )
}
