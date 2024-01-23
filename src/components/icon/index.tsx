import { ColorType, SizeType, VariantType } from "../../types"
import "./style.css"

type Props = {
    name: string
    variant?: VariantType
    color?: ColorType
    bgColor?: ColorType
    size?: SizeType
}

export default function Icon(props: Props) {
    const {
        name,
        color = "inherit",
        bgColor,
        variant = "text",
        size = "md"
    } = props

    return (
        <span
            className={`icon material-icons-sharp ${variant} ${color} ${size}`}
            style={{
                backgroundColor: bgColor ? `var(--color-${bgColor ?? ""})` : ""
            }}
        >
            {name}
        </span>
    )
}