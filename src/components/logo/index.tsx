import logo from "../../assets/react.svg"
import style from "./style.module.css"

export default function Logo() {
    return (
        <div className={style.logo}>
            <img src={logo} alt="" />
            <h2>TE<span className="error">ST</span></h2>
        </div>
    )
}