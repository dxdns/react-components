import { ColorType, SizeType, VariantType } from "../../types"
import styles from "./styles.module.css"
import React from "react"

type Props = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {
    name: string
    variant?: VariantType
    color?: ColorType
    bgColor?: ColorType
    size?: SizeType
}

export default React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
        name,
        color = "inherit",
        bgColor,
        variant = "text",
        size = "md",
        children,
        ...rest
    } = props

    return (
        <span
            ref={ref}
            {...rest}
            className={`${styles.icon} material-icons-sharp ${styles[variant]} ${color} ${size} ${rest.className || ""}`}
            style={{
                backgroundColor: bgColor ? `var(--color-${bgColor ?? ""})` : ""
            }}
        >
            {name}
        </span>
    )
})