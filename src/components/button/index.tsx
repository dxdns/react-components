import React from "react"
import "./style.css"
import Spinner from "../spinner"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren<{
    isLoading?: boolean
    variant?: "contained" | "outlined"
}>

export default React.forwardRef<HTMLButtonElement, Props>(({ children, isLoading, variant = "contained", ...rest }, ref) => {
    return (
        <button
            ref={ref}
            {...rest}
            className={`button ${variant}`}
            disabled={isLoading}
        >
            {isLoading ? <Spinner /> : children}
        </button>
    )
})