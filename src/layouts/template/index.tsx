import "./style.css"
import { Link, NavLink, Outlet } from "react-router-dom"
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
import { getTheme, setTheme } from "../../utils/theme"

export default function Template() {
    const [open, setOpen] = React.useState(false)
    const [checked, setChecked] = React.useState(false)

    const menuRef = React.useRef<HTMLDivElement | null>(null)

    function openMenu() {
        setOpen(true)
    }

    function closeMenu() {
        setOpen(false)
    }

    function toggleTheme() {
        const isLight = getTheme() === "light"
        setChecked(isLight)

        if (isLight) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    React.useEffect(() => {
        toggleTheme()
    }, [])

    React.useEffect(() => {
        function handler(e: MouseEvent) {
            const menu = menuRef.current
            const a = menu?.getElementsByClassName("active").item(0)

            if (!menu?.contains(e.target as Node) || menu?.contains(a as Node)) {
                closeMenu()
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    return (
        <div className="template">
            <aside ref={menuRef} className={open ? "show" : "hide"}>
                <div className="top">
                    <Link to={""}>
                        <Logo />
                    </Link>
                    <div className="close" onClick={closeMenu}>
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
                        onClick={openMenu}
                    />
                    <Switch
                        checked={checked}
                        name={"theme"}
                        icon={checked ? "light_mode" : "dark_mode"}
                        onChange={toggleTheme}
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
                        left={<Icon name="add" />}
                    >
                        Add Product
                    </Button>
                </div>
            </div>
        </div>
    )
}