import Button from "../button"
import Icon from "../icon"
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
                <Button>
                    <Icon name="chevron_left" variant="text" />
                </Button>
                <Button>
                    <Icon name="chevron_right" variant="text" />
                </Button>
            </div>
        </div>
    )
}