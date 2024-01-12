import { Outlet } from "react-router-dom"
import Button from "../../components/button"
import "./style.css"

export default function AuthLayout() {
    return (
        <div className="auth-layout">
            <div className="auth-left">
                <h1>Welcome</h1>
                <h2>Enter your personal details and start journey with us</h2>
                <Button variant="outlined">Sign Up</Button>
            </div>
            <div className="auth-right">
                <form>
                    <Outlet />
                </form>
            </div>
        </div>
    )
}