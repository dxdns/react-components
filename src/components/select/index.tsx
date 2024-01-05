import { PropsWithChildren } from "react"
import "./style.css"

type Props = PropsWithChildren & {}

export default function Select({ children }: Props) {
    return (
        <div className="select">
            <select>
                {children}
            </select>
        </div>
    )
}