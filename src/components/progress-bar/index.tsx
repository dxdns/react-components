import { ColorType } from "@/types"
import style from "./style.module.css"

type Props = {
    value: number
    color?: ColorType
}

export default function ProgressBar({ value, color = "inherit" }: Props) {
    return (
        <div className={`${style["progress-bar"]} ${style[color]}`}>
            <div className={style[color]} style={{ width: `${value}%` }}></div>
        </div>
    )
}