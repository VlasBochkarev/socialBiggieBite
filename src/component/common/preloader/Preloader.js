import React from 'react'
import preloader from "../../../assets/imeges/Rocket.gif"
import styles from "../../Users/Users.module.css"

let Preloader = (props) => {
    return <div>
        <img className={styles.loading} src={preloader} />
    </div>
}

export default Preloader