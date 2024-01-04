import Icon from "../icon"
import "./style.css"

type Props = {
    count: number
}

export default function Pagination({ count }: Props) {
    return (
        <ul className="pagination">
            <li>
                <Icon
                    name="chevron_left"
                    variant="text"
                />
            </li>

            {[...Array(count)].map((_, index) => (
                <div key={index}>
                    <li className={`${index + 1 === 4 ? "active" : ""}`}>
                        {index + 1}
                    </li>
                    {/* <li className="dots">...</li> */}
                </div>))}

            <li>
                <Icon
                    name="chevron_right"
                    variant="text"
                />
            </li>
        </ul>
    )
}