import style from "./style.module.css"
import React from "react"
import Icon from "../icon"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    icon?: string
}

export default React.forwardRef<HTMLInputElement, Props>(({ label, icon, ...rest }, ref) => {
    return (
        <div className={style.switch}>
            <div className={style.wrapper}>
                <input
                    ref={ref}
                    {...rest}
                    type="checkbox"
                />
                {icon && <Icon name={icon} variant="text" />}
            </div>
            <label>{label}</label>
        </div>
    )
})