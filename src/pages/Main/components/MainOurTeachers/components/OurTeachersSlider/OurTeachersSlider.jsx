import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {OurTeachersSliderItem} from "../OurTeachersSliderItem/OurTeachersSliderItem";

export const OurTeachersSlider = () => {
    return (
        <Splide
            className="our-teachers__slider splide"
            options={{
                type: "loop",
                perPage: 1,
                perMove: 1,
                gap: 30,

                easing: "ease",
                speed: 700,

                pagination: false,
                arrows: true,

                mediaQuery: "min",

                breakpoints: {
                    1300: {
                        perPage: 3,
                    },

                    992: {
                        perPage: 3,
                    },

                    768: {
                        perPage: 2,
                    }
                }
          }}
        >
            <OurTeachersSliderItem/>

            <OurTeachersSliderItem/>

            <OurTeachersSliderItem/>

            <OurTeachersSliderItem/>

            <OurTeachersSliderItem/>

            <OurTeachersSliderItem/>

            <div className="our-teachers__nav splide__arrows">
                <button className="our-teachers__arrow splide__arrow splide__arrow--prev arrow-btn" type="button">
                    <svg width="19" height="19" viewBox="0 0 19 19">
                        <use xlinkHref="#arrow-prev"></use>
                    </svg>
                </button>
                <button className="our-teachers__arrow splide__arrow--next arrow-btn splide__arrow" type="button">
                    <svg width="19" height="19" viewBox="0 0 19 19">
                        <use xlinkHref="#arrow-next"></use>
                    </svg>
                </button>
            </div>
        </Splide>
    );
}
