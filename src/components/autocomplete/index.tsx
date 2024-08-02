import React from "react"
import Input from "../input"
import style from "./style.module.css"

type Props = {
    data: Record<string, any>[]
}

export default function AutoComplete({ data }: Props) {
    const [text, setText] = React.useState("")
    const [filtered, setFiltered] = React.useState<Record<string, any>[]>([])
    const [focused, setFocused] = React.useState(-1)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
        setFiltered(data.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    function handleClick(text: string) {
        setText(text)
        setFiltered([])
        setFocused(-1)
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        let nextIndexCount = 0

        if (e.key === "ArrowDown")
            nextIndexCount = (focused + 1) % filtered.length

        if (e.key === "ArrowUp")
            nextIndexCount = (focused + filtered.length - 1) % filtered.length

        if (e.key === "Escape") {
            handleClick("")
        }

        if (e.key === "Enter") {
            e.preventDefault()
            console.log(filtered[focused])
            handleClick(filtered[focused].title)
        }

        setFocused(nextIndexCount)
    }

    React.useEffect(() => {
        if (text === "") {
            setFiltered([])
        }
    }, [text])

    return (
        <div className={style.autocomplete}>
            <Input
                type="search"
                label="Pesquisar..."
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />

            {
                filtered.length !== 0 &&
                <div className={style.items}>
                    {
                        filtered.map((item, index) => (
                            <div
                                key={item.id}
                                className={focused === index ? style.focused : ""}
                                onClick={() => handleClick(item.title)}
                            >
                                <p>{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}