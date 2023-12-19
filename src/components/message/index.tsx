import "./style.css"

type Props = {
    image?: string
    yourname: string
    text: string
}

export default function Message({ image, yourname, text }: Props) {
    return (
        <div className="update">
            <div className="profile-photo">
                <img src={image} alt="" />
            </div>
            <div className="message">
                <p><b>{yourname}</b> {text}</p>
                <small className="text-muted">2 Minutes Ago</small>
            </div>
        </div>
    )
}