import style from "./style.module.css"
import { VariantType } from "@/types"
import React from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"

type Props = React.HTMLAttributes<HTMLDivElement> & React.PropsWithChildren & {
    label?: string | JSX.Element
    open: boolean
    variant?: VariantType
}

export default React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { label, open, variant = "contained", children, ...rest } = props
    const isActive = open ? style.active : ""

    return (
        <div {...rest} ref={ref} className={`${style.accordion} ${rest.className || ""}`}>
            {
                label &&
                <button className={`${isActive} ${style[variant]}`}>
                    {label}
                    {
                        variant !== "text" && open ? <FaChevronDown /> : <FaChevronRight />
                    }
                </button>
            }
            <div className={`${style.content} ${isActive}`}>
                {children}
            </div>
        </div>
    )
})