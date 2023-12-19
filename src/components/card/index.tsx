import "./style.css"

type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function Card({ children }: Props) {
    return (
        <div className="card">
            {children}
        </div>
    )
}