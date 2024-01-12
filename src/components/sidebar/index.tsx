import Logo from "../logo"
import { data } from "./data"
import "./style.css"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
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
                <div className="close" onClick={closeSidebar}>
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
                {data.map((item) => (
                    <NavLink
                        key={item.label}
                        className={({ isActive }) => isActive ? "active" : ""}
                        to={item.path}
                    >
                        <span className="material-icons-sharp">{item.icon}</span>
                        <h3>{item.label}</h3>
                    </NavLink>
                ))}

            </div>
        </aside>
    )
}