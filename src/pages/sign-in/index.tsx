import Button from "../../components/button"
import Input from "../../components/input"

export default function SignIn() {
    return (
        <>
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
            <Button>Sign In</Button>
            <a href="#">Forgot password?</a>
        </>
    )
}