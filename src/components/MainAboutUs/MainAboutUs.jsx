import React from 'react';
import {MainAboutUsList} from "./components/MainAboutUsList";

import AboutUsHeroDecor from '../../assets/img/index/about-us/about-us-hero-decor.svg'

export const MainAboutUs = () => {
  return (
      <section className="about-us-hero container">
          <div className="about-us-hero__content">
              <div className="about-us-hero__background" aria-hidden="true">
                  <img src={AboutUsHeroDecor} alt="" width="0" height="0" loading="lazy"/>
                      <div className="about-us-hero__background--block">
                          <div className="about-us-hero__background--eye eye">
                              <div className="eye-area">
                                  <div className="eye-element"></div>
                              </div>
                          </div>
                          <div className="about-us-hero__background--eye eye">
                              <div className="eye-area">
                                  <div className="eye-element"></div>
                              </div>
                          </div>
                      </div>
              </div>
              <h2 className="about-us-hero__title section-title">
                  О нас
              </h2>
              <div className="about-us-hero__text">
                  <p>
                      Направленных на развитие эмоционального интеллекта, командного духа и здоровой уверенности в себе. Мы обучаем наших студентов по коммуникативной методике - все, что изучают студенты, сразу же применяется в разговорной речи, ведь студенты изучают слова и фразы, которые понадобятся им в реальной жизни.
                  </p>
                  <p>
                      Мы являемся официальными партнерами всемирно известного издательства Cambridge (английские учебники) и Hueber (книги по изучению немецкого языка). Преподаватели Oratorica повышают квалификацию, участвуя в тематических семинарах и тренингах, сдают экзамены и часто сами изучают дополнительный иностранный язык.
                  </p>
              </div>
          </div>

          <MainAboutUsList/>

      </section>
  );
}
