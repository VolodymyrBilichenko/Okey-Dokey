import React from 'react';

import Logo from '../../assets/img/logo.svg'
import Facebook from '../../assets/img/social/facebook.svg'
import Instagram from '../../assets/img/social/instagram.svg'
import Mastercard from '../../assets/img/footer/mastercard.png'
import Visa from '../../assets/img/footer/visa.png'
export const Footer = () => {
  return (
      <footer className="footer container _large">
          <div className="footer__body">
              <div className="footer__container">
                  <a href="index.html" className="footer__logo">
                      <img src={Logo} width="90" height="90" loading="lazy" alt="Logo" className="footer__logo--img"/>
                  </a>
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
                  <ul className="footer__contacts">
                      <li>
                          <a href="tel:+380671232323">
                              <i>
                                  <svg width="13" height="13" viewBox="0 0 13 13">
                                      <use xlinkHref="#tel"></use>
                                  </svg>
                              </i>
                              <span>
									+38 (067) - 123 - 23 - 23
								</span>
                          </a>
                      </li>
                      <li>
                          <a href="tel:+380681232323">
                              <i>
                                  <svg width="13" height="13" viewBox="0 0 13 13">
                                      <use xlinkHref="#tel"></use>
                                  </svg>
                              </i>
                              <span>
									+38 (068) - 123 - 23 - 23
								</span>
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i>
                                  <svg width="15" height="15" viewBox="0 0 15 15">
                                      <use xlinkHref="#map-point"></use>
                                  </svg>
                              </i>
                              <span>
									г.Днепр, ул.Глаголева 21
								</span>
                          </a>
                      </li>
                  </ul>
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
                          <ul>
                              <li>
                                  <a href="#" title="Instagram">
                                      <img src={Instagram} alt="" width="18" height="18" loading="lazy"/>
                                  </a>
                              </li>
                              <li>
                                  <a href="#" title="Facebook">
                                      <img src={Facebook} alt="" width="18" height="18" loading="lazy"/>
                                  </a>
                              </li>
                          </ul>
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
