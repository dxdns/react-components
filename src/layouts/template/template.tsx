import "./style.css"

type Props = {
    children: JSX.Element | JSX.Element[]
}

export default function Template({ children }: Props) {
    return (
        <div className="template">
            {children}
        </div>
    )
}