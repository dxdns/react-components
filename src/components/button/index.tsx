import style from "./style.module.css"
import React from "react"
import Spinner from "../spinner"
import { ColorType, SizeType, VariantType } from "@/types"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & React.PropsWithChildren & {
    isLoading?: boolean
    variant?: VariantType
    color?: ColorType
    size?: SizeType
    right?: JSX.Element
    left?: JSX.Element
}

export default React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const {
        children,
        isLoading,
        variant = "contained",
        color = "inherit",
        size = "md",
        right,
        left,
        ...rest
    } = props

    return (
        <button
            ref={ref}
            {...rest}
            className={`${style.button} ${style[variant]} ${color} ${size} ${rest.className || ""}`}
            disabled={isLoading || rest.disabled}
        >
            {left}
            {isLoading ? <Spinner /> : children}
            {right}
        </button>
    )
})