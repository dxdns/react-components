import { PropsWithChildren } from "react"
import "./style.css"

type Props = PropsWithChildren & {}

export default function Card({ children }: Props) {
    return (
        <div className="card">
            {children}
        </div>
    )
}