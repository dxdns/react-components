import "./style.css"

export default function PinInput() {
    return (
        <div className="pin-input">
            <input type="text" placeholder="○" maxLength={1} autoFocus />
            <input type="text" placeholder="○" maxLength={1} />
            <input type="text" placeholder="○" maxLength={1} />
            <input type="text" placeholder="○" maxLength={1} />
        </div>
    )
}