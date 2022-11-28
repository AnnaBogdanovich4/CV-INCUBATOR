import style from "./Work.module.css";
import allStyle from "../common/styles/AllStyle.module.css";

export const Work = (props) => {
    return(
        <div className={`${style.work} ${allStyle}`}>
            <h5>{props.who} (<span className={style.place}>{props.where}</span>)</h5>
            <span className={style.date}>{props.when}</span>
            <ul>
                <li>{props.property1}</li>
                <li>{props.property2}</li>
                <li>{props.property3}</li>
            </ul>
        </div>
    )
}