import styles from "./styles.module.css"
import React from "react"
import IconButton from "../icon-button"
import { FaSearch } from "react-icons/fa"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { VariantType } from "lib/types"

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    variant?: VariantType
}

export default React.forwardRef<HTMLInputElement, Props>(
    ({ label, variant = "outlined", ...rest }, ref) => {
        const [passwordVisible, setPasswordVisible] = React.useState(false)
        const inputRef = React.useRef<HTMLInputElement | null>(null)

        function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
            if (rest.type === "number") {
                let newValue = event.target.value

                inputRef.current!.value = newValue

                const numericValue = parseFloat(newValue)
                if (!Number.isNaN(numericValue)) {
                    newValue = numericValue.toString()
                }

                const min = rest.min ? Number(rest.min) : 0
                if (min || Number(min) === 0) {
                    if (numericValue <= min) {
                        newValue = min.toString()
                    }
                }

                const max = rest.max ? Number(rest.max) : Infinity
                if (max) {
                    if (numericValue >= max) {
                        newValue = max.toString()
                    }
                }
            }

            rest.onChange && rest.onChange(event)
        }

        function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
            const value = inputRef.current!.value
            const hasDecimalPoint = value.includes(".")

            if (event.key === "." && hasDecimalPoint) {
                event.preventDefault()
            }
        }

        function handleBlur(
            event: React.FocusEvent<HTMLInputElement, Element>,
        ) {
            if (rest.type === "number") {
                const numericValue = parseFloat(inputRef.current!.value)

                if (!isNaN(numericValue)) {
                    inputRef.current!.value = numericValue.toFixed(2)
                }
            }
            rest.onBlur && rest.onBlur(event)
        }

        function handleInputPassword() {
            setPasswordVisible((old) => !old)
            inputRef.current?.focus()
        }

        return (
            <div
                className={`${styles["input-group"]} ${rest.required ? styles.required : ""} ${styles[variant]} ${rest.className || ""}`}
            >
                {rest.type === "search" && (
                    <FaSearch
                        className={`${styles.icon} ${styles.search}`}
                        size={20}
                    />
                )}
                <input
                    ref={ref || inputRef}
                    {...rest}
                    type={passwordVisible ? "text" : rest.type}
                    autoComplete="off"
                    placeholder={
                        rest.type === "search" ? rest.placeholder : " "
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
                {label && <label htmlFor={label}>{label}</label>}
                {rest.type === "password" && (
                    <IconButton
                        className={`${styles["icon-button"]} ${styles.icon}`}
                        type="button"
                        Icon={passwordVisible ? MdVisibility : MdVisibilityOff}
                        onClick={handleInputPassword}
                    />
                )}
            </div>
        )
    },
)
