import React from 'react';

export const MainFaqListItem = () => {
  return (
      <li className="faq__item">
          <button className="faq__target" type="button">
              <div className="faq__number"></div>
              <h3 className="faq__question">
                  Почему удобно заниматься с преподавателем онлайн?
              </h3>
              <div className="faq__plus"></div>
          </button>
          <div className="faq__answer">
              <div>
                  <p>
                      Персональное обучение с преподавателем, с полным пониманием и вовлеченностью в твое эффективное обучение в течение каждого урока продолжительностью в 50 минут.
                  </p>
              </div>
          </div>
      </li>
  );
}
