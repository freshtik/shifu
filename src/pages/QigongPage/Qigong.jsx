import React from "react";
import yinYang from '../../common/images/shifu_2.png'
import "./qigong.styles.scss"


const Qigong = () => {

    const textContentList = [
        'Косточки уже ломит, а коленки дрожат?',
        'Тогда обязательно нужно посетить наши занятия! Вы сможете вставать на руки и садиться на шпагат в любом возрасте (чем старше, тем проще это сделать)',
        'Вы сможете хвастаться своим соседям своей гибкостью и стойкостью! Любые пари ваши!',
        'Но Если серьезно,  на занятиях упражнения подобраны по особому принципу выполнения, в результате которого максимально улучшается гибкость и растяжка без истощения мышц и боли. Устраняются блоки для нормальной циркуляции энергии, что избавляет от большинства заболеваний.',
    ]

    const element = (
        <div className="page qigong__page">
            <h2 className="page__header">ЦИГУН</h2>
            <div className="qigong__content">
                <div className="qigong__text-content page__text-content">
                    {textContentList.map((el, key) => <p id={key} key={key}>{el}</p>)}
                </div>
                <div className='qigong__img'>
                    <img src={yinYang} alt='Мастер Шифу на фоне Инь-Янь' />
                </div>
            </div>
        </div>
    )

    return element;
}

export default Qigong;