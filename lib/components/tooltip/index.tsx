import "./styles.css"
import React from "react"
import { PositionType } from "../../types"

type Props = React.PropsWithChildren & {
    label: string
    position?: PositionType
}

export default function Tooltip(props: Props) {
    const {
        label,
        position = "right",
        children
    } = props

    return (
        <div
            data-tooltip={label}
            data-tooltip-location={position}
        >
            {children}
        </div>
    )
}