import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import IconButton from "../icon-button"
import Select from "../select"
import styles from "./styles.module.css"

type Props = {
    rowsPerPageOptions: (number | { label: string, value: number })[]
    count: number
    page: number
    rowsPerPage: number
    onPageChange: (page: number) => void
    onRowsPerPageChange: (value: string) => void
}

export default function TablePagination(props: Props) {
    const { rowsPerPageOptions, count, page, rowsPerPage, onPageChange, onRowsPerPageChange } = props
    const nPage = Math.ceil(count / rowsPerPage)
    const start = (page - 1) * rowsPerPage + 1
    const end = Math.min(start + rowsPerPage - 1, count)

    function prePage() {
        if (page > 1) {
            onPageChange(page - 1)
        }
    }

    function nextPage() {
        if (page < nPage) {
            onPageChange(page + 1)
        }
    }

    return (
        <div className={styles["table-pagination"]}>
            <div>
                <span className={styles["options-text"]}>Linhas por página</span>
                <Select onChange={(e) => onRowsPerPageChange(e.target.value)} defaultValue={rowsPerPage}>
                    {rowsPerPageOptions.map((item) => {
                        const value = typeof (item) == "number" ? item : item.label

                        return (
                            <option
                                key={value}
                                value={value}
                            >
                                {value}
                            </option>
                        )
                    })}
                </Select>
            </div>
            <span>{start}-{end} de {count}</span>
            <div>
                <IconButton
                    disabled={start === 1}
                    Icon={FaChevronLeft}
                    onClick={prePage}
                />
                <IconButton
                    disabled={end === count}
                    Icon={FaChevronRight}
                    onClick={nextPage}
                />
            </div>
        </div>
    )
}