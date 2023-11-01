import React from 'react';

import ApplicetionPattern from '../../../../assets/img/index/application/application-pattern.svg'

export const MainLeaveApplication = () => {
    return (
        <section className="leave-application container _large">
            <div className="leave-application__background" aria-hidden="true">
                <div className="leave-application__background--decor">
                    <img src={ApplicetionPattern} width="0" height="0" loading="lazy" alt=""/>
                </div>
            </div>
            <div className="leave-application__container">
                <h2 className="leave-application__title section-title _large">
                    Заполнить заявку
                </h2>
                <div className="leave-application__text">
                    <p>
                        Познакомимся, определим уровень владения языка и покажем, как проходит обучение
                    </p>
                </div>
                <form method="post" className="leave-application__form">
                    <label>
                        <span>Введите Ваше имя</span>
                        <input type="text" name="name" placeholder="Имя" required/>
                    </label>
                    <label>
                        <span>Введите Ваш телефон</span>
                        <input type="tel" name="tel" placeholder="+38 (___) ___-__-__" required/>
                    </label>
                    <div className="leave-application__form--footer">
                        <button className="leave-application__form--submit circle-btn" type="submit">
                            Записать
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
