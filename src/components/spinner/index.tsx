import { SizeType } from "@/types"
import style from "./style.module.css"

type Props = {
    size?: SizeType
}

export default function Spinner({ size = "sm" }: Props) {
    return (
        <span className={`${style.spinner} ${style[size]}`}></span>
    )
}