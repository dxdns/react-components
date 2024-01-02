import React from "react"
import "./style.css"

type Props = React.ButtonHTMLAttributes<HTMLInputElement> & {
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
            />
            {label && <label className="form-label">
                {label}
            </label>}
        </div>
    )
})