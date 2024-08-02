import React from "react"
import TablePagination from "@/components/table-pagination"
import DataTable from "@/components/data-table"
import Card from "@/components/card"
import Button from "@/components/button"
import Icon from "@/components/icon"
import { columns } from "./data"
import Input from "@/components/input"
import Select from "@/components/select"
import style from "./style.module.css"

export default function Customer() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const data = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `test${i + 1}`, age: i * 2 }))
    const lastIndex = currentPage * rowsPerPage
    const firstIndex = lastIndex - rowsPerPage
    const result = data.slice(firstIndex, lastIndex)

    return (
        <div className={style.customer}>
            <div className={style.header}>
                <h1>Page Customer</h1>
                <Button
                    left={<Icon name="add" />}
                >
                    New Customer
                </Button>
            </div>
            <Card>
                <div className={style.header}>
                    <Input
                        type="search"
                        name="fragment"
                        placeholder="Search..."
                        variant="contained"
                    />
                    <Select
                        className={style.select}
                        onChange={(e) => console.log(e.target.value)}
                        defaultValue={rowsPerPage}
                    >
                        {[...Array(4)].map((_, i) => {
                            return (
                                <option
                                    key={i}
                                    value={i}
                                >
                                    {i}
                                </option>
                            )
                        })}
                    </Select>
                </div>
            </Card>
            <Card>
                <DataTable
                    data={result}
                    columns={columns}
                    renderExpandableRow={(row) => (
                        <div>
                            <p>Additional Info:</p>
                            <p>Custom content for {row.name}</p>
                        </div>
                    )}
                />
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                    count={data.length}
                    page={currentPage}
                    rowsPerPage={rowsPerPage}
                    onPageChange={(page) => setCurrentPage(page)}
                    onRowsPerPageChange={(value) => setRowsPerPage(value === "All" ? data.length : +value)}
                />
            </Card>
        </div>
    )
}