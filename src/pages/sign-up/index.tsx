import { Link } from "react-router-dom"
import { Button, Input } from "@components"
import styles from "./styles.module.css"

export default function SignUp() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            first_name: data.get("first_name"),
            last_name: data.get("last_name"),
            email: data.get("email"),
            password: data.get("password"),
        })
    }

    return (
        <form className={styles["sign-up"]} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <h1>Get started absolutely free</h1>
                <p>
                    Already have an account?
                    <Link to={"/auth"}>
                        <strong> Sign in</strong>
                    </Link>
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles["input-group"]}>
                    <Input
                        type="text"
                        name="first_name"
                        label="First name"
                        required
                    />
                    <Input
                        type="text"
                        name="last_name"
                        label="Last name"
                        required
                    />
                </div>
                <Input
                    type="email"
                    name="email"
                    label="Email address"
                    required
                />
                <Input
                    type="password"
                    name="password"
                    label="Password"
                    required
                />
                <Button type="submit">Create account</Button>
                <p>
                    By signing up, I agree to{" "}
                    <Link to="#">Terms of Service </Link>
                    and <Link to="#">Privacy Policy.</Link>
                </p>
            </div>
        </form>
    )
}
