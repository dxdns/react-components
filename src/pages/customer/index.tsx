import React from "react"
import Badge from "../../components/badge"
import Button from "../../components/button"
import Pagination from "../../components/pagination"

export default function Customer() {
    const [currentPage, setCurrentPage] = React.useState(1)

    const data = Array.from({ length: 50 }, (_, i) => ({ id: i, name: `test${i}` }))

    const rowsPerPage = 10
    const lastIndex = currentPage * rowsPerPage
    const firstIndex = lastIndex - rowsPerPage
    const result = data.slice(firstIndex, lastIndex)

    return (
        <>
            <h1>Page Customer</h1>
            <Button style={{ width: 100 }}>
                test
            </Button>
            <Badge variant="outlined">
                Opa
            </Badge>
            <div style={{ padding: "5rem" }}>
                {result.map((item) => (
                    <strong key={item.id}>{item.name}</strong>
                ))}
            </div>
            <Pagination
                count={data.length}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onPageChange={(newPage) => setCurrentPage(newPage)}
            />
        </>
    )
}