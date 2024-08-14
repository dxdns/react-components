import { ColorType, SizeType } from "@/types"
import style from "./style.module.css"

type Props = {
    size?: SizeType
    color?: ColorType
}

export default function({ size = "sm", color = "primary" }: Props) {
    return (
        <span className={`${style.spinner} ${style[size]} ${style[color]}`}></span>
    )
}