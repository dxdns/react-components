import { Link } from "react-router-dom"
import Button from "@/components/button"
import Input from "@/components/input"
import style from "./style.module.css"

export default function SignIn() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        })
    }

    return (
        <form className={style["sign-in"]} onSubmit={handleSubmit}>
            <div className={style.header}>
                <h1>Sign In</h1>
                <p>New user?
                    <Link to={"sign-up"}>
                        <strong> Create an account</strong>
                    </Link>
                </p>
            </div>
            <div className={style.content}>
                <Input
                    type="email"
                    name="email"
                    label="Email"
                    required
                />
                <Input
                    type="password"
                    name="password"
                    label="Password"
                    required
                />
                <Link to={"forgot-password"}>Forgot password?</Link>
                <Button type="submit">Sign In</Button>
            </div>
        </form>
    )
}