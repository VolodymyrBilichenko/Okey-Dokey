import React from 'react';

import IndexHeroDecor1 from '../../../../assets/img/index/hero/index-hero-decor-1.svg'

export const AboutUsStatistic = () => {
    return (
        <section className="about-statistic container">
            <h2 className="about-statistic__title visually-hidden">Статистика</h2>
            <ul className="about-statistic__list">
                <li className="about-statistic__item">
                    <div className="about-statistic__item--background" aria-hidden="true">
                        <img src={IndexHeroDecor1} loading="lazy" width="0" height="0" alt=""/>
                    </div>
                    <strong>10 000</strong>
                    <span>Довольных учеников</span>
                </li>
                <li className="about-statistic__item">
                    <div className="about-statistic__item--background" aria-hidden="true">
                        <img src={IndexHeroDecor1} loading="lazy" width="0" height="0" alt=""/>
                    </div>
                    <strong>> 1 000</strong>
                    <span>Написанных уроков</span>
                </li>
                <li className="about-statistic__item">
                    <div className="about-statistic__item--background" aria-hidden="true">
                        <img src={IndexHeroDecor1} loading="lazy" width="0" height="0" alt=""/>
                    </div>
                    <strong>10 000</strong>
                    <span>Довольных учеников</span>
                </li>
            </ul>
        </section>
    );
}
