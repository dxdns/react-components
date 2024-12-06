import { Link, useNavigate } from "react-router-dom"
import Button from "@/components/button"
import Input from "@/components/input"
import styles from "./styles.module.css"

export default function ForgotPassword() {
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get("email"),
        })
        navigate("/auth/check-pin")
    }

    return (
        <form className={styles["forgot-password"]} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <h1>Forgot your password?</h1>
                <p>Please enter the email address associated with your
                    account and We will email you a link to reset your password.</p>
            </div>
            <div className={styles.content}>
                <Input
                    type="email"
                    name="email"
                    label="Email"
                    required
                />
                <Button type="submit">Send Request</Button>
                <Link to={"/auth"}>Return to sign in</Link>
            </div>
        </form>
    )
}