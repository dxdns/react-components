import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import styles from "./styles.module.css"

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
        <ul className={styles.pagination}>
            <li onClick={prePage}>
                <FaChevronLeft />
            </li>

            {numbers.map((n, i) => (
                <li
                    key={i}
                    className={`${n === currentPage ? styles.active : ""}`}
                    onClick={() => onPageChange(n)}
                >
                    {n}
                </li>
            ))}

            <li onClick={nextPage}>
                <FaChevronRight />
            </li>
        </ul>
    )
}