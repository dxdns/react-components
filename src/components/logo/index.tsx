import React from "react"
import logo from "../../assets/react.svg"
import style from "./style.module.css"

type Props = React.HTMLAttributes<HTMLDivElement>

export default React.forwardRef<HTMLDivElement, Props>(({ ...rest }, ref) => {
    return (
        <div ref={ref} {...rest} className={`${style.logo} ${rest.className || ""}`}>
            <img src={logo} alt="" />
            <h2>TE<span className="error">ST</span></h2>
        </div>
    )
})