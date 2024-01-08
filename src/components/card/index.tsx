import React from "react"
import "./style.css"

type Props = React.PropsWithChildren & {}

export default function Card({ children }: Props) {
    return (
        <div className="card">
            {children}
        </div>
    )
}