import React from 'react'
import '../../common/css/modalwnd.css'

export const BaseWnd = ({ wndTitle, isShowing, hide, ...props }) => {
    /**
     * Базовый компонент для модальных окон.
     * Для открытия и закрытия можно использовать хук useToggle.
     * @whdTitle {String} Заголовок окна
     * @isShowing {Boolean} Открытое (true) или закрытое (false) состояние окна
     * @hide {Function} функция закрытия окна, переводящее isShowing в false
     */
    return (
        isShowing && <div className="modal-block">
            <div className="window-block">
                <div className="window-header">
                    <div className="window-title">
                        {wndTitle}
                    </div>
                    <button
                        className="window-icon close"
                        onClick={hide}
                    >
                        X
                    </button>
                </div>
                <hr />
                <div className="window-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}