import "./icon.css"

type Props = {
    name: string
    color?: "primary" | "success" | "danger"
}

export default function Icon({ name, color }: Props) {
    return (
        <span className="icon material-icons-sharp" style={{ backgroundColor: `var(--color-${color ?? "primary"})` }}>
            {name}
        </span>
    )
}