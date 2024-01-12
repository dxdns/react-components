import React from "react"
import "./style.css"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export default React.forwardRef<HTMLInputElement, Props>(({ label, ...rest }, ref) => {
    return (
        <div className="form-group">
            <input
                ref={ref}
                {...rest}
                className="form-field"
                placeholder="default"
                autoComplete="off"
            />
            {label && <label className="form-label">
                {label}
            </label>}
        </div>
    )
})