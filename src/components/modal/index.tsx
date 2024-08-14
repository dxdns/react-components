import React from "react"
import style from "./style.module.css"

type Props = React.PropsWithChildren & {
    open: boolean
    onClose?: () => void
}

export default function ({ open, onClose, children }: Props) {
    return (
        <div className={`${style.container} ${open ? style.four : ""}`}>
            {onClose && <div className={style.overlay} onClick={onClose}></div>}
            <div className={style.bg}>
                <div className={style.content}>
                    {onClose && <span className={style.close} onClick={onClose}>x</span>}
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}