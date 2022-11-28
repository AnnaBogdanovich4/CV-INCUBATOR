import containerStyle from "./../common/styles/Container.module.css"
import style from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h2>Anna Bogdanovich</h2>
                <div className={style.footerIcons}>
                    <span className={style.phone}></span>
                    <span className={style.email}></span>
                    <span className={style.telegram}></span>
                    <span className={style.linkedin}></span>
                    <span className={style.gitHub}></span>
                    <span className={style.portfolio}></span>
                </div>
                <span>@2022 Все права защищены</span>
            </div>
        </div>
    )
}