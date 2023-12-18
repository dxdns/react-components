export const columns = [
    {
        name: "product_name",
        label: "Product Name"
    },
    {
        name: "product_number",
        label: "Product Number"
    },
    {
        name: "payment",
        label: "Payment"
    },
    {
        name: "status",
        label: "Status",
        customBodyRender: (v: string) => {
            const status = v.toLowerCase()
            const textColor = status === "declined"? "danger" : status === "pending"? "warning" : "success"
            return(
                <div className={textColor}>{v}</div>
            )
        }
    },
    {
        name: "action",
        label: "",
        customBodyRender: () => (
            <a href="">Details</a>
        )
    }
]

export const rows = [
    {
        product_name: "Arroz",
        product_number: 12,
        payment: "Due",
        status: "Pending"
    },
    {
        product_name: "111",
        product_number: 1,
        payment: "Due",
        status: "Declined"
    },
    {
        product_name: "222",
        product_number: 3,
        payment: "Due",
        status: "Delivered"
    }
]