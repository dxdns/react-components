import React from "react"
import Pagination from "../../components/pagination"
import TablePagination from "../../components/table-pagination"
import DataTable from "../../components/data-table"
import Card from "../../components/card"
import Button from "../../components/button"
import Icon from "../../components/icon"
import Menu from "../../components/menu"
import { columns } from "./data"

export default function Customer() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const [open, setOpen] = React.useState(false)

    const data = Array.from({ length: 50 }, (_, i) => ({ id: i, name: `test${i}` }))

    const rowsPerPage = 10
    const lastIndex = currentPage * rowsPerPage
    const firstIndex = lastIndex - rowsPerPage
    const result = data.slice(firstIndex, lastIndex)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1>Page Customer</h1>
                <div>
                    <Button
                        right={<Icon name="add" />}
                        onClick={() => setOpen(old => !old)}
                    >
                        New Customer
                    </Button>
                    <Menu open={open}>
                        <ul>
                            <li><a href="#">I'm a dropdown.</a></li>
                            <li><a href="#">In Pure CSS</a></li>
                            <li><a href="#">As in...</a></li>
                            <li><a href="#">No JavaScript.</a></li>
                            <li><a href="#">At All.</a></li>
                        </ul>
                    </Menu>
                </div>
            </div>
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