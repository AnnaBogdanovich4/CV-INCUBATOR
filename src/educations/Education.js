import style from "./Education.module.css";
import allStyle from "../common/styles/AllStyle.module.css";

export const Education = (props) => {
    return (
        <div className={`${style.education} ${allStyle}`}>
            <h5>{props.who} (<span className={style.place}>{props.where}</span>)</h5>
            <span>{props.property}</span>
        </div>
    )
}