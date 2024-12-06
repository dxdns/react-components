import { ColorType } from "@/types"
import styles from "./styles.module.css"

type Props = {
    value: number
    color?: ColorType
}

export default function ProgressBar({ value, color = "inherit" }: Props) {
    return (
        <div className={`${styles["progress-bar"]} ${styles[color]}`}>
            <div className={styles[color]} style={{ width: `${value}%` }}></div>
        </div>
    )
}