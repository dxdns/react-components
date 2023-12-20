import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Customer from "./pages/customer"
import Template from "./layouts/template/template"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Template />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "customer",
                element: <Customer />
            },
            {
                path: "home",
                element: <Home />
            }
        ]
    },
])