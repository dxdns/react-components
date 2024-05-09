import "./style.css"
import Card from "@/components/card"
import { CardStatistic } from "@/components/card-statistic"
import DataTable from "@/components/data-table"
import { columns, insights, rows } from "./data"
import Input from "@/components/input"

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Input
                className="input-group"
                type="date"
                onChange={(e) => console.log(e.target.value)}
            />

            <div className="insights">
                {insights.map((item, index) => (
                    <CardStatistic
                        key={index}
                        {...item}
                    />
                ))}
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
        </div>
    )
}