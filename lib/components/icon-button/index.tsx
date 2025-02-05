import React from "react"
import Button from "../button"
import styles from "./styles.module.css"
import { IconBaseProps, IconType } from "react-icons"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    Icon: IconType
    options?: IconBaseProps
}

export default React.forwardRef<HTMLButtonElement, Props>(
    ({ Icon, options, ...rest }, ref) => {
        return (
            <Button
                className={`${styles["icon-button"]} ${rest.className || ""}`}
                ref={ref}
                {...rest}
                variant="text"
                color={"inherit"}
            >
                <Icon {...options} />
            </Button>
        )
    },
)
