import React from "react";
import styles from "./aboutUs.module.scss";

const AboutUs = () => {


    const onMouseMove = (e) => {
        let bg = document.querySelector(`.${styles["page"]}`);

        if (!bg) {
            return
        }
        let x = (e.clientX / window.innerWidth);
        let y = (e.clientY / window.innerHeight);

        bg.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
    }


    const element = (
        <div id="aboutUs" className={`page ${styles["common-container"]}`} onMouseMove={onMouseMove}>
            <div className={`page ${styles.page}`} />
            <div>
                <h2 className="page__header">О НАС</h2>
                <div className={styles.content}>
                    <div className={`${styles["text-content"]} page__text-content`}>
                        <h3>Школа основана Александром Алексеевичем.</h3>
                        <p>Боевые искусства в Китае являеются традицией, которая передается от учителя к ученику. Мастер Чжан Цзюнь Чи говорил, что главное - передача энергии Ци, которая передается от Мастера, в результате чего, в теле ученика формируются правильные механизмы циркуляции энергии. </p>
                        <p>Упражнения - дополнительный способ развития, но без передачи энергии учителем - пустая трата времени и сил.
                            По словам Мастера, традиция ведет свое происхождение от Божественных существ и передается около 10 000 лет от Мастера к ученику. .</p>
                    </div>
                </div>
            </div>
        </div >
    )

    return element;
}

export default AboutUs;