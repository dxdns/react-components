import React from "react"
import Button from "../button"
import Icon from "../icon"
import "./style.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    name: string
}

export default React.forwardRef<HTMLButtonElement, Props>(({ name, ...rest }, ref) => {
    return (
        <Button className="icon-button" ref={ref} {...rest} variant="text">
            <Icon name={name} variant="text" />
        </Button>
    )
})