import React from 'react'
import '../../App.css'
import './Style_contact.css'
import contacts1 from './contacts1.jpg'

export const ContactsPage = () => {
    return (
        <div>
            <div className="picture">
                <img  src={contacts1}/>

            </div>
            <br/>
            <br/>
            <br/>
            <div className="info-container">
                <div className= "contact_text">
                    Федеральное государственное автономное образовательное учреждение высшего образования «Самарский
                        национальный исследовательский университет имени академика С.П. Королева»
                        <br/>Адрес: 443086 г. Самара, Московское шоссе 34 (3а корпус, 210а ауд.)
                        <br/>тел. +7(846) 267-43-61, +7(905)302-39-58.
                        <br/>Электронная почта: okvd.ssau@gmail.com
                        <br/>
                        <br/> <b>Контактное лицо:</b>
                        <br/>Даниленко Александра Николаевна – к.т.н., доцент, начальник отдела конгрессно-выставочной
                        деятельности.
                </div>
            </div>
            <div className="map">
                <br/>
                <br/>
                <br/>
                <h1 >Карта</h1>
                <div>
                    <br/>

                </div>
            </div>
        </div>
    )
}