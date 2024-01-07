import { ColorType, VariantType } from "../../types"
import "./style.css"

type Props = {
    name: string
    bgColor?: ColorType
    variant?: VariantType
}

export default function Icon({ name, bgColor = "primary", variant = "text" }: Props) {
    return (
        <span
            id="icon"
            className={`icon material-icons-sharp ${variant}`}
            style={{
                backgroundColor: `var(--color-${bgColor})`,
                // color: `var(--color-${color})`
            }}
        >
            {name}
        </span>
    )
}