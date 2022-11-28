import containerStyle from "./../common/styles/Container.module.css"
import style from "./Contact.module.css"

export const Contact = () => {
    return (
        <div className={style.contacts}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3>Contact</h3>
                <form action="" method="post" className={style.form}>
                    <input type="email" className={'style.email'} name="email" placeholder="E-mail"/>
                    <input type="tel" name="phone" placeholder="Phone"/>
                    <textarea placeholder="Message" name="message"> Message </textarea>
                    <button>Send message</button>
                </form>
            </div>
        </div>
    )
}