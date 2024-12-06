import React from "react"
import styles from "./styles.module.css"

type Props = React.ImgHTMLAttributes<HTMLImageElement> & React.PropsWithChildren & {}

export default React.forwardRef<HTMLImageElement, Props>((props, ref) => {
    const { children, ...rest } = props

    const bgColor = rest.style?.backgroundColor || "var(--color-light)"

    return (
        <div
            className={styles.avatar}
            style={{
                background: bgColor
            }}
        >
            <img
                ref={ref}
                {...rest}
            />
            <span>
                {typeof (children) === "string" ? children.substring(0, 1) : children}
            </span>
        </div>
    )
})