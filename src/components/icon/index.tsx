import { ColorType, VariantType } from "../../types"
import "./style.css"

type Props = {
    name: string
    variant?: VariantType
    color?: ColorType
    bgColor?: ColorType
}

export default function Icon(props: Props) {
    const { name, color = "inherit", bgColor, variant = "text" } = props

    return (
        <span
            className={`icon material-icons-sharp ${variant} ${color}`}
            style={{
                backgroundColor: bgColor ? `var(--color-${bgColor ?? ""})` : ""
            }}
        >
            {name}
        </span>
    )
}