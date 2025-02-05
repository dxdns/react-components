import React from "react"
import styles from "./styles.module.css"

type Props = React.HTMLAttributes<HTMLDivElement> & {
    src?: string
}

export default React.forwardRef<HTMLDivElement, Props>(({ src, ...rest }, ref) => {
    return (
        <div ref={ref} {...rest} className={`${styles.logo} ${rest.className || ""}`}>
            <img src={src} alt="" />
            <h2>TE<span className="error">ST</span></h2>
        </div>
    )
})