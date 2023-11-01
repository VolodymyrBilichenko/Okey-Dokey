import React from 'react';
import {ReviewsSlide} from "./components/ReviewsSlide";

export const MainReviewsSlider = () => {
    return (
        <div className="reviews__slider splide visible-on-desktop">
            <div className="reviews__track splide__track">
                <ul className="reviews__list splide__list">
                    <ReviewsSlide/>

                    <ReviewsSlide/>

                    <ReviewsSlide/>
                </ul>
            </div>
            <div className="reviews__arrows splide__arrows">
                <button className="reviews__arrow splide__arrow splide__arrow--prev arrow-btn" type="button">
                    <svg width="19" height="19" viewBox="0 0 19 19">
                        <use xlinkHref="#arrow-prev"></use>
                    </svg>
                </button>
                <button className="reviews__arrow splide__arrow splide__arrow--next arrow-btn" type="button">
                    <svg width="19" height="19" viewBox="0 0 19 19">
                        <use xlinkHref="#arrow-next"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
}
