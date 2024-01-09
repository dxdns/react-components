import React from "react"
import "./style.css"

type Props = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {}

export default React.forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div
            ref={ref}
            {...rest}
            className={`card ${rest.className}`}
        >
            {children}
        </div>
    )
})