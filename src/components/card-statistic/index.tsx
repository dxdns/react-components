import Card from "../card"
import Progress from "../progress"

type Props = {
    icon: JSX.Element
    label: string
    value: number
    percent: number
}

export function CardStatistic({ icon, label, value, percent }: Props) {
    return (
        <Card>
            {icon}
            <div className="middle">
                <div className="left">
                    <h3>{label}</h3>
                    <h1>${value.toFixed(2).replace(".", ",")}</h1>
                </div>
                <Progress percent={percent} />
            </div>
            <small className="text-muted">
                Last 24 Hours
            </small>
        </Card>
    )
}