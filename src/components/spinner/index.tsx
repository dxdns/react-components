import "./style.css"

type Props = {
    size?: "sm" | "md" | "lg"
}

export default function Spinner({ size = "sm" }: Props) {
    return (
        <span className={`spinner ${size}`}></span>
    )
}