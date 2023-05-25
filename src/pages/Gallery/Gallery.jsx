import React from "react";
import { useEffect, useState } from "react";
import "./gallery.style.scss";
const images = [
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.jpg",
    "/assets/images/5.jpg",
    "/assets/images/6.jpg",
    "/assets/images/7.jpg",
    "/assets/images/8.jpg",
    "/assets/images/9.jpg",
    "/assets/images/10.jpg",
]

const Gallery = () => {
    const [numImage, setNumImage] = useState(0);

    function getNextIndex(initIndex) {
        let currentIndex = 0
        if (numImage === images.length - 1 || numImage >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = initIndex + 1;
        }

        return currentIndex;
    }

    function getPrevIndex(initIndex) {
        let currentIndex = 0
        if (numImage === 0 || numImage < 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = initIndex - 1;
        }
        return currentIndex;

    }

    const onNextButtonClick = (e) => {
        let nextIndex = getNextIndex(numImage);
        setNumImage(prev => nextIndex);
    }

    const onBackButtonClick = (e) => {
        let prevIndex = getPrevIndex(numImage);
        setNumImage(prevIndex);
    }


    const element = (
        <>
            <div className="page gallery_page">
                <h2 className="page__header">ГАЛЕРЕЯ</h2>
                <div className="gallery__content">
                    <div className="gallery__button-container gallery__button-prev">
                        <button className="gallery__button" onClick={onBackButtonClick}>←
                            <img className="gallery__image-button" src={images[getPrevIndex(numImage)]} />
                        </button>
                    </div>
                    <div className="gallery__image-container">
                        <img className="gallery__image" src={images[numImage]}></img>
                    </div>
                    <div className="gallery__button-container gallery__button-next">
                        <button className="gallery__button" onClick={onNextButtonClick}>→
                            <img className="gallery__image-button" src={images[getNextIndex(numImage)]} />
                        </button>
                    </div>
                </div>
                <div className="gallery__footer"></div>
                <div className="gallery_background" />
            </div >
        </>
    )

    return element;
}

export default Gallery;