import { SizeType } from "../../types"
import "./style.css"

type Props = {
    size?: SizeType
}

export default function Spinner({ size = "sm" }: Props) {
    return (
        <span className={`spinner ${size}`}></span>
    )
}