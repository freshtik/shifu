import React from "react";
import "./elementCell.styles.scss"

const ElementCell = (day, name, time = false, key) => (
    <div className={time ? "element-cell__item" : "element-cell__price_item"} key={`item_${key}`}>
        <div className={time ? "element-cell__day" : "element-cell__price_name"} key={`day_${key}`}>{day}</div>
        <div className={time ? "element-cell__name" : "element-cell__price"} key={`name_${key}`}>{name}</div>
        {time ? <div className="element-cell__time" key={`time_${key}`}>{time}</div> : null}
    </div>
)

export default ElementCell;