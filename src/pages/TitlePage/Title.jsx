import React from "react";

import "./title.styles.scss"

const Title = () => {

    const element = (
        <div className="page title__page">
            <div className="title__container">
                <h1 className="title__header">ШКОЛА <br /> УШУ и ЦИГУН<br /> <b>А.А.Белобородова</b></h1>
                <div className="title__wrapper"></div>
            </div>
        </div>
    )

    return element;
}

export default Title