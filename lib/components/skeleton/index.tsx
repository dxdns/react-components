import React from "react"
import styles from "./styles.module.css"

type Props = React.HTMLAttributes<HTMLDivElement> &
    React.PropsWithChildren & {
        variant?: "square" | "line"
        animation?: "scale" | "default"
    }

export default React.forwardRef<HTMLDivElement, Props>(
    ({ variant, animation = "default", children, ...rest }, ref) => {
        return (
            <div
                ref={ref}
                {...rest}
                className={`${styles.skeleton} ${rest.className || ""} ${variant ?? ""} ${styles[animation]}`}
            >
                {children}
            </div>
        )
    },
)
