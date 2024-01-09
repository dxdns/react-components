import React from "react"
import Card from "../card"
import "./style.css"

type Props = React.PropsWithChildren & {
    open: boolean
}

export default function Menu({ open, children }: Props) {
    const isOpen = open ? "open" : ""

    return (
        <Card className={`menu ${isOpen}`}>
            {children}
        </Card>

    )
}