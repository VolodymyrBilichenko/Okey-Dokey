import React from 'react';

import AboutUsArticleImg3 from '../../../../assets/img/about-us/articles/about-us-article-image-3.jpg'
import AboutUsArticleImg4 from '../../../../assets/img/about-us/articles/about-us-article-image-4.jpg'
import AboutUsArticleImg5 from '../../../../assets/img/about-us/articles/about-us-article-image-5.jpg'

export const AboutUsContentReverse = () => {
    return (
        <section className="content-section container _reverse">
            <div className="content-section__images">
                <div className="content-section__images--item _full">
                    <div>
                        <picture>
                            <img src={AboutUsArticleImg3} alt="" width="278" height="472" loading="lazy"/>
                        </picture>
                    </div>
                </div>
                <div className="content-section__images--item _min">
                    <div>
                        <picture>
                            <img src={AboutUsArticleImg4} alt="" width="278" height="472" loading="lazy"/>
                        </picture>
                    </div>
                </div>
                <div className="content-section__images--item _min">
                    <div>
                        <picture>
                            <img src={AboutUsArticleImg5} alt="" width="278" height="472" loading="lazy"/>
                        </picture>
                    </div>
                </div>
            </div>
            <div className="content-section__text">
                <h2>Инновационный подход</h2>
                <p>Направленных на развитие эмоционального интеллекта, командного духа и здоровой уверенности в
                    себе.</p>
                <p>Мы обучаем наших студентов по коммуникативной методике - все, что изучают студенты, сразу же
                    применяется в разговорной речи, ведь студенты изучают слова и фразы, которые понадобятся им в
                    реальной жизни. </p>
                <p>Мы являемся официальными партнерами всемирно известного издательства Cambridge (английские учебники)
                    и Hueber <br/> (книги по изучению немецкого языка).</p>
                <p>Мы обучаем наших студентов по коммуникативной методике - все, что изучают студенты, сразу же
                    применяется в разговорной речи, ведь студенты изучают слова и фразы, которые понадобятся им в
                    реальной жизни. </p>
            </div>
        </section>
    );
}
