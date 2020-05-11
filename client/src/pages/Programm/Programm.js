import React from 'react'
import '../../App.css'

export const Programm = () => {
    return (

        <div>
            <br></br>
            <div className='tabl2'>
                <table>
                    <tbody>
                    <tr>
                        <th>Тематический блок</th>
                        <th>Мероприятия</th>
                    </tr>

                    <tr>
                        <td rowSpan="2">Официальная программа</td>
                        <td className="programms">Церемония открытия. Церемония закрытия</td>
                    </tr>
                    <tr>
                        <td className="programms">Панельная дискуссия</td>
                    </tr>

                    <tr>
                        <td>Научная программа</td>
                        <td className="programms">Защита проектов участников научного конкурса в формате «краш-теста»</td>
                    </tr>
                    <tr>
                        <td>Выставочная программа</td>
                        <td className="programms">Интерактивные площадки предприятий Роскосмоса</td>
                    </tr>
                    <tr>
                        <td rowSpan="4">Профориентационная программа</td>
                        <td className="programms">Детский научно-технический конкурс «Азбука науки»</td>
                    </tr>
                    <tr>
                        <td className="programms">Брейн-ринг «Экипаж к полету готов!»</td>
                    </tr>
                    <tr>
                        <td className="programms">Космическое ГТО</td>
                    </tr>
                    <tr>
                        <td className="programms">Викторина космонавта</td>
                    </tr>

                    <tr>
                        <td rowSpan="2">Научно-популярная программа</td>
                        <td className="programms">Лекции космонавтов</td>
                    </tr>
                    <tr>
                        <td className="programms">Фестиваль научно-популярного кино</td>
                    </tr>

                    <tr>
                        <td rowSpan="5">Экскурсионно-ознакомительная программа</td>
                        <td className="programms">Экскурсии на РКЦ «Прогресс» и ПАО «Кузнецов»</td>
                    </tr>
                    <tr>
                        <td className="programms">Экскурсия-квест по лабораториям Самарского университета</td>
                    </tr>
                    <tr>
                        <td className="programms">Экскурсия-квест по «космическим» местам Самары «От мечты к свершениям»</td>
                    </tr>
                    <tr>
                        <td className="programms">Экскурсия в музей «Самара Космическая»</td>
                    </tr>
                    <tr>
                        <td className="programms">Бункер Сталина</td>
                    </tr>

                    </tbody>
                </table>

            </div>

            <div className="downloadPdf">
                <a href="https://vk.com/doc486021177_541461939?hash=16ca4101d9b30ae401&dl=3b18eaf18fccaa9267"
                   target="_blank">
                    Cкачать программу PDF
                </a>
            </div>

        </div>
    )
}
