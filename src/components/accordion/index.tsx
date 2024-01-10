import React from "react"
import "./style.css"

type Props = React.PropsWithChildren & {}

export default function Accordion({ children }: Props) {
    const [open, setOpen] = React.useState(false)
    const contentRef = React.useRef<HTMLDivElement | null>(null)

    const isOpen = open ? "active" : ""

    function handleClick() {
        setOpen(old => !old)
        const content = contentRef.current
        if (content?.style.maxHeight) {
            content.style.maxHeight = ""
        } else {
            content!.style.maxHeight = `${content?.scrollHeight}px`
        }
    }

    return (
        <>
            <button onClick={handleClick} className={`accordion ${isOpen}`}>Section 1</button>
            <div ref={contentRef} className="accordion-content">
                {children}
            </div>
        </>
    )
}