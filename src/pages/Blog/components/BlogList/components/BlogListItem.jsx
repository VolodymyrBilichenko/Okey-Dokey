import React, {useEffect} from 'react';

import {NavLink} from "react-router-dom";
import {ImageSize} from "../../../../../functions/ImageSize";

export const BlogListItem = ({blog}) => {

    useEffect(() => {
        ImageSize()
    }, [])

    return (
        <li className="classblog__card">
            <NavLink to={'/blog:id'}  className="blog__card--body">
                <div className="blog__card--image image-aspect-ratio">
                    <picture>
                        <img src={blog.preview} alt="" width="370" height="237" loading="lazy"/>
                    </picture>
                </div>
                <time className="blog__card--date" dateTime="26-09-2023">
                    <svg width="13" height="13" viewBox="0 0 13 13">
                        <use xlinkHref="#calendar-2"></use>
                    </svg>
                    <span>{blog.short_description}</span>
                </time>
                <h2 className="blog__card--title">
                    {blog.title}
                </h2>
                <div className="blog__card--text">
                    <p>
                        {blog.text}
                    </p>
                </div>
            </NavLink>
        </li>
    );
}
