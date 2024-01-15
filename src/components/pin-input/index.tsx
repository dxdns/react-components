import "./style.css"

type Props = {
    mask?: boolean
}

export default function PinInput({ mask }: Props) {
    function handleInput({ currentTarget }: React.FormEvent<HTMLInputElement>) {
        const value = currentTarget.value
        const max = currentTarget.maxLength

        currentTarget.value = value.length > max ? value.slice(0, max) : value
    }

    return (
        <div className="pin-input">
            {[...Array(4)].map((_, index) => (
                <input
                    key={index}
                    type={!mask ? "number" : "password"}
                    inputMode="numeric"
                    placeholder="○"
                    maxLength={1}
                    onInput={handleInput}
                />
            ))}

        </div>
    )
}