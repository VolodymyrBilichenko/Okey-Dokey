import React from 'react';

import AboutUsHeroimg from '../../../../../assets/img/index/about-us/about-us-hero-image-1.jpg'

export const MainAboutUsItem = () => {
  return (
      <li className="about-us-hero__grid--item">
          <picture>
              <img src={AboutUsHeroimg} alt="" width="316" height="316" loading="lazy"/>
          </picture>
      </li>
  );
}
