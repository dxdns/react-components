import "./style.css"
import { Outlet } from "react-router-dom"
import Sidebar from "../../components/sidebar"
import Right from "../../components/right"

export default function Template() {
    return (
        <div className="template">
            <Sidebar />
            <Outlet />
            <Right />
        </div>
    )
}