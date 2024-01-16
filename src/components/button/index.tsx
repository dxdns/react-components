import React from "react"
import "./style.css"
import Spinner from "../spinner"
import { ColorType, SizeType, VariantType } from "../../types"

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
    const hasChild = right || left ? "has-more-childs" : ""

    return (
        <button
            ref={ref}
            {...rest}
            className={`button ${variant} ${color} ${size} ${hasChild} ${rest.className}`}
            disabled={isLoading || rest.disabled}
        >
            {left}
            {isLoading ? <Spinner /> : children}
            {right}
        </button>
    )
})