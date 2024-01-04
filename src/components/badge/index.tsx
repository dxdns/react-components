import React from "react"
import "./style.css"

type Props = React.HTMLAttributes<HTMLSpanElement> & React.PropsWithChildren<{
    size?: "sm" | "lg"
    variant?: "contained" | "outlined"
}>

export default React.forwardRef<HTMLSpanElement, Props>(({ children, variant = "contained", size = "lg", ...rest }, ref) => {
    return (
        <span
            ref={ref}
            {...rest}
            className={`badge ${variant} ${size}`}
        >
            {children}
        </span>
    )
})