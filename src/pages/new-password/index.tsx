import { Link } from "react-router-dom"
import { Button, Input } from "@components"
import styles from "./styles.module.css"

export default function NewPassword() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            password_old: data.get("password_old"),
            password_new: data.get("password_new"),
        })
    }

    return (
        <form className={styles["new-password"]} onSubmit={handleSubmit}>
            <div className={styles.header}>
                <h1>Request sent successfully!</h1>
                <p>Please enter the new password.</p>
            </div>
            <div className={styles.content}>
                <Input
                    type="password"
                    name="password_old"
                    label="Password"
                    required
                />
                <Input
                    type="password"
                    name="password_new"
                    label="Confirm New Password"
                    required
                />
                <Button>Update Password</Button>
                <Link to={"/auth"}>Return to sign in</Link>
            </div>
        </form>
    )
}
