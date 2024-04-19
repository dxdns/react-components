import React from "react"
import "./style.css"

type Props = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {
    variant?: "square" | "line"
    animation?: "scale" | "default"
}

export default React.forwardRef<HTMLDivElement, Props>(({ variant, animation = "default", children, ...rest }, ref) => {
    return (
        <div
            ref={ref}
            {...rest}
            className={`skeleton ${rest.className} ${variant ?? ""} ${animation}`}
        >
            {children}
        </div>
    )
})