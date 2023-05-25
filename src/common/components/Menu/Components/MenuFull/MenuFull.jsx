import React, { useEffect, ReactDOM } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import styles from "./menuFull.module.scss";

const MenuFull = () => {

    return (
        <div className={styles.container}>
            <div className={styles["inner-container"]}>
                <div className={styles["left-container"]}>
                    <li><Link to="aboutUs">О НАС</Link></li>
                    <li><Link to="qigong">ЦИГУН</Link></li>
                    <li><Link to="schedule">РАСПИСАНИЕ</Link></li>
                    <li><Link to="gallery">ГАЛЕРЕЯ</Link></li>
                </div>
                <div className={styles["right-container"]}>
                    <li><Link to="price">ЦЕНЫ</Link></li>
                    <li><Link to="contacts">КОНТАКТЫ</Link></li>
                </div>
            </div>
        </div>
    )

}

export default MenuFull;