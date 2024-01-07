import React from "react"
import "./style.css"
import { SizeType, VariantType } from "../../types"

type Props = React.HTMLAttributes<HTMLSpanElement> & React.PropsWithChildren<{
    size?: SizeType
    variant?: VariantType
}>

export default React.forwardRef<HTMLSpanElement, Props>(({ children, variant = "contained", size = "lg", ...rest }, ref) => {
    return (
        <span
            ref={ref}
            {...rest}
            className={`badge ${variant} ${size}`}
        >
            {children}
        </span>
    )
})