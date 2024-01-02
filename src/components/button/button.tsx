import React from "react"
import "./style.css"
import Spinner from "../spinner"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren<{
    isLoading?: boolean
}>

export default React.forwardRef<HTMLButtonElement, Props>(({ children, isLoading, ...rest }, ref) => {
    return (
        <button
            ref={ref}
            {...rest}
            className="button"
            disabled={isLoading}
        >
            {isLoading ? <Spinner /> : children}
        </button>
    )
})