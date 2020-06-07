import React from 'react'
import './footercmp.css'

export const FooterComponent = () => {
    return (
        <footer className="app-footer">
            <center>
                <h1>Контактная информация</h1>
            </center>

            <br/>Адрес: 443086 г. Самара, Московское шоссе 34 (3а корпус, 210а ауд.)
            <br/>Телефоны: +7(846) 267-43-61, +7(905)302-39-58.
            <br/>Электронная почта: <a href="mailto:okvd.ssau@gmail.com">okvd.ssau@gmail.com</a>
            <br/>
            <br/> <b>Контактное лицо:</b>
            <br/>Даниленко Александра Николаевна – к.т.н., доцент, начальник отдела конгрессно-выставочной
            деятельности.
        </footer>
    );
}