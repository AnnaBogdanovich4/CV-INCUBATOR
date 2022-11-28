import style from "./AboutMe.module.css"
import containerStyle from "../common/styles/Container.module.css";
import allStyle from "../common/styles/AllStyle.module.css";

export const AboutMe = () => {
    return (
        <div className={`${style.aboutMe} ${allStyle}`}>
            <div className={`${containerStyle.container} ${style.container}`}>

                {/*If I want to have contact bottom my photo, I won't comment*/}

                {/*<div className={style.contact}>*/}
                {/*<div className={style.img}></div>*/}
                {/*<h3>Connect with me</h3>*/}
                {/*<ul>*/}
                {/*    <li><span className={style.icon1}>icon</span></li>*/}
                {/*    <li><span className={style.icon2}>icon</span></li>*/}
                {/*    <li><span className={style.icon3}>icon</span></li>*/}
                {/*    <li><span className={style.icon4}>icon</span></li>*/}
                {/*</ul>*/}
                {/*<button className="">download CV</button>*/}
                {/*</div>*/}
                <div className={style.myDescription}>
                    <div className={style.context}>
                        <h3>About me</h3>
                        <span>фриланс
                            Front-end
                            - Макет (разметка HTML4/HTML5 + CSS3):
                            - Вёрстка страниц интернет-магазинов, лендингов:
                            - Верстка PSD-макетов с использованием HTML, HTML5 для ПК, мобильных устройств;
                            - Кроссбраузерная верстка (IE11+);
                            - Работа с Adobe XD, Figma, Avocode - как с исходниками макетов;
                            Freelancer
                            Duties:

                            •Developing web App. (front-end side)
                            •Testing the quality of a web application

                            Skills:

                            • html5 / Jade
                            • css3 / SASS / Less
                            • JavaScript (ES6)
                            • LAMP ( Linux , Apache , MySQL , PHP )
                            • Git
                            • Gulp/ npm
                            • node.js (basics)
                            • Bootstrap
                        </span>
                    </div>
                    <div className={style.contact}>
                        <h3>Connect with me</h3>
                        <ul>
                            <li><span className={style.icon1}>icon</span></li>
                            <li><span className={style.icon2}>icon</span></li>
                            <li><span className={style.icon3}>icon</span></li>
                            <li><span className={style.icon4}>icon</span></li>
                        </ul>
                        <a className={style.link} href={"#"}>download CV</a>
                    </div>
                </div>
                <div className={style.img}></div>
            </div>
        </div>
    )
}