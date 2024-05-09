import React from "react"
import style from "./style.module.css"

type Props = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {}

export default React.forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div
            ref={ref}
            {...rest}
            className={`${style.card} ${rest.className || ""}`}
        >
            {children}
        </div>
    )
})