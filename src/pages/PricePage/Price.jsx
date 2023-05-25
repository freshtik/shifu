import React from "react";
import ElementCell from "../../common/components/ElementCell/ElementCell"
import styles from "./price.module.scss";

const Price = () => {

    const groupTrainingList = [
        { day: "1 занятие", name: "450 руб", time: false },
        { day: "Абонемент", name: "4000 руб", time: false },
    ]

    const individualTrainingList = [
        { day: "1 занятие", name: "Бесценно", time: false },
        { day: "Абонемент", name: "Просветлеть", time: false },
    ]

    const element = (
        <div id="price" className={`page ${styles.page}`}>
            <div className={styles.left_indent} />
            <h2 className="page__header">ПРАЙС</h2>

            <div className={styles.content}>
                <div className={styles.group}>
                    <h3 className={`page__text-content ${styles.header}`}>Групповые тренировки</h3>
                    <div className={styles.container}>
                        {groupTrainingList.map((el, key) => ElementCell(el.day, el.name, el.time, `price_${key}`))}
                    </div>
                </div>
                <div className={styles.group}>
                    <h3 className={`page__text-content ${styles.header}`}>Индивидуальный тренинг</h3>
                    <div className={styles.container}>
                        {individualTrainingList.map((el, key) => ElementCell(el.day, el.name, el.time, `price_${key}`))}
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
            </div>
        </div>
    )

    return element;
}

export default Price;