import styles from "./styles.module.css"
import React from "react"

type Props = React.PropsWithChildren & {
    title: string
    open: boolean
    onClose: () => void
}

export default function Modal({ title, children, open, onClose }: Props) {
    return (
        <div id={styles["modal-container"]} className={`${open ? styles.show : ""}`}>
            <div className={styles["modal-background"]}>
                <div className={styles["modal-content"]}>
                    <div className={styles["modal-header"]}>
                        <h2>{title}</h2>
                        <span className={styles["btn-close"]} onClick={onClose}>&times;</span>
                    </div>
                    <div className={styles["modal-body"]}>
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