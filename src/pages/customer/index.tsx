import React from "react"
import Pagination from "../../components/pagination"
import TablePagination from "../../components/table-pagination"
import DataTable from "../../components/data-table"
import Card from "../../components/card"
import Button from "../../components/button"
import Icon from "../../components/icon"
import { columns } from "./data"
import Accordion from "../../components/accordion"

export default function Customer() {
    const [currentPage, setCurrentPage] = React.useState(1)

    const data = Array.from({ length: 50 }, (_, i) => ({ id: i, name: `test${i}` }))

    const rowsPerPage = 10
    const lastIndex = currentPage * rowsPerPage
    const firstIndex = lastIndex - rowsPerPage
    const result = data.slice(firstIndex, lastIndex)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>Page Customer</h1>
                <Button
                    right={<Icon name="add" />}
                >
                    New Customer
                </Button>
            </div>
            <Accordion>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </Accordion>
            <Card>
                <DataTable
                    data={result}
                    columns={columns}
                />
                <TablePagination rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]} />
            </Card>
            <Pagination
                count={data.length}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onPageChange={(newPage) => setCurrentPage(newPage)}
            />
        </>
    )
}