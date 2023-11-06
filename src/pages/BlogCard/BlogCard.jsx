import React, {useEffect} from 'react';
import {BreadCrumbs} from "../../components/BreadCrumbs/BreadCrumbs";
import {ImageSize} from "../../functions/ImageSize";

import PostDecorPattern from '../../assets/img/blog/post-decor-pattern.svg'
import BlogListDecor1 from '../../assets/img/blog/blog-list-decor-1.svg'
import Instagram from '../../assets/img/social/instagram.svg'
import Telegram from '../../assets/img/social/telegram.svg'
import PostHeroImg from '../../assets/img/blog/post-hero-image.jpg'
import PostImg from '../../assets/img/blog/post-image.jpg'
import {MainLeaveApplication} from "../../components/MainLeaveApplication/MainLeaveApplication";
import {BlogCardSimilar} from "./components/BlogCardSimilar/BlogCardSimilar";

export const BlogCard = () => {

    useEffect(() => {
        ImageSize();
    }, [])

    return (
        <div className="main">
            <BreadCrumbs/>

            <section className="single container">
                <div className="single__background" aria-hidden="true">
                    <div className="single__background--item"></div>
                    <div className="single__background--item">
                        <img src={PostDecorPattern} width="0" height="0" loading="lazy" alt=""/>
                    </div>
                    <div className="single__background--item">
                        <img src={BlogListDecor1} width="0" height="0" loading="lazy" alt=""/>
                    </div>
                </div>
                <div className="single__header">
                    <h1 className="single__header-title section-title">
                        Блог
                    </h1>
                    <div className="single__share">
                        <span>Поделиться:</span>
                        <a href="#" className="single__share--social">
                            <img src={Instagram} width="22" height="22" loading="lazy" alt=""/>
                        </a>
                        <a href="#" className="single__share--social">
                            <img src={Telegram} width="22" height="22" loading="lazy" alt=""/>
                        </a>
                        <button type="button" className="single__share--link copy-btn" data-clipboard-text="Copied text"
                                data-success-copied-message="Скопировано!">
                            Копировать
                        </button>
                    </div>
                </div>
                <div className="single__hero-image image-aspect-ratio">
                    <picture>
                        <img src={PostHeroImg} alt="" width="1200" height="427" loading="lazy"/>
                    </picture>
                </div>
                <h2 className="single__title title">
                    Как начать изучать английский после перерыва: <br/> 5 советов, которые помогут
                </h2>
                <time className="single__date" dateTime="26-09-2023">
                    <svg width="13" height="13" viewBox="0 0 13 13">
                        <use xlinkHref="#calendar-2"></use>
                    </svg>
                    <span>26.09.2023</span>
                </time>
                <div className="single__content">
                    <p>
                        В изучении английского нередко случаются перерывы, иногда они бывают слишком продолжительными.
                        Причины разные: не удавалось справиться с грамматикой, не подошел учитель, неудобная локация
                        курсов и другие.
                    </p>
                    <ul>
                        <li>
                            Первые попытки после паузы часто кажутся кошмарными, поэтому хочется снова сдаться и забыть
                            о своей затее. Но это очень просто. Предлагаем советы, которые помогут вернуть английский в
                            свою жизнь и добиться результатов.
                        </li>
                        <li>
                            Без мотивации всегда сложно. В процессе обучения важно помнить, зачем вам английский и какие
                            возможности он дает. <br/>
                            К примеру, вы планируете поступить за границу, чаще путешествовать, найти новую работу,
                            получить повышение, смотреть новинки кино в оригинале и прочее.
                        </li>
                        <li>
                            Первые попытки после паузы часто кажутся кошмарными, поэтому хочется снова сдаться и забыть
                            о своей затее. Но это очень просто. Предлагаем советы, которые помогут вернуть английский в
                            свою жизнь и добиться результатов.
                        </li>
                    </ul>
                    <div className="single__content--block">
                        <h3>Как начать изучать английский после перерыва: <br/>
                            5 советов, которые помогут
                        </h3>
                        <p>В изучении английского нередко случаются перерывы, иногда они бывают слишком
                            продолжительными. </p>
                        <p>Причины разные: не удавалось справиться с грамматикой, не подошел учитель, неудобная локация
                            курсов и другие.</p>
                        <p>А именно, сложноподчиненное предложение, где одна из частей начинается с if. Эта тема
                            достаточно сложна, ведь типов условных предложений существует целых четыре, однако самое
                            важное, что нужно запомнить: никогда в части из if не может стоять будущее время (с
                            использованием will).</p>
                        <p>Советуем разобраться с Conditional sentences поподробнее, чтобы блеснуть своими знаниями на
                            любом тестировании поанглийскому.</p>
                    </div>
                    <figure>
                        <picture>
                            <img src={PostImg} alt="" width="1200" height="427" loading="lazy"/>
                        </picture>
                    </figure>
                    <ul type="disc">
                        <li>
                            Первые попытки после паузы часто кажутся кошмарными, поэтому хочется снова сдаться и забыть
                            о своей затее. Но это очень просто. Предлагаем советы, которые помогут вернуть английский в
                            свою жизнь и добиться результатов.
                        </li>
                        <li>
                            Без мотивации всегда сложно. В процессе обучения важно помнить, зачем вам английский и какие
                            возможности он дает. <br/>
                            К примеру, вы планируете поступить за границу, чаще путешествовать, найти новую работу,
                            получить повышение, смотреть новинки кино в оригинале и прочее.
                        </li>
                        <li>
                            Первые попытки после паузы часто кажутся кошмарными, поэтому хочется снова сдаться и забыть
                            о своей затее. Но это очень просто. Предлагаем советы, которые помогут вернуть английский в
                            свою жизнь и добиться результатов.
                        </li>
                    </ul>
                </div>
            </section>

            <MainLeaveApplication/>

            <BlogCardSimilar/>
        </div>
    );
}
