import React from "react"
import Input from "../input"
import style from "./style.module.css"


type Props = React.InputHTMLAttributes<HTMLInputElement> & React.PropsWithChildren & {}

export default React.forwardRef<HTMLInputElement, Props>(({ children, ...rest }, ref) => {
    return (
        <div className={`${style.autocomplete} ${rest.className || ""}`}>
            <Input
                ref={ref}
                {...rest}
                type="search"
            />
            <div className={style.items}>
                {children}
            </div>
        </div>
    )
})