import { FaShoppingCart } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdLocalMall } from "react-icons/md";

export const menuItems = [
  {
    label: "Dashboard",
    icon: "grid_view",
    path: "/",
  },
  {
    label: "Customers",
    icon: "person_outline",
    path: "customer",
  },
  {
    label: "Logout",
    icon: "logout",
    path: "auth",
  },
];

export const sales = [
  {
    icon: <FaShoppingCart size={30} color="var(--color-error)" />,
    title: "Online Orders",
    percent: 39,
    value: 3849,
  },
  {
    icon: <MdLocalMall size={30} color="var(--color-error)" />,
    title: "Offline Orders",
    percent: 17,
    value: 1100,
  },
  {
    icon: <FaPerson size={30} color="var(--color-success)" />,
    title: "New Customers",
    percent: 25,
    value: 849,
  },
];

export const messages = [
  {
    // image: profile1,
    yourname: "Mike Tyson",
    text: "received his order of Night lion tech GPS drone.",
  },
  {
    // image: profile2,
    yourname: "New Tyson",
    text: "received his order of Night lion tech GPS drone.",
  },
];
