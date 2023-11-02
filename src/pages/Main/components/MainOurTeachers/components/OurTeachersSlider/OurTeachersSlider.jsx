import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { OurTeachersSliderItem } from '../OurTeachersSliderItem/OurTeachersSliderItem';

export const OurTeachersSlider = () => {
    return (
        <div className="our-teachers__slider">
            <div className="our-teachers__track">
                <Swiper className="our-teachers__list"
                        navigation={{
                            prevEl: ".swiper-prev",
                            nextEl: ".swiper-next",
                        }}
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={30}
                        speed={700}
                        loop={true}
                        breakpoints={{
                            1300: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 2,
                            }
                        }}
                >
                    <SwiperSlide>
                        <OurTeachersSliderItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <OurTeachersSliderItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <OurTeachersSliderItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <OurTeachersSliderItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <OurTeachersSliderItem />
                    </SwiperSlide>
                </Swiper>
                <div className="our-teachers__nav splide__arrows">
                    <button className="our-teachers__arrow splide__arrow splide__arrow--prev arrow-btn swiper-prev" type="button">
                        <svg width="19" height="19" viewBox="0 0 19 19">
                            <use xlinkHref="#arrow-prev"></use>
                        </svg>
                    </button>
                    <button className="our-teachers__arrow splide__arrow splide__arrow--next arrow-btn swiper-next" type="button">
                        <svg width="19" height="19" viewBox="0 0 19 19">
                            <use xlinkHref="#arrow-next"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
