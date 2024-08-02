import React from "react"
import style from "./style.module.css"

type Props = React.PropsWithChildren & {
    onClick: () => void
}
export default function MenuItem({ onClick, children }: Props) {
    return (
        <div className={style["menu-item"]} onClick={onClick}>
            {children}
        </div>
    )
}