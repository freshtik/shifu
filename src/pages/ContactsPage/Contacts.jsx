import React from "react";
import MapY from "../../common/components/Map/MapY";
import "./contscts.styles.scss"
import isPhone from "../../common/scripts/checkIsPhone";



const Contacts = () => {
    const element = (
        <div className="page contacts__page">
            <h2 className="page__header">КОНТАКТЫ</h2>
            <div className="contacts_container">
                <div className="contacts_map">
                    <MapY />
                </div>
                <div className="contacts_text-container" >
                    <p className="contacts_text contact_left-side">Адрес:</p>
                    <p className="contacts_text contact_right-side">г.Красноярск, ул.Кольцевая 3а (Школа №17)</p>
                </div>
                <div className="contacts_text-container" >
                    <p className="contacts_text contact_left-side">Телефон:</p>
                    <p className="contacts_text contact_right-side">8-999-999-99-99</p>
                </div>
            </div>


        </div>
    )

    return element;
}

export default Contacts;