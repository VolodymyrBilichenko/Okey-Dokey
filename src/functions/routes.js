import React from 'react';
import {Main} from "../pages/Main/Main";
import {Blog} from "../pages/Blog/Blog";

export const routes = () => {
  return [
      {
          path: '*',
          element: 'not found'
      },
      {
          path: '/',
          element: <Main/>
      },
      {
          path: '/blog',
          element: <Blog/>
      },
  ];
}
