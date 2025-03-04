import { Badge } from "@components"
import { MdLocalMall, MdPerson, MdShoppingCart } from "react-icons/md"

export const columns = [
    {
        name: "product_name",
        label: "Product Name",
    },
    {
        name: "product_number",
        label: "Product Number",
    },
    {
        name: "payment",
        label: "Payment",
    },
    {
        name: "status",
        label: "Status",
        customBodyRender: (v: string) => {
            const status = v.toLowerCase()
            const textColor =
                status === "declined"
                    ? "error"
                    : status === "pending"
                      ? "warning"
                      : "success"

            return (
                <Badge className={textColor} variant="outlined">
                    {v}
                </Badge>
            )
        },
    },
    {
        name: "action",
        label: "",
        customBodyRender: () => <a href="">Details</a>,
    },
]

export const rows = [
    {
        product_name: "Arroz",
        product_number: 12,
        payment: "Due",
        status: "Pending",
    },
    {
        product_name: "111",
        product_number: 1,
        payment: "Due",
        status: "Declined",
    },
    {
        product_name: "222",
        product_number: 3,
        payment: "Due",
        status: "Delivered",
    },
]

export const insights = [
    {
        icon: <MdShoppingCart size={30} />,
        label: "Total Sales",
        value: 25.024,
        percent: 81,
    },
    {
        icon: <MdLocalMall size={30} />,
        label: "Total Orders",
        value: 15.024,
        percent: 70,
    },
    {
        icon: <MdPerson size={30} />,
        label: "Total Customers",
        value: 10.024,
        percent: 19,
    },
]
