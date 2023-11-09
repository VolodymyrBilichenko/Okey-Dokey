import React from 'react';
import {Link, NavLink} from "react-router-dom";

export const HeaderNavList = () => {
    return (
        <ul className="header__nav--list">
            <li>
                <Link to='/#tariffs'>
                    Тарифы
                </Link>
            </li>
            <li>
                <NavLink to={'/about-us'}>
                    О нас
                </NavLink>
            </li>
            <li>
                <Link to={'/#our-teachers'}>
                    Галерея преподавателей
                </Link>
            </li>
            <li>
                <NavLink to={'/programs'}>
                    Программы
                </NavLink>
            </li>
            <li>
                <Link to={'/#reviews'}>
                    Отзывы
                </Link>
            </li>
            <li>
                <NavLink to={"/Blog"}>
                    Блог
                </NavLink>
            </li>
            <li>
                <Link to={'/#faq'}>
                    Вопрос-ответ
                </Link>
            </li>
        </ul>
    );
}
