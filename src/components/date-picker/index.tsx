import "./style.css"

type Props = {
    onChange?: (value: string) => void
}

export default function DatePicker({ onChange }: Props) {
    return (
        <div className="date">
            <input
                type="date"
                onChange={(e) => onChange ? onChange(e.target.value) : null}
            />
        </div>
    )
}