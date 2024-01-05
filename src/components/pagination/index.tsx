import Icon from "../icon"
import "./style.css"

type Props = {
    rowsPerPage: number
    count: number
    currentPage: number
    onPageChange: (newPage: number) => void
}

export default function Pagination({ rowsPerPage, count, currentPage, onPageChange }: Props) {
    const nPage = Math.ceil(count / rowsPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)

    function prePage() {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }

    function nextPage() {
        if (currentPage < nPage) {
            onPageChange(currentPage + 1)
        }
    }

    return (
        <ul className="pagination">
            <li onClick={prePage}>
                <Icon
                    name="chevron_left"
                    variant="text"
                />
            </li>

            {numbers.map((n, i) => (
                <li
                    key={i}
                    className={`${n === currentPage ? "active" : ""}`}
                    onClick={() => onPageChange(n)}
                >
                    {n}
                </li>
            ))}

            <li onClick={nextPage}>
                <Icon
                    name="chevron_right"
                    variant="text"
                />
            </li>
        </ul>
    )
}