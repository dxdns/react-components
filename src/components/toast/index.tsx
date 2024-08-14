import React from "react"
import styles from "./style.module.css"
import { createRoot } from "react-dom/client"
import { ColorType } from "@/types"
import { MdCheckCircleOutline, MdErrorOutline, MdOutlineInfo, MdOutlineWarning } from "react-icons/md"
import { IconBaseProps } from "react-icons"

type Props = React.HTMLAttributes<HTMLDivElement> & {
    message: string
    duration?: number
    bgColor?: ColorType
}

const Toast = React.forwardRef<HTMLDivElement, Props>(({ message, bgColor = "secondary", ...rest }, ref) => {
    function Icon(props: IconBaseProps) {
        switch (bgColor) {
            case "error":
                return <MdErrorOutline {...props} />
            case "success":
                return <MdCheckCircleOutline {...props} />
            case "warning":
                return <MdOutlineWarning {...props} />
            default:
                return <MdOutlineInfo {...props} />
        }
    }

    return (
        <div ref={ref} {...rest} className={`${styles.toast} bg-${bgColor} ${rest.className || ""}`}>
            <div className={styles.content}>
                <Icon size={30} />
                <span>
                    {message}
                </span>
            </div>
        </div>
    )
})

export function useToast() {
    const currentElement = React.useRef<HTMLDivElement | null>(null)

    const showToast = React.useCallback((props: Props) => {
        const { message, duration = 3000, bgColor } = props

        if (currentElement.current) {
            return
        }

        const portalContainer = document.createElement("div")
        currentElement.current = portalContainer
        document.body.appendChild(portalContainer)

        const root = createRoot(portalContainer)
        root.render(
            <Toast
                message={message}
                duration={duration}
                bgColor={bgColor}
            />
        )

        setTimeout(() => {
            root.unmount()
            document.body.removeChild(portalContainer)
            currentElement.current = null
        }, duration - 100)
    }, [])

    return {
        showToast
    }
}