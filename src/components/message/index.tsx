import "./style.css"
import Avatar from "../avatar"

type Props = {
    image: string
    yourname: string
    text: string
}

export default function Message({ image, yourname, text }: Props) {
    return (
        <div className="update">
            <Avatar image={image} />
            <div className="message">
                <p><b>{yourname}</b> {text}</p>
                <small className="text-muted">2 Minutes Ago</small>
            </div>
        </div>
    )
}