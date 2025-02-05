import styles from "./styles.module.css"
import { Input, DataTable, CardStatistic, Card } from "@components"
import { columns, insights, rows } from "./data"

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <h1>Dashboard</h1>
            <Input
                className={styles["input-group"]}
                type="date"
                onChange={(e) => console.log(e.target.value)}
            />

            <div className={styles.insights}>
                {insights.map((item, index) => (
                    <CardStatistic key={index} {...item} />
                ))}
            </div>

            <Card>
                <div className={styles["recent-orders"]}>
                    <h2>Recent Orders</h2>
                    <DataTable columns={columns} data={rows} />
                    <a href="">Show All</a>
                </div>
            </Card>
        </div>
    )
}
