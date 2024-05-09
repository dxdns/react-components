import React from "react"
import style from "./style.module.css"

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & React.PropsWithChildren<{}>

export default React.forwardRef<HTMLSelectElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div className={style.select}>
            <select ref={ref} {...rest}>
                {children}
            </select>
        </div>
    )
})