import React from 'react';
import {MainReviewsSlider} from "./components/MainReviewsSlider/MainReviewsSlider";
import {MainReviewsSliderMob} from "./components/MainReviewsSliderMob/MainReviewsSliderMob";

export const MainReviews = () => {
    return (
        <section className="reviews container _large" id="reviews">
            <h2 className="reviews__title section-title">
                Отзывы
            </h2>

            <MainReviewsSlider/>

            <MainReviewsSliderMob/>

            <div className="reviews__footer">
                <a href="#" className="reviews__btn circle-btn _accent">
                    Смотреть <br/> еще
                </a>
            </div>
        </section>
    );
}
