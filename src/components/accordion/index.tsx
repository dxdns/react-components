import "./style.css"
import { VariantType } from "../../types"
import React from "react"

type Props = React.PropsWithChildren & {
    label: string | JSX.Element
    open: boolean
    variant?: VariantType
}

export default function Accordion({ label, open, variant = "contained", children }: Props) {
    const isActive = open ? "active" : ""

    return (
        <div className="accordion">
            <button className={`${isActive} ${variant}`}>
                {label}
            </button>
            <div className={`content ${isActive}`}>
                {children}
            </div>
        </div>
    )
}