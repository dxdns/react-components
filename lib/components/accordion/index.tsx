import styles from "./styles.module.css"
import { VariantType } from "../../types"
import React from "react"

type Props = React.PropsWithChildren & {
    label: string | JSX.Element
    open: boolean
    variant?: VariantType
}

export default function Accordion({
    label,
    open,
    variant = "contained",
    children,
}: Props) {
    const isActive = open ? styles.active : ""

    return (
        <div className={styles.accordion}>
            <button className={`${isActive} ${styles[variant]}`}>
                {label}
            </button>
            <div className={`content ${isActive}`}>{children}</div>
        </div>
    )
}
