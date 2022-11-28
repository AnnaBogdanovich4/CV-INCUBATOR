import style from "./Main.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import allStyle from "./../common/styles/AllStyle.module.css"

export const Main = () => {
    return (
        <div className={`${style.main} ${allStyle}`}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <div className={style.img}></div>
                <div className={style.myName}>
                    <h3>Hi</h3>
                    <h2>I'm Anna Bogdanovich</h2>
                    <h4>FRONTEND DEVELOPER</h4>
                </div>
            </div>
        </div>
    )
}