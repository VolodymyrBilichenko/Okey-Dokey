import React from 'react';

import {TarrifCard} from "./components/TarrifCard/TarrifCard";
export const MainTariffs = () => {
  return (
      <section className="tariffs container" id="tariffs">
          <h2 className="tariffs__title section-title _large">
              Тарифы
          </h2>
          <ul className="tariffs__list">
              <TarrifCard/>

              <TarrifCard/>

              <TarrifCard/>

              <TarrifCard/>

              <TarrifCard/>

              <TarrifCard/>
          </ul>
      </section>
  );
}
