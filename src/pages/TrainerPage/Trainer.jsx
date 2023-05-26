import React from "react";
import shifu from '../../common/images/shifu.png'
import styles from "./trainer.module.scss"

const Trainer = () => {

    const trainerPathList = [
        'В 1995 году Мастер Чжан Цзюнь Чи обучил меня традиции Шаолинь и чжи чань Ци-Гун.',
        'В 2005 году произошло знакомство с Мастером Ди Гуо Юном.',
        'В 2008 году меня посвятили в традицию Лян-Ши Багуачжан и Нэйгун.',
        'В 2009 году произошло посвящение в традицию Вуди Шен гун.',
    ]

    const element = (
        <div className={`page ${styles.page}`} id="trainer" >
            <div className={styles.container}>
                <h2 className="page__header">ТРЕНЕР</h2>
                <div className={styles.content}>
                    <div className={styles["photo-card"]}>
                        <img src={shifu} alt='Мастер Шифу' />
                        <p>Александр Белобородов</p>
                    </div>
                    <div className={`${styles["text-content"]} page__text-content`}>
                        <h3>Мой тренерский путь начался в 1995г</h3>
                        {trainerPathList.map((el, key) => <p key={key}>{el}</p>)}
                        <p className={styles["text-small"]}>Вуди Шен гун - Традиция даоских отшельников у Мастера Чи Сунь Цзы.</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
            </div>
        </div>
    )

    return element;
}

export default Trainer;