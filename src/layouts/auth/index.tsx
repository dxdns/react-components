import Button from "../../components/button"
import Input from "../../components/input"
import "./style.css"

export default function AuthLayout() {
    return (
        <div className="auth-layout">
            <div className="left">
                <h1>Welcome</h1>
                <h2>Enter your personal details and start journey with us</h2>
                <Button variant="outlined">Sign Up</Button>
            </div>
            <div className="right">
                <form>
                    <Input type="email" label="Email" />
                    <Input type="password" label="Password" />
                    <Button>Sign In</Button>
                    <a href="#">Forgot password?</a>
                </form>
            </div>
        </div>
    )
}