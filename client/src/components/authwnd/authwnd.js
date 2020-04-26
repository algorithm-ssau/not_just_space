import React from 'react'
import { BaseWnd } from '../basewnd/basewnd'

export const AuthWnd = ({isShowing, hide}) => {

    return (
        <BaseWnd
            wndTitle="Регистрация"
            isShowing={isShowing}
            hide={hide}
        >
            <div>
                
            </div>
        </BaseWnd>
    )
}