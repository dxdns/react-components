import React from "react"
import styles from "./styles.module.css"

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & React.PropsWithChildren<{}>

export default React.forwardRef<HTMLSelectElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div className={`${styles.select} ${rest.className || ""}`}>
            <select ref={ref} {...rest}>
                {children}
            </select>
        </div>
    )
})