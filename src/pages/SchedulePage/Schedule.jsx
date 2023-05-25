import React from "react";
import ElementCell from "../../common/components/ElementCell/ElementCell";
import styles from "./schedule.module.scss";



const Schedule = () => {

    const scheduleList = [
        { day: "Пн", name: "Цигун", time: "19:30 - 21:00" },
        { day: "Ср", name: "Цигун", time: "19:30 - 21:00" },
        { day: "Пт", name: "Цигун", time: "19:30 - 21:00" },
    ]

    const element = (
        <div className={`page ${styles.page}`}>
            <h2 className="page__header">РАСПИСАНИЕ</h2>
            <div className={styles.content}>
                <div className={styles.container}>
                    {scheduleList.map((el, key) => ElementCell(el.day, el.name, el.time, `schedule_${key}`))}
                </div>
            </div>
        </div>
    )

    return element;
}

export default Schedule;