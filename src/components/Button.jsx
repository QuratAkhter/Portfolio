import styles from "./Button.module.css"
import { MdDownloadForOffline } from "react-icons/md";

const Button = ({content}) => {
    return <button className={`btn fw-bold ${styles.btn} ${styles['button-85']}`} role="button"> {content}</button>
}

export default Button
