import React from 'react';
import {NavLink} from "react-router-dom";

export const BreadCrumbs = () => {
  return (
      <div className="breadcrumbs-wrapper container">
          <div className="breadcrumbs">
              <NavLink to={'/'} className="breadcrumbs__link">
                  Главная
              </NavLink>
              <span className="breadcrumbs__separator"></span>
              <span className="breadcrumbs__current">Блог</span>
          </div>
      </div>
  );
}
