import "./button.css"

type Props = {
    onClick?: () => void
    title: string
}

export default function Button({ onClick, title }: Props) {
    return (
        <button className="button" onClick={onClick}>
            {title}
        </button>
    )
}