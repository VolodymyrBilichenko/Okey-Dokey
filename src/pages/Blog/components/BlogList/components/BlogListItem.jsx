import React from 'react';

import BlogPostImg from '../../../../../assets/img/blog/blog-post-image-1.jpg'

export const BlogListItem = () => {
    return (
        <li className="classblog__card">
            <a href="single.html" className="blog__card--body">
                <div className="blog__card--image image-aspect-ratio">
                    <picture>
                        <img src={BlogPostImg} alt="" width="370" height="237" loading="lazy"/>
                    </picture>
                </div>
                <time className="blog__card--date" dateTime="26-09-2023">
                    <svg width="13" height="13" viewBox="0 0 13 13">
                        <use xlinkHref="#calendar-2"></use>
                    </svg>
                    <span>26.09.2023</span>
                </time>
                <h2 className="blog__card--title">
                    Как начать изучать английский после перерыва:5 советов, которые помогут
                </h2>
                <div className="blog__card--text">
                    <p>
                        В изучении английского нередко случаются перерывы, иногда они бывают слишком продолжительными.
                        Причины разные: не удавалось справиться с грамматикой, не подошел учитель, неудобная локация
                        курсов и другие.
                    </p>
                </div>
            </a>
        </li>
    );
}
