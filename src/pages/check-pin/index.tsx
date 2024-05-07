import { Link, useNavigate } from "react-router-dom"
import Button from "@/components/button"
import PinInput from "@/components/pin-input"
import "./style.css"

export default function CheckPin() {
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const values = [...data.values()].map(v => v)
        console.log(values.toString().replaceAll(",", ""))
        navigate("/auth/new-password")
    }

    return (
        <form className="check-pin" onSubmit={handleSubmit}>
            <div className="header">
                <h1>Please check your email!</h1>
                <p>We have emailed a 6-digit confirmation code to acb@domain,
                    please enter the code in below box to verify your email.</p>
            </div>
            <div className="content">
                <div className="pin-input-wrapper">
                    {[...Array(4)].map((_, index) => (
                        <PinInput key={index} name={String(index)} />
                    ))}
                </div>
                <Button>Verify</Button>
                <p>Don’t have a code? <a href="#"><strong>Resend code</strong></a></p>
                <Link to={"/auth"}>Return to sign in</Link>
            </div>
        </form>
    )
}