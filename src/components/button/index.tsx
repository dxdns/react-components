import React from "react"
import "./style.css"
import Spinner from "../spinner"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren<{
    isLoading?: boolean
    variant?: "contained" | "outlined"
    right?: React.ReactNode
    left?: React.ReactNode
}>

export default React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const { children, isLoading, variant = "contained", right, left, ...rest } = props
    const hasChild = right || left ? "has-child" : ""

    return (
        <button
            ref={ref}
            {...rest}
            className={`button ${variant} ${hasChild}`}
            disabled={isLoading}
        >
            {right}
            {isLoading ? <Spinner /> : children}
            {left}
        </button>
    )
})