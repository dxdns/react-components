import React from "react"
import Button from "../button"
import style from "./style.module.css"
import { IconBaseProps, IconType } from "react-icons"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    Icon: IconType
    options?: IconBaseProps
}

export default React.forwardRef<HTMLButtonElement, Props>(({ Icon, options, ...rest }, ref) => {
    return (
        <Button
            className={style["icon-button"]}
            ref={ref}
            {...rest}
            variant="text"
            color={"inherit" || rest.color}
        >
            <Icon {...options} />
        </Button>
    )
})