import React from "react"
import styles from "./styles.module.css"

type Props = React.PropsWithChildren & {
    onClick: () => void
}
export default function MenuItem({ onClick, children }: Props) {
    return (
        <div className={styles["menu-item"]} onClick={onClick}>
            {children}
        </div>
    )
}
