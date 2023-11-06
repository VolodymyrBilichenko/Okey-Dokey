import React from 'react';
import {BreadCrumbs} from "../../components/BreadCrumbs/BreadCrumbs";
import {BlogFilter} from "./components/BlogFilter/BlogFilter";
import {BlogList} from "./components/BlogList/BlogList";
import {BlogPagination} from "./components/BlogPagination/BlogPagination";

import BlogListDecor1 from '../../assets/img/blog/blog-list-decor-1.svg'
import BlogListDecor2 from '../../assets/img/blog/blog-list-decor-2.svg'

export const Blog = () => {

  return (
   <div className="main">

       <BreadCrumbs/>

       <section className="blog container">
           <div className="blog__bakground" aria-hidden="true">
               <div className="blog__background--item"></div>
               <div className="blog__background--item">
                   <img src={BlogListDecor1} width="0" height="0" loading="lazy" alt=""/>
               </div>
               <div className="blog__background--item">
                   <img src={BlogListDecor2} width="0" height="0" loading="lazy" alt=""/>
               </div>
           </div>

           <h1 className="blog__title section-title">
               Блог
           </h1>

            <BlogFilter/>

           <BlogList/>

           <div className="blog__footer">

               <BlogPagination/>

           </div>
       </section>
   </div>
  );
}
