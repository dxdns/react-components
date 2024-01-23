import "./style.css"
import { VariantType } from "../../types"
import React from "react"

type Props = React.PropsWithChildren & {
    label: string | JSX.Element
    open: boolean
    variant?: VariantType
}

export default function Accordion({ label, open, variant = "contained", children }: Props) {
    const contentRef = React.useRef<HTMLDivElement | null>(null)

    function handleOpen() {
        const content = contentRef.current
        if (content?.style.maxHeight) {
            content.style.maxHeight = ""
        } else {
            content!.style.maxHeight = `${content?.scrollHeight}px`
        }
    }

    React.useEffect(() => {
        handleOpen()
    }, [open])

    return (
        <div className="accordion">
            <button className={`${open ? "active" : ""} ${variant}`}>
                {label}
            </button>
            <div ref={contentRef} className="content">
                {children}
            </div>
        </div>
    )
}