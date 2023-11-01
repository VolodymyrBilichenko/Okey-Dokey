import React from 'react'
import { HeaderStyle } from './Header.styled'

export const Header = () => {
  return (
    // container
    <HeaderStyle>
      <div className="header__body">
        <div className="header__logo">
          <a href="index.html" className="header__logo--link">
            <img src="img/logo.svg" alt="Logo" width="90" height="90" loading="lazy" className="header__logo--img">
          </a>
        </div>
        <nav className="header__nav">
          <div className="header__nav--body">
            <ul className="header__nav--list">
              <li>
                <a href="./#tariffs">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="about-us.html">
                  О нас
                </a>
              </li>
              <li>
                <a href="./#our-teachers">
                  Галерея преподавателей
                </a>
              </li>
              <li>
                <a href="programs.html">
                  Программы
                </a>
              </li>
              <li>
                <a href="./#reviews">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="blog.html">
                  Блог
                </a>
              </li>
              <li>
                <a href="./#faq">
                  Вопрос-ответ
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="header__lang visible-on-mob">
          <button className="header__lang--target" type="button">
            Рус
            <svg width="7" height="5" viewBox="0 0 7 5">
              <use xlink:href="img/sprites.svg#drop-down-arrow"></use>
            </svg>
          </button>
          <ul className="header__lang--list">
            <li>
              <a href="#">
                En
              </a>
            </li>
          </ul>
        </div>
        <div className="header__account visible-on-mob">
          <a href="#" className="header__account--btn" title="Аккаунт">
            <svg width="22" height="22" viewBox="0 0 22 22">
              <use xlink:href="img/sprites.svg#avatar"></use>
            </svg>
          </a>
        </div>
        <div className="header__add visible-on-desktop">
          <div className="header__tel">
            <button className="header__tel--target" type="button">
              <svg width="21" height="21" viewBox="0 0 13 13">
                <use xlink:href="img/sprites.svg#tel"></use>
              </svg>
              <svg width="7" height="5" viewBox="0 0 7 5">
                <use xlink:href="img/sprites.svg#drop-down-arrow"></use>
              </svg>
            </button>
            <div className="header__tel--block">
              <ul className="header__tel--list">
                <li>
                  <a href="tel:+380671111111">
                    +380 (67) - 111 - 11 - 11
                  </a>
                </li>
                <li>
                  <a href="tel:+380981111111">
                    +380 (98) - 111 - 11 - 11
                  </a>
                </li>
              </ul>
              <a href="#feedback-popup" className="header__tel--btn btn _min-2 _transparent open-popup">
                Связаться со мной
              </a>
            </div>
          </div>
          <div className="header__lang">
            <button className="header__lang--target" type="button">
              Рус
              <svg width="7" height="5" viewBox="0 0 7 5">
                <use xlink:href="img/sprites.svg#drop-down-arrow"></use>
              </svg>
            </button>
            <ul class="header__lang--list">
              <li>
                <a href="#">
                  En
                </a>
              </li>
            </ul>
          </div>
          <div class="header__account">
            <a href="#" class="header__account--btn" title="Аккаунт">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <use xlink:href="img/sprites.svg#avatar"></use>
              </svg>
            </a>
          </div>
        </div>
        <button class="header__burger" type="button" aria-label="Menu">
          <p>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </button>
      </div>
    </HeaderStyle>
  )
}
