import { createBrowserRouter } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Home from "./pages/home"
import Customer from "./pages/customer"
import Template from "./layouts/template/template"
import AuthLayout from "./layouts/auth"
import SignIn from "./pages/sign-in"
import SignUp from "./pages/sign-up"
import ForgotPassword from "./pages/forgot-password"
import CheckPin from "./pages/check-pin"
import NewPassword from "./pages/new-password"

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
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <SignIn />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "check-pin",
                element: <CheckPin />
            },
            {
                path: "new-password",
                element: <NewPassword />
            }
        ]
    },
    {
        path: "*",
        element: <>Not Found</>
    }
])