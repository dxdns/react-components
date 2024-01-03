import React from "react"
import Input from "../input"
import "./style.css"

type Props = {
    data: Record<string, any>[]
}

export default function AutoComplete({ data }: Props) {
    const [text, setText] = React.useState("")
    const [filtered, setFiltered] = React.useState<Record<string, any>[]>([])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)

        const newData = data.filter(item => {
            return item.title.toLowerCase().includes(text.toLowerCase())
        })
        setFiltered(newData)
    }

    function handleClickAutoComplete(text: string) {
        setText(text)
        setFiltered([])
    }

    React.useEffect(() => {
        if (text === "") {
            setFiltered([])
        }
    }, [text])

    return (
        <div className="autocomplete">
            <Input
                type="text"
                label="Pesquisar..."
                value={text}
                onChange={handleChange}
            />

            {filtered.length !== 0 &&
                <div className="items">
                    {filtered.map(item => (
                        <div
                            key={item.id}
                            onClick={() => handleClickAutoComplete(item.title)}
                        >
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}