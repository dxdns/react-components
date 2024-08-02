import React from "react"
import style from "./style.module.css"

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & React.PropsWithChildren<{}>

export default React.forwardRef<HTMLSelectElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div className={`${style.select} ${rest.className || ""}`}>
            <select ref={ref} {...rest}>
                {children}
            </select>
        </div>
    )
})