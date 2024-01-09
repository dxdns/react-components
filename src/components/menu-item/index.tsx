import React from "react"
import "./style.css"

type Props = React.PropsWithChildren & {
    onClick: () => void
}
export default function MenuItem({ onClick, children }: Props) {
    return (
        <div className="menu-item" onClick={onClick}>
            {children}
        </div>
    )
}