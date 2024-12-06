import styles from "./styles.module.css"
import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import IconButton from "@/components/icon-button"
import Switch from "@/components/switch"
import profile1 from "../../assets/profile-1.jpg"
import Card from "@/components/card"
import Message from "@/components/message"
import CardAnalytic from "@/components/card-analytic"
import Button from "@/components/button"
import { menuItems, messages, sales } from "./data"
import Logo from "@/components/logo"
import { getTheme, setTheme } from "../../utils/theme"
import Avatar from "@/components/avatar"
import { MdAdd, MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md"

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
        <div className={styles.template}>
            <aside ref={menuRef} className={open ? styles.show : styles.hide}>
                <div className={styles.top}>
                    <Link to={""}>
                        <Logo className={styles.logo} />
                    </Link>
                    <div className={styles.close} onClick={closeMenu}>
                        <MdClose size={20} />
                    </div>
                </div>

                <div className={styles.sidebar}>
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            className={({ isActive }) => isActive ? styles.active : ""}
                            to={item.path}
                        >
                            <span>{item.icon}</span>
                            <h3>{item.label}</h3>
                        </NavLink>
                    ))}
                </div>
            </aside>

            <main>
                <Outlet />
            </main>

            <div className={styles.right}>
                <div className={styles.top}>
                    <IconButton
                        id={styles["menu-btn"]}
                        Icon={MdMenu}
                        onClick={openMenu}
                        options={{ size: 30 }}
                    />
                    <Switch
                        checked={checked}
                        name={"theme"}
                        Icon={checked ? MdLightMode : MdDarkMode}
                        onChange={toggleTheme}
                    />
                    <div className={styles.profile}>
                        <div className={styles.info}>
                            <p>Hey, <b>Test</b></p>
                            <small className="text-muted">Admin</small>
                        </div>
                        <Avatar src={profile1} />
                    </div>
                </div>

                <div className={styles["recent-updates"]}>
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

                <div className={styles["sales-analytics"]}>
                    <h2>Sales Analytics</h2>
                    {sales.map((item, index) => (
                        <CardAnalytic
                            key={index}
                            {...item}
                        />
                    ))}

                    <Button left={<MdAdd />}>
                        Add Product
                    </Button>
                </div>
            </div>
        </div>
    )
}