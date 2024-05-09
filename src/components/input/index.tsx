import style from "./style.module.css"
import React from "react"
import IconButton from "../icon-button"
import Icon from "../icon"
import { VariantType } from "@/types"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    variant?: VariantType
}

export default React.forwardRef<HTMLInputElement, Props>(({ label, variant = "outlined", ...rest }, ref) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    function handleInputPassword() {
        setPasswordVisible(old => !old)
        inputRef.current?.focus()
    }

    return (
        <div className={`${style["input-group"]} ${rest.required ? style.required : ""} ${style[variant]}`}>
            {
                rest.type === "search" && <Icon className={style.icon} name="search" />
            }
            <input
                ref={ref || inputRef}
                {...rest}
                type={passwordVisible ? "text" : rest.type}
                autoComplete="off"
                placeholder={rest.type === "search" ? rest.placeholder : " "}
            />
            {
                label && <label htmlFor={label}>
                    {label}
                </label>
            }
            {
                rest.type === "password" &&
                <IconButton
                    className={style["icon-button"]}
                    type="button"
                    name={passwordVisible ? "visibility" : "visibility_off"}
                    onClick={handleInputPassword}
                />
            }
        </div>
    )
})