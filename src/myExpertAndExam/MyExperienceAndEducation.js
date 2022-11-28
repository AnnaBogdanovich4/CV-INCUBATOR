import style from "./MyExperienceAndEducation.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import allStyle from "./../common/styles/AllStyle.module.css"
import {Work} from "../work/Work";
import {Education} from "../educations/Education";

export const MyExperienceAndEducation = () => {
    return (
        <div className={`${style.myExperienceAndEducation} ${allStyle}`}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <div className={style.educationExperience}>
                    <h3>Education history</h3>
                    <div className={style.educations}>
                        <Education who={'Who you will be?'} where={'Where?'} when={'2005-2009'} property={'My new skills'}/>
                        <Education who={'Who you will be?'} where={'Where?'} when={'2021-2022'} property={'My new skills'}/>
                    </div>
                </div>
                <div className={style.workExperience}>
                    <h3>Work experience</h3>
                    <div className={style.works}>
                        <Work who={'Who'} place={'place'} where={'where'} when={'2000-2010'} property1={'I'} property2={'Am'} property3={"Good girl"}/>
                        <Work />
                        <Work />
                        <Work />
                    </div>
                </div>
            </div>
        </div>
    )
}