import React from 'react';

import ApplicationPattern from '../../../../assets/img/index/application/application-pattern.svg'
export const MainLevelEnglish = () => {
  return (
      <section className="leave-application container _large">
          <div className="leave-application__background" aria-hidden="true">
              <div className="leave-application__background--decor">
                  <img src={ApplicationPattern} width="0" height="0" loading="lazy" alt=""/>
              </div>
          </div>
          <div className="leave-application__container">
              <h2 className="leave-application__title section-title _large">
                  Узнай свой уровень английского языка
              </h2>
              <div className="leave-application__text">
                  <p>
                      Тест расчитан для подростков от 12 лет
                  </p>
              </div>
              <div className="leave-application__footer">
                  <a href="#" className="leave-application__btn circle-btn">
                      Пройти тест
                  </a>
              </div>
          </div>
      </section>
  );
}
