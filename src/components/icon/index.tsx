import "./style.css"

type Props = {
    name: string
    bgColor?: "primary" | "success" | "danger"
    variant?: "contained" | "outlined" | "text"
}

export default function Icon({ name, bgColor = "primary", variant = "contained" }: Props) {
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