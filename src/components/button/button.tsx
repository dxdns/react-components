import React from "react"
import "./style.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren<{}>

export default React.forwardRef<HTMLButtonElement, Props>(({ children, ...rest }, ref) => {
    return (
        <button
            ref={ref}
            {...rest}
            className="button"
        >
            {children}
        </button>
    )
})