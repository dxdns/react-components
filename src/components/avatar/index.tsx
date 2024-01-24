import "./style.css"

type Props = {
    image: string
}

export default function Avatar({ image }: Props) {
    return (
        <div className="avatar">
            <img src={image} alt="" />
        </div>
    )
}