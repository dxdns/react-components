import "./style.css"
import React from "react"
import Icon from "../icon"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    icon?: string
}

export default React.forwardRef<HTMLInputElement, Props>(({ label, icon, ...rest }, ref) => {
    return (
        <div className="switch">
            <div className="wrapper">
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