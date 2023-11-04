import React from 'react';
import {OurTeachersSlider} from "./components/OurTeachersSlider/OurTeachersSlider";

export const MainOurTeachers = () => {
  return (
      <section className="our-teachers container _large" id="our-teachers">
          <h2 className="our-teachers__title section-title">
              Наши преподаватели
          </h2>

          <OurTeachersSlider/>
      </section>
  );
}
