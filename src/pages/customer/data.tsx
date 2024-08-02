import React from "react"
import IconButton from "@/components/icon-button"
import Menu from "@/components/menu"
import Button from "@/components/button"
import Icon from "@/components/icon"
import MenuItem from "@/components/menu-item"
import ProgressBar from "@/components/progress-bar"

export const columns = [
    {
        label: "Id",
        name: "id",
    },
    {
        label: "Name",
        name: "name"
    },
    {
        label: "Age",
        name: "age",
        customBodyRender: (v: number) => {
            const color = v >= 50 ? "success" : v <= 10 ? "error" : "warning"

            return (
                <React.Fragment>
                    <ProgressBar value={v} color={color} />
                    {v}
                </React.Fragment>
            )
        }
    },
    {
        label: "action",
        name: "Action",
        customBodyRender: () => {
            const [open, setOpen] = React.useState(false)

            function handleClick() {
                setOpen(old => !old)
            }

            function handleClose() {
                setOpen(false)
            }

            return (
                <div style={{ display: "-webkit-inline-box" }}>
                    <IconButton
                        name="more_vert"
                        onClick={handleClick}
                    />
                    <Menu
                        open={open}
                        onClick={handleClose}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => null}>
                            <Button
                                variant="text"
                                left={<Icon name="edit" />}
                            >
                                Editar
                            </Button>
                        </MenuItem>
                        <MenuItem onClick={() => null}>
                            <Button
                                variant="text"
                                left={<Icon name="print" />}
                            >
                                Imprimir
                            </Button>
                        </MenuItem>
                    </Menu>
                </div>
            )
        }
    },
]