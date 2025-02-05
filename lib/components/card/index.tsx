import React from "react"
import styles from "./styles.module.css"

type Props = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {}

export default React.forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div
            ref={ref}
            {...rest}
            className={`${styles.card} ${rest.className || ""}`}
        >
            {children}
        </div>
    )
})