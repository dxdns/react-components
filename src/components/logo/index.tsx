import logo from "../../assets/react.svg"
import "./logo.css"

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="" />
            <h2>TE<span className="danger">ST</span></h2>
        </div>
    )
}