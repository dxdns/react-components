import Badge from "../../components/badge"
import Button from "../../components/button"
import Pagination from "../../components/pagination"

export default function Customer() {
    return (
        <>
            <h1>Page Customer</h1>
            <Button style={{ width: 100 }}>
                test
            </Button>
            <Badge variant="outlined">
                Opa
            </Badge>
            <Pagination count={10} />
        </>
    )
}