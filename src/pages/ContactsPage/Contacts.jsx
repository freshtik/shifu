import React from "react";
import MapY from "../../common/components/Map/MapY";

import styles from "./contacts.module.scss";

const Contacts = () => {
    const element = (
        <div id="contacts" className={styles.page}>
            <h2 className="page__header">КОНТАКТЫ</h2>
            <div className={styles.container}>
                <div className={styles.map}>
                    <MapY />
                </div>
                <div className={styles["text-container"]} >
                    <p className={`${styles.text} ${styles["left-side"]}`}>Адрес:</p>
                    <p className={`${styles.text} ${styles["right-side"]}`}>г.Красноярск, ул.Кольцевая 3а (Школа №17)</p>
                </div>
                <div className={styles["text-container"]} >
                    <p className={`${styles.text} ${styles["left-side"]}`}>Телефон:</p>
                    <p className={`${styles.text} ${styles["right-side"]}`}>8-999-999-99-99</p>
                </div>
            </div>


        </div >
    )

    return element;
}

export default Contacts;