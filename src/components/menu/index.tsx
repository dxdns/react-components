import React from "react"
import Card from "../card"
import "./style.css"

type Props = React.PropsWithChildren & {
    open: boolean
    onClick: () => void
    onClose: () => void
}

export default function Menu({ open, onClick, onClose, children }: Props) {
    const menuRef = React.useRef<HTMLDivElement>(null)

    const isOpen = open ? "show" : "hide"

    React.useEffect(() => {
        function handler(e: MouseEvent) {
            if (!menuRef.current?.contains(e.target as Node)) {
                onClose()
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    return (
        <div ref={menuRef} className={"menu"} onClick={onClick}>
            <Card className={`menu-content ${isOpen}`}>
                {children}
            </Card>
        </div>
    )
}