import React from "react";
import ElementCell from "../../common/components/ElementCell/ElementCell"
import "./price.styles.scss";

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
        <div className="page price_page">
            <div className="price__left-indent" />
            <h2 className="page__header">ПРАЙС</h2>

            <div className="price__content">
                <div className="price_group">
                    <h3 className="page__text-content price-header">Групповые тренировки</h3>
                    <div className="price-container">
                        {groupTrainingList.map((el, key) => ElementCell(el.day, el.name, el.time, `price_${key}`))}
                    </div>
                </div>
                <div className="price_group">
                    <h3 className="page__text-content price-header">Индивидуальный тренинг</h3>
                    <div className="price-container">
                        {individualTrainingList.map((el, key) => ElementCell(el.day, el.name, el.time, `price_${key}`))}
                    </div>
                </div>
            </div>
            <div className="price__footer">
            </div>
        </div>
    )

    return element;
}

export default Price;