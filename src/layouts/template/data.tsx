// import profile1 from "../../assets/profile-1.jpg"
// import profile2 from "../../assets/profile-2.jpg"
import {
    MdGridView,
    MdLocalMall,
    MdLogout,
    MdPerson,
    MdPersonOutline,
    MdShoppingCart,
} from "react-icons/md"

export const menuItems = [
    {
        label: "Dashboard",
        icon: <MdGridView size={20} />,
        path: "/",
    },
    {
        label: "Customers",
        icon: <MdPersonOutline size={20} />,
        path: "customer",
    },
    {
        label: "Logout",
        icon: <MdLogout size={20} />,
        path: "auth",
    },
]

export const sales = [
    {
        icon: <MdShoppingCart size={20} />,
        title: "Online Orders",
        percent: 39,
        value: 3849,
    },
    {
        icon: <MdLocalMall size={20} />,
        title: "Offline Orders",
        percent: 17,
        value: 1100,
    },
    {
        icon: <MdPerson size={20} />,
        title: "New Customers",
        percent: 25,
        value: 849,
    },
]

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
]
