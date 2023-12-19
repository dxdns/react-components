import "./App.css"
import Sidebar from "./components/sidebar"
import Right from "./components/right"
import TemplateLayout from "./layouts/template/template"
import Dashboard from "./pages/dashboard"

export default function App() {
  return (
    <>
      <TemplateLayout>
        <Sidebar />
        <Dashboard />
        <Right />
      </TemplateLayout>
    </>
  )
}