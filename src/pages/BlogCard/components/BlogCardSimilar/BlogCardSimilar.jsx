import React from 'react';
import {BlogCardSimilarItem} from "./components/BlogCardSimilarItem";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

export const BlogCardSimilar = () => {
    return (
        <section className="related-articles container">
            <h2 className="related-articles__title section-title">
                Похожие статьи
            </h2>
            <div className="related-articles__slider ">
                <div className="related-articles__track splide__track">
                    <Swiper className="related-articles__list splide__list"
                            navigation={{
                                prevEl: ".swiper-prev",
                                nextEl: ".swiper-next",
                            }}
                            modules={[Navigation]}
                            loop={true}
                            slidesPerView={3}
                            speed={700}
                            spaceBetween={30}
                            breakpoints={{
                                1300: {
                                  slidesPerView: 3,
                                },
                                992: {
                                    slidesPerView: 2,
                                },
                                550: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                }
                            }}
                    >
                        <SwiperSlide>
                            <BlogCardSimilarItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <BlogCardSimilarItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <BlogCardSimilarItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <BlogCardSimilarItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <BlogCardSimilarItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <BlogCardSimilarItem/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="related-articles__controls ">
                    <button className="related-articles__arrow splide__arrow splide__arrow--prev arrow-btn swiper-prev"
                            type="button">
                        <svg width="19" height="19" viewBox="0 0 19 19">
                            <use xlinkHref="#arrow-prev"></use>
                        </svg>
                    </button>
                    <button className="related-articles__arrow splide__arrow splide__arrow--next arrow-btn swiper-next"
                            type="button">
                        <svg width="19" height="19" viewBox="0 0 19 19">
                            <use xlinkHref="#arrow-next"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
