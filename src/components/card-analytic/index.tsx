import "./style.css"
import Card from "../card"

type Props = {
    icon: JSX.Element
    title: string
    percent: number
    value: number
}

export default function CardAnalytic({ icon, title, percent, value }: Props) {
    const percentColor = percent >= 50 ? "success" : "danger"
    const percentText = percent >= 50 ? `+${percent}%` : `-${percent}%`

    return (
        <Card>
            <div className="card-analytic">
                {icon}
                <div className="right">
                    <div className="info">
                        <h3>{title}</h3>
                        <small className="text-muted">Last 24 hours</small>
                    </div>
                    <h5 className={percentColor}>{percentText}</h5>
                    <h3>{value.toFixed(2).replace(".", ",")}</h3>
                </div>
            </div>
        </Card>
    )
}