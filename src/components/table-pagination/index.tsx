import IconButton from "../icon-button"
import Select from "../select"
import "./style.css"

export default function TablePagination() {
    return (
        <div className="table-pagination">
            <div>
                <span className="options-text">Linhas por página</span>
                <Select>
                    <option value={"10"}>10</option>
                    <option value={"50"}>50</option>
                    <option value={"100"}>100</option>
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