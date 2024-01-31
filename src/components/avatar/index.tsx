import React from "react"
import "./style.css"

type Props = React.ImgHTMLAttributes<HTMLImageElement> & React.PropsWithChildren & {}

export default React.forwardRef<HTMLImageElement, Props>((props, ref) => {
    const { children, ...rest } = props

    const bgColor = rest.style?.backgroundColor || "var(--color-light)"

    return (
        <div
            className="avatar"
            style={{
                background: bgColor
            }}
        >
            <img
                ref={ref}
                {...rest}
            />
            <span>
                {typeof (children) === "string" ? Array.from(children)[0] : children}
            </span>
        </div>
    )
})