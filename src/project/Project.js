import style from "./Project.module.css"
import allStyle from "../common/styles/AllStyle.module.css";

export const Project = (props) => {
    return (
        <div className={`${style.project} ${allStyle}`}>
            <div className={style.img}><a href={'#'} className={style.linkProject}>Open</a></div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    )
}