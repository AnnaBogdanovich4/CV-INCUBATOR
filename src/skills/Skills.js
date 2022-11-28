import style from "./Skills.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import allStyle from "./../common/styles/AllStyle.module.css"
import {Skill} from "../skill/Skill";

export const Skills = () => {
    return (
        <div className={`${style.skills} ${allStyle}`}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3>Skills</h3>
                <div className={style.skillsContainer}>
                    <Skill title={'HTML'}
                           description={'Descri  pshionbbb bbsdfddsfs  sasa d sdsasad s s dsbbbbbbbbbb bbbbb bbbbbbbbb bbbbbb bbbbbbbbbb vbnvgfgn'}/>
                    <Skill title={'CSS'}
                           description={'Descri  pshi   onbbb bbbb  cd      xzfgb   xhxvc fcxdbbbbbbbb bbbbb bbbbbbbbb bbbbbb bbbbbbbbbb vbnvgfgn'}/>
                    <Skill title={'JS'}
                           description={'Descri  pshionbbb bbbbbbb cvbgxhn bbbbb bbbbb bbbbbbbbb bbbbbb bbbbbbbbbb vbnvgfgn'}/>
                    <Skill title={'React'} description={'Descri  pshionbbb bbbbbbbbb bbbbbb bbbbbbbbbb vbnvgfgn'}/>
                    <Skill title={'GitHub'}
                           description={'Descri  pshionbbb bbbbbbbbbbbb bbbbb bbbbbbbbb bbbbbb bbbbbbbbbb vbnvgfgn'}/>
                </div>
            </div>
        </div>
    )
}