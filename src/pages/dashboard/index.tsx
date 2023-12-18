import Card from "../../components/card"
import { CardStatistic } from "../../components/card-statistic"
import DataTable from "../../components/data-table"
import DatePicker from "../../components/date-picker/date-picker"
import Icon from "../../components/icon"
import "./dashboard.css"
import { columns, rows } from "./data"

export default function Dashboard() {
    return (
        <main>
            <h1>Dashboard</h1>
            <DatePicker />

            <div className="insights">
                <CardStatistic
                    icon={<Icon name="local_mall" />}
                    label="Total Sales"
                    value={25.024}
                    percent={81}
                />

                <CardStatistic
                    icon={<Icon name="local_mall" color="danger" />}
                    label="Total Orders"
                    value={15.024}
                    percent={70}
                />

                <CardStatistic
                    icon={<Icon name="person" color="success" />}
                    label="Total Customers"
                    value={10.024}
                    percent={50}
                />
            </div>

            <Card>
                <div className="recent-orders">
                    <h2>Recent Orders</h2>
                    <DataTable
                        columns={columns}
                        data={rows}
                    />
                    <a href="">Show All</a>
                </div>
            </Card>
        </main>
    )
}