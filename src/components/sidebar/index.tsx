import Logo from "../logo"
import { data } from "./data"
import "./style.css"
import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
    const location = useLocation()

    function linkActive(path: string) {
        return location.pathname.split("/")[1] === path.replace("/", "")
    }

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
                {data.map((item) => (
                    <Link
                        key={item.label}
                        className={`${linkActive(item.path) ? "active" : ""}`}
                        to={item.path}
                    >
                        <span className="material-icons-sharp">{item.icon}</span>
                        <h3>{item.label}</h3>
                    </Link>
                ))}

            </div>
        </aside>
    )
}