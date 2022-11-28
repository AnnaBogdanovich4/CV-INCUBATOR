import style from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={style.nav}>
            <ul className={style.ul}>
                <li><a href="#">Main</a></li>
                <li><a href="#">About me</a></li>
                <li><a href="#">Scills</a></li>
                <li><a href="#">My projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
    )
}