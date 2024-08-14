import React from "react";
import IconButton from "@/components/icon-button";
import Menu from "@/components/menu";
import Button from "@/components/button";
import MenuItem from "@/components/menu-item";
import ProgressBar from "@/components/progress-bar";
import { MdMoreVert } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";

export const columns = [
  {
    label: "Id",
    name: "id",
  },
  {
    label: "Name",
    name: "name",
  },
  {
    label: "Age",
    name: "age",
    customBodyRender: (v: number) => {
      const color = v >= 50 ? "success" : v <= 10 ? "error" : "warning";

      return (
        <React.Fragment>
          <ProgressBar value={v} color={color} />
          {v}
        </React.Fragment>
      );
    },
  },
  {
    label: "action",
    name: "Action",
    customBodyRender: () => {
      const [open, setOpen] = React.useState(false);

      function handleClick() {
        setOpen((old) => !old);
      }

      function handleClose() {
        setOpen(false);
      }

      return (
        <div style={{ display: "-webkit-inline-box" }}>
          <IconButton Icon={MdMoreVert} onClick={handleClick} />
          <Menu open={open} onClick={handleClose} onClose={handleClose}>
            <MenuItem onClick={() => null}>
              <Button variant="text" left={<FaEdit />}>
                Editar
              </Button>
            </MenuItem>
            <MenuItem onClick={() => null}>
              <Button variant="text" left={<FaPrint />}>
                Imprimir
              </Button>
            </MenuItem>
          </Menu>
        </div>
      );
    },
  },
];
