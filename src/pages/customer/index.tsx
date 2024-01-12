import React from "react"
import TablePagination from "../../components/table-pagination"
import DataTable from "../../components/data-table"
import Card from "../../components/card"
import Button from "../../components/button"
import Icon from "../../components/icon"
import { columns } from "./data"
import "./style.css"

export default function Customer() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const data = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `test${i + 1}`, age: i * 2 }))
    const lastIndex = currentPage * rowsPerPage
    const firstIndex = lastIndex - rowsPerPage
    const result = data.slice(firstIndex, lastIndex)

    return (
        <>
            <div className="header-customer">
                <h1>Page Customer</h1>
                <Button
                    right={<Icon name="add" />}
                >
                    New Customer
                </Button>
            </div>
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
        </>
    )
}