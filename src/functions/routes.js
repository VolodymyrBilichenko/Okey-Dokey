import React from 'react';
import {Main} from "../pages/Main/Main";
import {Blog} from "../pages/Blog/Blog";
import {BlogCard} from "../pages/BlogCard/BlogCard";

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
      {
          path: '/blog/:id',
          element: <BlogCard/>
      },
  ];
}
