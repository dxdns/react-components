import React from "react"
import Input from "../input"
import "./style.css"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {}

export default React.forwardRef<HTMLInputElement, Props>(({ ...rest }, ref) => {
    return (
        <Input
            ref={ref}
            {...rest}
            className="date-picker"
            type="date"
        />
    )
})