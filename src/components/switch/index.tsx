import React from "react"
import "./style.css"

type Props = {
    onClick: () => void
    left?: JSX.Element
    right?: JSX.Element
}

export default function Switch({ onClick, left, right }: Props) {
    const [checked, setChecked] = React.useState(false)

    function handleClick() {
        setChecked(old => !old)
        onClick()
    }

    return (
        <div className="switch" onClick={handleClick}>
            <span className={`${!checked ? "active" : ""}`}>{left}</span>
            <span className={`${checked ? "active" : ""}`}>{right}</span>
        </div>
    )
}