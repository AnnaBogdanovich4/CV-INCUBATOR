import style from "./MyProjects.module.css"
import containerStyle from "../common/styles/Container.module.css";
import allStyle from "../common/styles/AllStyle.module.css";
import {Project} from "../project/Project";

export const MyProjects = () => {
    return (
        <div className={`${style.myProjects} ${allStyle}`}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h1>My projects</h1>
                <div className={style.projects}>
                    <Project title={'Name of project 1'}
                             description={'Description your project bbbbbbbbbb bbbbbbbbbbbbbbb jjjjjjjjjjjjjjjj j jjjjj ses'}/>
                    <Project title={'Name of project 2'}
                             description={'Description your project bbbbbbbbbbb jjjjjjjjjjjjjjjj j jjjjj ses'}/>
                    <Project title={'Name of project 3'}
                             description={'Description your project bbb b b  dsAsssssssssss saddddddddd bbbbbb jjjjjjjjjjjjjjjj j jjjjj ses'}/>
                </div>
            </div>
        </div>
    )
}