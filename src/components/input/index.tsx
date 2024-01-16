import React from "react"
import "./style.css"
import IconButton from "../icon-button"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
}

export default React.forwardRef<HTMLInputElement, Props>(({ label, ...rest }, ref) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    function handleInputPassword() {
        setPasswordVisible(old => !old)
        inputRef.current?.focus()
    }

    return (
        <div className={`input-group ${rest.required ? "required" : ""}`}>
            <input
                ref={ref || inputRef}
                {...rest}
                type={passwordVisible ? "text" : rest.type}
                autoComplete="off"
                placeholder=" "
            />
            {label && <label htmlFor={label}>
                {label}
            </label>}
            {rest.type === "password" &&
                <IconButton
                    type="button"
                    name={passwordVisible ? "visibility" : "visibility_off"}
                    onClick={handleInputPassword}
                />}
        </div>
    )
})