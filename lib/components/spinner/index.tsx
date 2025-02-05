import { SizeType } from "../../types"
import styles from "./styles.module.css"

type Props = {
    size?: SizeType
}

export default function Spinner({ size = "sm" }: Props) {
    return <span className={`${styles.spinner} ${styles[size]}`}></span>
}
