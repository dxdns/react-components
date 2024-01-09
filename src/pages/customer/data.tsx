import React from "react"
import IconButton from "../../components/icon-button"
import Menu from "../../components/menu"
import Button from "../../components/button"
import Icon from "../../components/icon"

export const columns = [
    {
        label: "id",
        name: "id"
    },
    {
        label: "name",
        name: "name"
    },
    {
        label: "aaaaa",
        name: "opa",
        customBodyRender: () => {
            const [open, setOpen] = React.useState(false)

            function handleClick() {
                setOpen(old => !old)
            }

            function handleClose() {
                setOpen(false)
            }

            return (
                <div>
                    <IconButton
                        name="more_vert"
                        onClick={handleClick}
                    />
                    <Menu
                        open={open}
                        onClick={handleClose}
                        onClose={handleClose}
                    >
                        <Button
                            variant="text"
                            left={<Icon name="edit" />}
                        >
                            Editar
                        </Button>
                        <Button
                            variant="text"
                            left={<Icon name="print" />}
                        >
                            Imprimir
                        </Button>
                    </Menu>
                </div>
            )
        }
    },
]