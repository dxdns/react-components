import React from "react"
import "./style.css"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export default React.forwardRef<HTMLInputElement, Props>(({ label, ...rest }, ref) => {
    return (
        <div className={`input-group ${rest.required ? "required" : ""}`}>
            <input
                ref={ref}
                {...rest}
                autoComplete="off"
            />
            {label && <label htmlFor="">
                {label}
            </label>}
        </div>
    )
})