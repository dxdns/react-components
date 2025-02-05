import styles from "./styles.module.css"
import React from "react"
import IconButton from "../icon-button"
import { VariantType } from "../../types"
import { FaSearch } from "react-icons/fa"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    variant?: VariantType
}

export default React.forwardRef<HTMLInputElement, Props>(({ label, variant = "outlined", ...rest }, ref) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (rest.type === "number") {
            let newValue = parseFloat(e.target.value)

            if (Number.isNaN(newValue)) {
                console.error("invalid")
            }

            if (rest.min || Number(rest.min) === 0) {
                let min = Number(rest.min || 0)
                if (newValue <= min) {
                    newValue = min
                }
            }

            if (rest.max) {
                let max = Number(rest.max || 0)
                if (newValue >= max) {
                    newValue = max
                }
            }

            inputRef.current!.value = String(newValue)
        }

        rest.onChange && rest.onChange(e)
    }

    function handleInputPassword() {
        setPasswordVisible(old => !old)
        inputRef.current?.focus()
    }

    return (
        <div className={`${styles["input-group"]} ${rest.required ? styles.required : ""} ${styles[variant]} ${rest.className || ""}`}>
            {
                rest.type === "search" && <FaSearch className={`${styles.icon} ${styles.search}`} size={20} />
            }
            <input
                ref={ref || inputRef}
                {...rest}
                type={passwordVisible ? "text" : rest.type}
                autoComplete="off"
                placeholder={rest.type === "search" ? rest.placeholder : " "}
                onChange={handleChange}
            />
            {
                label && <label htmlFor={label}>
                    {label}
                </label>
            }
            {
                rest.type === "password" &&
                <IconButton
                    className={`${styles["icon-button"]} ${styles.icon}`}
                    type="button"
                    Icon={passwordVisible ? MdVisibility : MdVisibilityOff}
                    onClick={handleInputPassword}
                />
            }
        </div>
    )
})