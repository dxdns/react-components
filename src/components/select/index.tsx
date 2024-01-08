import React from "react"
import "./style.css"

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & React.PropsWithChildren<{}>

export default React.forwardRef<HTMLSelectElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div className="select">
            <select ref={ref} {...rest}>
                {children}
            </select>
        </div>
    )
})