import React from "react"
import style from "./style.module.css"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    mask?: boolean
}

export default React.forwardRef<HTMLInputElement, Props>(({ mask, ...rest }, ref) => {
    function handleInput({ currentTarget }: React.FormEvent<HTMLInputElement>) {
        const value = currentTarget.value
        const max = currentTarget.maxLength

        currentTarget.value = value.length > max ? value.slice(0, max) : value
    }

    return (
        <input
            ref={ref}
            className={style["pin-input"]}
            {...rest}
            type={!mask ? "number" : "password"}
            inputMode="numeric"
            placeholder="○"
            maxLength={1}
            onInput={handleInput}
        />
    )
})