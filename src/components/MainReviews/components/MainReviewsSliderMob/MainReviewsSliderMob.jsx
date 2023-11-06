import React from 'react';
import {ReviewsMobSlide} from "./components/ReviewsMobSlide";

export const MainReviewsSliderMob = () => {
  return (
      <div className="reviews__slider-mob visible-on-mob">
          <div className="reviews__slider-mob--track splide__track">
              <ul className="reviews__slider-mob--list ">
                  <ReviewsMobSlide/>

                  <ReviewsMobSlide/>

                  <ReviewsMobSlide/>
              </ul>
          </div>
      </div>
  );
}
