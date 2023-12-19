import "./style.css"

type Props = {
    onClick?: () => void
    children: JSX.Element
}

export default function Button({ onClick, children }: Props) {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    )
}