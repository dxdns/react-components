import React from "react"
import styles from "./styles.module.css"

type Props = {
    columns?: {
        name: string
        label: string
        customBodyRender?: (value: any) => JSX.Element
    }[]
    data: Record<string, any>[]
    renderExpandableRow?: (row: Record<string, any>) => JSX.Element
}

export default function DataTable({
    columns,
    data,
    renderExpandableRow,
}: Props) {
    const [currentIndex, setCurrentIndex] = React.useState(-1)

    const columnsData =
        data.length > 0
            ? Object.keys(data[0]).map((name) => ({ name, label: name }))
            : []
    const columnsNames = columns || columnsData
    const colSpan = Boolean(renderExpandableRow)
        ? columnsNames.length + 1
        : columnsNames.length

    const customBodyRender = (value: any, index: number) => {
        const column = columns ? columns[index] : null
        return column?.customBodyRender ? column.customBodyRender(value) : value
    }

    function handleClick(index: number) {
        setCurrentIndex((prev) => (prev === index ? -1 : index))
    }

    function isActive(index: number) {
        return currentIndex === index ? styles.active : ""
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {renderExpandableRow && <th style={{ width: "5px" }}></th>}
                    {columnsNames.map((item) => (
                        <th key={item.name}>{item.label}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            {renderExpandableRow && (
                                <td>
                                    <button
                                        className={`${styles["expand-btn"]} ${isActive(index)}`}
                                        onClick={() => handleClick(index)}
                                    />
                                </td>
                            )}

                            {columnsNames.map((col, index) => (
                                <td key={col.name}>
                                    {customBodyRender(row[col.name], index)}
                                </td>
                            ))}
                        </tr>
                        {renderExpandableRow && (
                            <tr
                                className={`${styles.colappse} ${isActive(index)}`}
                            >
                                <td colSpan={colSpan}>
                                    <div className={styles.content}>
                                        {renderExpandableRow(row)}
                                    </div>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    )
}
