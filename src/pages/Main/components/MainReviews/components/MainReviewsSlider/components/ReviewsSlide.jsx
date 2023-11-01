import React from 'react';

import ReviewsViseo from '../../../../../../../assets/video/reviews-video.mp4'
import ReviewsViseoPreview from '../../../../../../../assets/img/index/reviews/reviews-video-preview.jpg'
import {ReviewsSlideItem} from "./ReviewsSlideItem";
export const ReviewsSlide = () => {
    return (
        <li className="reviews__slide splide__slide">
            <ul className="reviews__slide--list">
                <ReviewsSlideItem/>

                <ReviewsSlideItem/>

                <ReviewsSlideItem/>
            </ul>
            <div className="reviews__video">
                <video src={ReviewsViseo} controls playsInline></video>
                <div className="reviews__video--preview">
                    <picture>
                        <img src={ReviewsViseoPreview} alt="" width="0" height="0" loading="lazy"/>
                    </picture>
                </div>
            </div>
        </li>
    );
}
