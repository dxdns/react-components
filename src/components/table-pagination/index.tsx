import IconButton from "../icon-button"
import Select from "../select"
import "./style.css"

type Props = {
    rowsPerPageOptions: (number | { label: string, value: number })[]
}

export default function TablePagination({ rowsPerPageOptions }: Props) {
    return (
        <div className="table-pagination">
            <div>
                <span className="options-text">Linhas por página</span>
                <Select onChange={(e) => console.log(e.target.value)}>
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
            <span>11-11 of 15</span>
            <div>
                <IconButton name="chevron_left" />
                <IconButton name="chevron_right" />
            </div>
        </div>
    )
}