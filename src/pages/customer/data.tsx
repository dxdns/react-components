import React from "react"
import IconButton from "../../components/icon-button"
import Menu from "../../components/menu"

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

            return (
                <div>
                    <IconButton
                        name="more_vert"
                        onClick={() => setOpen(old => !old)}
                    />
                    <Menu open={open}>
                        <ul>
                            <li><a href="#">I'm a dropdown.</a></li>
                            <li><a href="#">In Pure CSS</a></li>
                            <li><a href="#">As in...</a></li>
                            <li><a href="#">No JavaScript.</a></li>
                            <li><a href="#">At All.</a></li>
                        </ul>
                    </Menu>
                </div>
            )
        }
    },
]