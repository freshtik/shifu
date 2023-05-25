import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {

    const element = (
        <div className={styles.container}>
            <div className={styles["text-container"]}>by freshtik 🤍</div>
        </div >
    )

    return element;
}

export default Footer;