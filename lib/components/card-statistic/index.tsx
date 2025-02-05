import Card from "../card"
import ProgressCircle from "../progress-circle"
import styles from "./styles.module.css"

type Props = {
    icon: JSX.Element
    label: string
    value: number
    percent: number
}

export default function({ icon, label, value, percent }: Props) {
    return (
        <Card>
            {icon}
            <div className={styles.middle}>
                <div className={styles.left}>
                    <h3>{label}</h3>
                    <h1>${value.toFixed(2).replace(".", ",")}</h1>
                </div>
                <ProgressCircle percent={percent} />
            </div>
            <small className="text-muted">
                Last 24 Hours
            </small>
        </Card>
    )
}