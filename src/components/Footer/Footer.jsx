import React from 'react';

import {FooterContacts} from "./components/FooterContacts/FooterContacts";
import {FooterSocial} from "./components/FooterSocial/FooterSocial";
import {NavLink} from "react-router-dom";

import Logo from '../../assets/img/logo.svg'
import Mastercard from '../../assets/img/footer/mastercard.png'
import Visa from '../../assets/img/footer/visa.png'

export const Footer = () => {
    return (
        <footer className="footer container _large">
            <div className="footer__body">
                <div className="footer__container">
                    <NavLink to={'/'} className="footer__logo">
                        <img src={Logo} width="90" height="90" loading="lazy" alt="Logo" className="footer__logo--img"/>
                    </NavLink>
                    <nav className="footer__nav">
                        <ul>
                            <li>
                                <a href="#">
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Копирайтинг
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Договор оферты
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Патент
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <FooterContacts/>

                    <form method="post" className="footer__feedback">
                        <h3>
                            Учителям
                        </h3>
                        <p>
                            Если хотите стать частью нашей дружной команды заполните анкету
                        </p>
                        <label>
                            <input type="tel" name="tel" placeholder="Номер телефона" required/>
                        </label>
                        <button className="btn _min-2" type="submit">
                            Связаться
                        </button>
                    </form>
                    <div className="footer__add">
                        <div className="footer__add--block">
                            <h3>Способы оплаты:</h3>
                            <ul>
                                <li>
                                    <picture>
                                        <img src={Visa} alt="" width="32" height="10" loading="lazy"/>
                                    </picture>
                                </li>
                                <li>
                                    <picture>
                                        <img src={Mastercard} alt="" width="32" height="20" loading="lazy"/>
                                    </picture>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__add--block">
                            <h3>Мы в социальных сетях:</h3>

                            <FooterSocial/>
                        </div>
                    </div>
                </div>
                <div className="footer__privacy">
                    <ul>
                        <li>
                            <a href="#">
                                Политика конфиденциальности
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
