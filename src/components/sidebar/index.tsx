import React from "react"
import Logo from "../logo"
import { data } from "./data"
import "./style.css"

export default function Sidebar() {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    function closeSidebar() {
        const sideMenu = document.querySelector("aside")
        if (sideMenu) {
            sideMenu.style.display = "none"
        }
    }

    return (
        <aside>
            <div className="top">
                <Logo />
                <div className="close" id="close-btn" onClick={closeSidebar}>
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
                {data.map((item, idx) => (
                    <a
                        key={item.label}
                        href="#"
                        className={`${currentIndex === idx ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                    >
                        <span className="material-icons-sharp">{item.icon}</span>
                        <h3>{item.label}</h3>
                    </a>
                ))}
            </div>
        </aside>
    )
}