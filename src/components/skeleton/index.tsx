import React from "react"
import style from "./style.module.css"

type Props = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {
    variant?: "square" | "line"
    animation?: "scale" | "default"
}

export default React.forwardRef<HTMLDivElement, Props>(({ variant, animation = "default", children, ...rest }, ref) => {
    return (
        <div
            ref={ref}
            {...rest}
            className={`${style.skeleton} ${rest.className || ""} ${variant ?? ""} ${style[animation]}`}
        >
            {children}
        </div>
    )
})