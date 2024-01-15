import { Link } from "react-router-dom"
import Button from "../../components/button"
import Input from "../../components/input"
import "./style.css"

export default function SignUp() {
    return (
        <div className="sign-up">
            <div className="header">
                <h1>Get started absolutely free</h1>
                <p>Already have an account? <Link to={"/auth"}>Sign in</Link></p>
            </div>
            <div className="content">
                <div className="input-group">
                    <Input type="text" label="First name" required />
                    <Input type="text" label="Last name" required />
                </div>
                <Input type="email" label="Email address" required />
                <Input type="password" label="Password" required />
                <Button>Create account</Button>
                <p>By signing up, I agree to
                    <Link to="#"> Terms of Service </Link>
                    and <Link to="#">Privacy Policy.</Link>
                </p>
            </div>
        </div>
    )
}