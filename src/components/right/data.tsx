import Icon from "../icon"
import profile1 from "../../assets/profile-1.jpg"
import profile2 from "../../assets/profile-2.jpg"

export const sales = [
    {
        icon: <Icon name="shopping_cart" />,
        title: "Online Orders",
        percent: 39,
        value: 3849,
    },
    {
        icon: <Icon name="local_mall" bgColor="danger" />,
        title: "Offline Orders",
        percent: 17,
        value: 1100,
    },
    {
        icon: <Icon name="person" bgColor="success" />,
        title: "New Customers",
        percent: 25,
        value: 849,
    }
]

export const messages = [
    {
        image: profile1,
        yourname: "Mike Tyson",
        text: "received his order of Night lion tech GPS drone."
    },
    {
        image: profile2,
        yourname: "Mike Tyson",
        text: "received his order of Night lion tech GPS drone."
    }
]