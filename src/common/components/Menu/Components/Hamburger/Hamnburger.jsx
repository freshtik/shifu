import React, { useEffect, ReactDOM, useState } from "react";

import { Link } from "react-scroll";

import styles from "./hamberger.module.scss";

const Hamburger = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className={styles["menu-sticky"]} >
            {
                (!open)
                    ? (
                        <div className={styles["menu-container"]}>
                            <button style={{ zIndex: 99999 }} className={styles["btn-open"]} onClick={() => setOpen(true)}>M</button>
                        </div>
                    )
                    : null
            }
            {
                (open)
                    ? <div className={styles.container}>
                        <button className={styles["btn-close"]} onClick={() => setOpen(false)}> X </button>
                        <div className={styles["inner-container"]}>
                            <li><Link to="aboutUs">О НАС</Link></li>
                            <li><Link to="qigong">ЦИГУН</Link></li>
                            <li><Link to="schedule">РАСПИСАНИЕ</Link></li>
                            <li><Link to="gallery">ГАЛЕРЕЯ</Link></li>
                            <li><Link to="price">ЦЕНЫ</Link></li>
                            <li><Link to="contacts">КОНТАКТЫ</Link></li>
                        </div>
                    </div>
                    : null
            }
        </div >
    )

}

export default Hamburger;