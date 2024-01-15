import { Link } from "react-router-dom"
import Button from "../../components/button"
import Input from "../../components/input"
import "./style.css"
import PinInput from "../../components/pin-input"

export default function SignIn() {
    return (
        <div className="sign-in">
            <div className="header">
                <h1>Sign In</h1>
                <p>New user?
                    <Link to={"sign-up"}>
                        <strong> Create an account</strong>
                    </Link>
                </p>
            </div>
            <div className="content">
                <Input type="email" label="Email" required />
                <Input type="password" label="Password" required />
                <PinInput />
                <Link to={"forgot-password"}>Forgot password?</Link>
                <Button type="submit">Sign In</Button>
            </div>
        </div>
    )
}