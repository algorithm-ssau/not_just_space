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

                <h1 >Карта</h1>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.325037662168!2d50.176155454955676!3d53.21202019026088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661ebcd7e0d123%3A0xd5cd73064fb323b6!2z0JzQvtGB0LrQvtCy0YHQutC-0LUg0YguLCAzNCwg0KHQsNC80LDRgNCwLCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7LiwgNDQzMDg2!5e0!3m2!1sru!2sru!4v1588691052721!5m2!1sru!2sru">
                    </iframe>
                </div>
            </div>
        </div>
    )
}