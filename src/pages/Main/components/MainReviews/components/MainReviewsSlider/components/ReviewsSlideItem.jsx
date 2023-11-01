import React from 'react';

import ReviewsCardDecor from '../../../../../../../assets/img/index/reviews/reviews-card-decor.svg'
import ReviewsAvatar from '../../../../../../../assets/img/index/reviews/reviews-avatar.jpg'
export const ReviewsSlideItem = () => {
  return (
      <li className="reviews__slide--item reviews__item">
          <div className="reviews__item--background" aria-hidden="true">
              <div className="reviews__item--background-decor"></div>
              <div className="reviews__item--background-decor"></div>
              <div className="reviews__item--background-decor">
                  <img src={ReviewsCardDecor} width="0" height="0" loading="lazy" alt=""/>
              </div>
          </div>
          <div className="reviews__item--avatar">
              <picture>
                  <img src={ReviewsAvatar} alt="" width="97" height="115" loading="lazy"/>
              </picture>
          </div>
          <div className="reviews__item--info">
              <div className="reviews__item--header">
                  <h3 className="reviews__item--name">
                      Алена
                  </h3>
                  <time className="reviews__item--date" dateTime="26-09-2023">26.09.2023</time>
              </div>
              <ul className="reviews__item--rating">
                  <li>
                      <svg width="15" height="15" viewBox="0 0 15 15">
                          <use xlinkHref="#star"></use>
                      </svg>
                  </li>
                  <li>
                      <svg width="15" height="15" viewBox="0 0 15 15">
                          <use xlinkHref="#star"></use>
                      </svg>
                  </li>
                  <li>
                      <svg width="15" height="15" viewBox="0 0 15 15">
                          <use xlinkHref="#star"></use>
                      </svg>
                  </li>
                  <li>
                      <svg width="15" height="15" viewBox="0 0 15 15">
                          <use xlinkHref="#star"></use>
                      </svg>
                  </li>
                  <li>
                      <svg width="15" height="15" viewBox="0 0 15 15">
                          <use xlinkHref="#star"></use>
                      </svg>
                  </li>
              </ul>
              <div className="reviews__item--text">
                  <p>
                      Спасибо большое создателям такой прекрастной школы, я на уроки летела пулей, так как было очень интересно и познавательно.Всем советую обучить именно в этой школе.
                  </p>
              </div>
          </div>
      </li>
  );
}
