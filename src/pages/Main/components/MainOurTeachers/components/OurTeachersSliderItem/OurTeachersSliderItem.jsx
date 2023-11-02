import React from 'react';
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import OurTeacherAvatar from '../../../../../../assets/img/index/our-teachers/our-teachers-avatar-1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
export const OurTeachersSliderItem = () => {
    return (
        <li className="our-teachers__card splide__slide">
            <div className="our-teachers__card--avatar">
                <picture>
                    <img src={OurTeacherAvatar} alt="" width="277" height="277" loading="lazy"/>
                </picture>
            </div>
            <h3 className="our-teachers__card--name">
                Владислава Олеговна
            </h3>
            <ul className="our-teachers__card--info">
                <li>
                    <i>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <use xlinkHref="#calendar"></use>
                        </svg>
                    </i>
                    <span>
				        Стаж работы: 15 лет
			        </span>
                </li>
                <li>
                    <i>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <use xlinkHref="#languages"></use>
                        </svg>
                    </i>
                    <span>
				        Английский язык, Немецкий язык
			        </span>
                </li>
                <li>
                    <i>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <use xlinkHref="#education"></use>
                        </svg>
                    </i>
                    <span>
				        Диплом Киевского национального университета
                    </span>
                </li>
            </ul>
        </li>
    );
}
