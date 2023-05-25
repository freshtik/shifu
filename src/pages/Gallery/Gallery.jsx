import React from "react";
import { useEffect, useState } from "react";
import "./gallery.style.scss";
import { Navigation, Pagination, Scrollbar, A11y, FreeMode, Thumbs, Controller } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import isPhone from "../../common/scripts/checkIsPhone";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const sliders = images.map((el, key) => {
        return (
            <SwiperSlide className="slier-wrapper">
                <div className="gallery_item" >
                    <img className="gallery_image" data src={el} key={`img_${key}`} alt={`Супер трени_${key}`} />
                </div>
            </SwiperSlide>
        )
    })

    const sliders2 = images.map((el, key) => {
        return (
            <SwiperSlide className="slier-wrapper">
                <div className="gallery_item" >
                    <img data src={el} key={`img_${key}`} alt={`Супер трени_${key}`} />
                </div>
            </SwiperSlide>
        )
    })



    const element = (
        <div id="gallery" className="page gallery_page">
            <h2 className="page__header">ГАЛЕРЕЯ</h2>
            <Swiper
                slidesPerView={isPhone() ? 1 : 3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper"
                scrollbar={{
                    hide: true,
                }}
                parallax={true}
            >
                {sliders}
            </Swiper>
        </div >
    )

    return element;
}

export default Gallery;