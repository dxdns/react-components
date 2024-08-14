import Badge from "@/components/badge";
import { FaPerson } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { MdLocalMall } from "react-icons/md";

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
      const status = v.toLowerCase();
      const textColor =
        status === "declined"
          ? "error"
          : status === "pending"
          ? "warning"
          : "success";

      return (
        <Badge className={textColor} variant="outlined">
          {v}
        </Badge>
      );
    },
  },
  {
    name: "action",
    label: "",
    customBodyRender: () => <a href="">Details</a>,
  },
];

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
];

export const insights = [
  {
    icon: <FiShoppingCart size={30} color="var(--color-error)" />,
    label: "Total Sales",
    value: 25.024,
    percent: 81,
  },
  {
    icon: <MdLocalMall size={30} color="var(--color-success)" />,
    label: "Total Orders",
    value: 15.024,
    percent: 70,
  },
  {
    icon: <FaPerson size={30} color="var(--color-success)" />,
    label: "Total Customers",
    value: 10.024,
    percent: 19,
  },
];
