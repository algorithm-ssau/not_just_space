import React, {useState} from 'react'
import { BaseWnd } from '../basewnd/basewnd'

export const AuthWnd = ({ isShowing, hide }) => {

    const wndStyle = {
        width: '700px',
        height: '85vh'
    }

    const [activeRegistration, setActiveRegistration] = useState({
        farSpace: false,
        breakTest: false,
        dreamToFulfilment: false
    })

    let [forStudents, setForStudents] = useState(false);

    const switchRegistrationEvent = (event) => {
        const value = event.target.value;

        for (let key in activeRegistration) {
            activeRegistration[key] = value === key;
        }
        setActiveRegistration({...activeRegistration})
    };

    return (
        <BaseWnd
            wndTitle="Регистрация"
            isShowing={isShowing}
            hide={hide}
            wndStyle={wndStyle}
        >
            <div {...{
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                }
            }}>
                <button
                    value='farSpace'
                    onClick={switchRegistrationEvent}
                >
                    Технологическая форсайт-сессия «Дальний космос»
                </button>
                <button
                    value='breakTest'
                    onClick={switchRegistrationEvent}
                >
                    «Краш-тест» научных проектов
                </button>
                <button
                    value='dreamToFulfilment'
                    onClick={switchRegistrationEvent}
                >
                    Экскурсия-квест «От мечты к свершениям»
                </button>
            </div>
            <center>
                <iframe hidden={!activeRegistration.farSpace} src="https://docs.google.com/forms/d/e/1FAIpQLSezj-LPeXWtlrrfhXwbzzGbZwBs-b5vqXTbWD9UZiOi0qM36w/viewform?embedded=true" width="640" height="2135" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
                <div hidden={!activeRegistration.breakTest}>
                    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfVlLl6Djca2-W68fdn3iRo7oNqzJE2sHwfdI3Aa4tSg13s-g/viewform?usp=sf_link">
                        «Краш-тест» научных проектов
                    </a>
                </div>
                <div hidden={!activeRegistration.dreamToFulfilment}>
                    <label htmlFor="forStudentsNo" style={{display: 'inline-block'}}><h3>Для всех: </h3></label>
                    <input
                        type="radio"
                        name="forStudents"
                        value="forStudentsNo"
                        id="forStudentsNo"
                        onChange={(event) => {setForStudents(event.target.value === 'forStudentsYes')}}
                    />
                    <label htmlFor="forStudentsYes" style={{display: 'inline-block'}}><h3>Для школьников: </h3></label>
                    <input
                        type="radio"
                        name="forStudents"
                        value="forStudentsYes"
                        id="forStudentsYes"
                        onChange={(event) => { setForStudents(event.target.value === 'forStudentsYes') }}
                    />
                    <div hidden={forStudents}>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe2ln_wlUgZYDwjC7_fs8UoIoJ6WFeWgumhT9xtLrbaVg8FEg/viewform?embedded=true" width="640" height="1940" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
                    </div>
                    <div hidden={!forStudents}>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdElidGAL3cBr-rbG_Es_R7FKPRobUZzNVPR3fIEFHF2oXtVg/viewform?embedded=true" width="640" height="1400" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
                    </div>
                </div>
            </center>
        </BaseWnd>
    )
}