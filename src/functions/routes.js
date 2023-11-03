import React from 'react';
import {Main} from "../pages/Main/Main";

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
  ];
}
