import style from "./style.module.css"
import React from "react"
import { SizeType, VariantType } from "@/types"

type Props = React.HTMLAttributes<HTMLSpanElement> & React.PropsWithChildren<{
    size?: SizeType
    variant?: VariantType
}>

export default React.forwardRef<HTMLSpanElement, Props>((props, ref) => {
    const {
        children,
        variant = "contained",
        size = "md",
        ...rest
    } = props

    return (
        <span
            ref={ref}
            {...rest}
            className={`${style.badge} ${style[variant]} ${style[size]} ${rest.className || ""}`}
        >
            {children}
        </span>
    )
})