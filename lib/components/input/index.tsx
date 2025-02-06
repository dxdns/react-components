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
