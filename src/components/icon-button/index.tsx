import React from "react"
import Button from "../button"
import Icon from "../icon"
import style from "./style.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string
}

export default React.forwardRef<HTMLButtonElement, Props>(({ name, ...rest }, ref) => {
    return (
        <Button
            className={style["icon-button"]}
            ref={ref}
            {...rest}
            variant="text"
            color={"inherit" || rest.color}
        >
            <Icon className={`${style.icon} ${rest.className || ""}`} name={name} variant="text" />
        </Button>
    )
})