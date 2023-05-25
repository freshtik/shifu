import React from "react";

import styles from "./title.module.scss";

const Title = () => {

    const element = (
        <div className={`page ${styles.page}`}>
            <div className={styles.container}>
                <h1 className={styles.header}>ШКОЛА <br /> УШУ и ЦИГУН<br /> <b>А.А.Белобородова</b></h1>
                <div className={styles.wrapper}></div>
            </div>
        </div>
    )

    return element;
}

export default Title