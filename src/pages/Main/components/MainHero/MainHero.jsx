import React, {useEffect} from 'react';

import indexHeroDecor1 from '../../../../assets/img/index/hero/index-hero-decor-1.svg'
import indexHeroDecor2 from '../../../../assets/img/index/hero/index-hero-decor-2.svg'
import brandPattern from '../../../../assets/img/index/hero/brand-pattern.svg'
import indexHeroImage from '../../../../assets/img/index/hero/index-hero-image.svg'
import {EyeElement} from "../../../../functions/EyeElement";



export const MainHero = () => {
    useEffect(() => {
        EyeElement();
    }, [])
  return (
      <section className="hero container">
          <div className="hero__background visible-on-desktop" aria-hidden="true">
              <div className="hero__background--decor">
                  <img src={indexHeroDecor1} width="152" height="154" loading="lazy" alt=""/>
              </div>
              <div className="hero__background--decor">
                  <img src={indexHeroDecor2} width="400" height="398" loading="lazy" alt=""/>
              </div>
              <div className="hero__background--decor">
                  <img src={brandPattern} width="300" height="360" loading="lazy" alt=""/>
              </div>
              <div className="hero__background--decor">
                  <div className="hero__background--eye eye">
                      <div className="eye-area">
                          <div className="eye-element"></div>
                      </div>
                  </div>
                  <div className="hero__background--eye eye">
                      <div className="eye-area">
                          <div className="eye-element"></div>
                      </div>
                  </div>
                  <img src={indexHeroImage} width="809" height="767" loading="lazy" alt=""/>
              </div>
          </div>
          <div className="hero__content">
              <div className="hero__content--decor">
                  <span className="main-title">Онлайн Школа английского языка</span>
              </div>
              <h1 className="hero__title main-title">
                  Онлайн Школа английского языка
              </h1>
              <div className="hero__text">
                  <p>
                      Пройди тестирование на уровень знания языка и выучи <br/>
                      английскийвсего за <u>8 недель</u>
                  </p>
              </div>
              <a href="#" className="hero__btn">
                  Пройти тест
                  <svg width="50" height="49" viewBox="0 0 50 49">
                      <use xlinkHref="#brand-icon"></use>
                  </svg>
              </a>
          </div>
      </section>
  );
}
