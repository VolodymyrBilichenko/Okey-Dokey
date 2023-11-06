import React from 'react';

import AboutUsArticleImg1 from '../../../../assets/img/about-us/articles/about-us-article-image-1.jpg'
import AboutUsArticleImg2 from '../../../../assets/img/about-us/articles/about-us-article-image-2.jpg'

export const AboutUsContent = () => {
  return (
      <section className="content-section container">
          <div className="content-section__images">
              <div className="content-section__images--item">
                  <div>
                      <picture>
                          <img src={AboutUsArticleImg1} alt="" width="278" height="472" loading="lazy"/>
                      </picture>
                  </div>
              </div>
              <div className="content-section__images--item">
                  <div>
                      <picture>
                          <img src={AboutUsArticleImg2} alt="" width="278" height="472" loading="lazy"/>
                      </picture>
                  </div>
              </div>
          </div>
          <div className="content-section__text">
              <h2>Наша миссия</h2>
              <ol>
                  <li>
                      Направленных на развитие эмоционального интеллекта, командного духа и здоровой уверенности в себе.
                  </li>
                  <li>
                      Мы обучаем наших студентов по коммуникативной методике - все, что изучают студенты, сразу же применяется в разговорной речи, ведь студенты изучают слова и фразы, которые понадобятся им в реальной жизни.
                  </li>
                  <li>
                      Мы являемся официальными партнерами всемирно известного издательства Cambridge (английские учебники) 7и Hueber (книги по изучению немецкого языка).
                  </li>
              </ol>
          </div>
      </section>
  );
}
