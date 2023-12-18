import "./data-table.css"

type Props = {
    columns?: {
        name: string
        label: string
        customBodyRender?: (value: any) => JSX.Element
    }[]
    data: Record<string, any>[]
}

export default function DataTable({ columns, data }: Props) {
    const columnsNames = columns || (data.length > 0 ? Object.keys(data[0]).map((name) => ({ name, label: name })) : [])

    const customBodyRender = (value: any, index: number) => {
        const column = columns ? columns[index] : null
        return column?.customBodyRender ? column.customBodyRender(value) : value
    }

    return (
        <table>
            <thead>
                <tr>
                    {columnsNames.map((item) => (
                        <th key={item.name}>{item.label}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columnsNames.map((col, index) => (
                            <td key={col.name}>
                                {customBodyRender(row[col.name], index)}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}