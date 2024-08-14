import React from "react"
import style from "./style.module.css"

type Props = React.HTMLAttributes<HTMLDivElement>

export default React.forwardRef<HTMLDivElement, Props>(({ ...rest }, ref) => {
    return (
        <div ref={ref} {...rest} className={`${style.logo} ${rest.className || ""}`}>
            <img src={"/logo.png"} alt="" />
            <h2>Home</h2>
        </div>
    )
})