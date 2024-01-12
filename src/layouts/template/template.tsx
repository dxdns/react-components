import "./style.css"
import { NavLink, Outlet } from "react-router-dom"
import IconButton from "../../components/icon-button"
import Switch from "../../components/switch"
import Icon from "../../components/icon"
import profile1 from "../../assets/profile-1.jpg"
import Card from "../../components/card"
import Message from "../../components/message"
import CardAnalytic from "../../components/card-analytic"
import Button from "../../components/button"
import { menuItems, messages, sales } from "./data"
import Logo from "../../components/logo"
import React from "react"

export default function Template() {
    const [showMenu, setshowMenu] = React.useState(false)

    function handleSidebar() {
        setshowMenu(prev => !prev)
    }

    function toggleTheme() {
        document.body.classList.toggle("dark-theme-variables")
    }

    return (
        <div className="template">
            <aside className={showMenu ? "show" : "hide"}>
                <div className="top">
                    <Logo />
                    <div className="close" onClick={handleSidebar}>
                        <span className="material-icons-sharp">close</span>
                    </div>
                </div>

                <div className="sidebar">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            className={({ isActive }) => isActive ? "active" : ""}
                            to={item.path}
                        >
                            <span className="material-icons-sharp">{item.icon}</span>
                            <h3>{item.label}</h3>
                        </NavLink>
                    ))}

                </div>
            </aside>

            <main>
                <Outlet />
            </main>

            <div className="right">
                <div className="top">
                    <IconButton
                        id="menu-btn"
                        name="menu"
                        onClick={handleSidebar}
                    />
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

                    <Button
                        right={<Icon name="add" />}
                    >
                        Add Product
                    </Button>
                </div>
            </div>
        </div>
    )
}