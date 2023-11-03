import React from 'react';
import {ReviewsSlide} from "./components/ReviewsSlide";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectFade } from "swiper/modules";
import 'swiper/swiper-bundle.css';

export const MainReviewsSlider = () => {
    return (
        <div className="reviews__slider visible-on-desktop">
            <div className="reviews__track splide__track">
                <Swiper className="reviews__list splide__list"
                        navigation={{
                            prevEl: ".swiper-prev",
                            nextEl: ".swiper-next",
                        }}
                        modules={[Navigation, EffectFade]}
                        slidesPerView={1}
                        speed={700}
                        loop={true}
                        effect="fade"
                >
                    <SwiperSlide>
                        <ReviewsSlide/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewsSlide/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewsSlide/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="reviews__arrows">
                <button className="reviews__arrow arrow-btn swiper-prev" type="button">
                    <svg width="19" height="19" viewBox="0 0 19 19">
                        <use xlinkHref="#arrow-prev"></use>
                    </svg>
                </button>
                <button className="reviews__arrow arrow-btn swiper-next" type="button">
                    <svg width="19" height="19" viewBox="0 0 19 19">
                        <use xlinkHref="#arrow-next"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}
