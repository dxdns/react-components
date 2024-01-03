import "./style.css"
import profile1 from "../../assets/profile-1.jpg"
import Button from "../button/button"
import Icon from "../icon"
import CardAnalytic from "../card-analytic"
import Card from "../card"
import Message from "../message"
import Switch from "../switch"
import { messages, sales } from "./data"

export default function Right() {
    function toggleTheme() {
        document.body.classList.toggle("dark-theme-variables")
    }

    function openSidebar() {
        const sideMenu = document.querySelector("aside")
        if (sideMenu) {
            sideMenu.style.setProperty("display", "block", "important")
        }
    }

    return (
        <div className="right">
            <div className="top">
                <button id="menu-btn" onClick={openSidebar}>
                    <span className="material-icons-sharp">menu</span>
                </button>
                <Switch
                    onClick={toggleTheme}
                    left={<Icon name="light_mode" variant="text" />}
                    right={<Icon name="dark_mode" variant="text" />}
                />
                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Test</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                    <div className="profile-photo">
                        <img src={profile1} alt="" />
                    </div>
                </div>
            </div>

            <div className="recent-updates">
                <h2>Recent Updates</h2>
                <Card>
                    {messages.map((item, index) => (
                        <Message
                            key={index}
                            {...item}
                        />
                    ))}
                </Card>
            </div>

            <div className="sales-analytics">
                <h2>Sales Analytics</h2>
                {sales.map((item, index) => (
                    <CardAnalytic
                        key={index}
                        {...item}
                    />
                ))}

                <Button>
                    <div className="add-product">
                        <span className="material-icons-sharp">add</span>
                        <h3>Add Product</h3>
                    </div>
                </Button>
            </div>
        </div>
    )
}