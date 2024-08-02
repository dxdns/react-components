import style from "./style.module.css"
import React from "react"

type Props = React.PropsWithChildren & {
    title: string
    open: boolean
    onClose: () => void
}

export default function Modal({ title, children, open, onClose }: Props) {
    return (
        <div id={style["modal-container"]} className={`${open ? style.show : ""}`}>
            <div className={style["modal-background"]}>
                <div className={style["modal-content"]}>
                    <div className={style["modal-header"]}>
                        <h2>{title}</h2>
                        <span className={style["btn-close"]} onClick={onClose}>&times;</span>
                    </div>
                    <div className={style["modal-body"]}>
                        {children}
                    </div>
                    {/* <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div> */}
                </div>
            </div>
        </div>
    )
}