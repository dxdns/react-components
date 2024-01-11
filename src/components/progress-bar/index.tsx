import { ColorType } from "../../types"
import "./style.css"

type Props = {
    value: number
    color?: ColorType
}

export default function ProgressBar({ value, color = "inherit" }: Props) {
    return (
        <div className={`progress-bar ${color}`}>
            <div className={color} style={{ width: `${value}%` }}></div>
        </div>
    )
}