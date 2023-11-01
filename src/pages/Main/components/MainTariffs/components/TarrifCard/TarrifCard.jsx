import React from 'react';
import tariffsCardPattern from "../../../../../../assets/img/index/tariffs/tariffs-card-pattern.svg";
import cardDecorImage from "../../../../../../assets/img/index/tariffs/tariffs-card-image.svg";

export const TarrifCard = () => {
  return (
      <li className="tariffs__card">
          <div className="tariffs__card--body">
              <div className="tariffs__card--background">
                  <div className="tariffs__card--decor"></div>
                  <div className="tariffs__card--pattern">
                      <img src={tariffsCardPattern} width="0" height="0" loading="lazy" alt=""/>
                  </div>
              </div>
              <div className="tariffs__card--image">
                  <img src={cardDecorImage} width="180" height="185" loading="lazy" alt=""/>
              </div>
              <div className="tariffs__card--content">
                  <h3>I can sing English </h3>
                  <p>
                      дети 3-9 лет 3 500 грн
                  </p>
              </div>
              <a href="#" className="tariffs__card--btn btn _min-3">
                  Ознакомиться
              </a>
          </div>
      </li>
  );
}
