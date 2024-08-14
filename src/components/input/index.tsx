import style from "./style.module.css"
import React from "react"
import IconButton from "../icon-button"
import { VariantType } from "@/types"
import { FaSearch } from "react-icons/fa"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

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
        <div className={`${style["input-group"]} ${rest.required ? style.required : ""} ${style[variant]} ${rest.className || ""}`}>
            {
                rest.type === "search" && <FaSearch className={style.icon} size={20} />
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
                    className={`${style["icon-button"]} ${style.icon}`}
                    type="button"
                    Icon={passwordVisible ? MdVisibility : MdVisibilityOff}
                    onClick={handleInputPassword}
                />
            }
        </div>
    )
})