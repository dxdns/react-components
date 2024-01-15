import Button from "../../components/button"
import Input from "../../components/input"

export default function SignIn() {
    return (
        <>
            <h1>Sign In</h1>
            <Input type="email" label="Email" required />
            <Input type="password" label="Password" required />
            <Button>Sign In</Button>
            <Button variant="outlined">Sign Up</Button>
            <a href="#">Forgot password?</a>
        </>
    )
}