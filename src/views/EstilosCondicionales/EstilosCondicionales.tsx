import { useState } from "react"
import styles from "./EstilosCondicionales.module.scss"

const EstilosCondicionales = () => {
    const [toggle, setToggle] = useState(false)

    const changeToggle = () => setToggle((prev) => !prev)

    const getColor = () => toggle ? "green" : "red"

    return (
        <div className={styles.EstilosCondicionales}>
            <button
                onClick={changeToggle}
                className={`${styles.btn} ${toggle ? styles.on : styles.off}`}
                // style={{ color: getColor() }}
                style={{ color: toggle ? "green" : "red" }}
            >
                {toggle ? "On" : "Off"}
            </button>
        </div>
    )
}

export default EstilosCondicionales
