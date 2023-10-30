import styled from "styled-components";

export const PopUp = styled.div`
  body {
    padding-right: var(--popup-padding);
  }

  .popup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    padding: 10px;

    z-index: 6;

    opacity: 0;
    visibility: hidden;
    transition: opacity .4s ease, visibility .4s ease;

    backdrop-filter: blur(5px);

    &._transition-none {
      transition: none;
    }

    &._transition-none &-body {
      transition: none;
    }

    &._active._transition-none &-body {
      transition: none;
    }

    will-change: opacity, visibility;

    &._active {
      opacity: 1;
      visibility: visible;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;

      min-height: 100%;
      width: 100%;

      z-index: 2;
    }

    &-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      background: rgba(27, 27, 27, 0.7);

    }

    &-body {
      margin: auto;
      position: relative;
      background: white;

      overflow-y: auto;
      max-height: calc(var(--svh, 1vh) - 30px);
      max-height: calc(100svh - 30px);
      max-width: 700px;
      width: 100%;

      padding: 15px;
    @include _550 {
      padding: 30px;
    } border-radius: 14px;

      z-index: 2;
    }

    &-close-btn {
      position: absolute;
      right: 15px;
      top: 15px;
      line-height: 100%;
      width: 40px;
      height: 40px;

      & svg {
        width: 50%;
      }

      background: white;
    }
  }

  .feedback-popup {

    backdrop-filter: blur(5px);

    // .feedback-popup__wrapper

    &__wrapper {
    }

    // .feedback-popup__bg

    &__bg {

    }

    // .feedback-popup__body

    &__body {
      max-width: 528px;
      background: var(--white);
      border-radius: 30px;

      padding: 16px;

    @include _550 {
      padding: 23px 29px 30px;
    }
    }

    // .feedback-popup__close-btn

    &__close-btn {
      border-radius: 5px;
      background: #EFEFEF;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 45px;
      height: 45px;

      top: 16px;
      right: 16px;
    @include _550 {
      top: 23px;
      right: 29px;
    }

      svg {
        width: 18px;
        height: 16px;
        color: var(--primary);
      }
    }

    // .feedback-popup__title

    &__title {

      padding-top: 65px;

      font-size: 1rem;
      font-weight: 700;
      line-height: 140%;
      text-align: center;

    @include _550 {
      font-size: 1.125rem;
    } @include _992 {
      font-size: 1.25rem;
    }
    }

    // .feedback-popup__form

    &__form {
      margin-top: 16px;

      display: flex;
      align-items: center;
      flex-direction: column;

      padding: 27px 30px;

      background: var(--primary);
      border-radius: 30px;

      .btn {
        margin-top: 21px;
        min-width: 186px;
        min-height: 56px;
      }

      label {

        width: 100%;

        &:not(:first-child) {
          margin-top: 23px;
        }

        display: flex;
        flex-direction: column;

        span {

          font-size: 1rem;

        @include _550 {
          font-size: 1.125rem;
        } @include _992 {
          font-size: 1.25rem;
        } color: var(--white);
          line-height: 130%;
        }

        input {
          min-height: 60px;
          background: var(--white);
          padding: 16px 19px;
          border-radius: 7px;
          margin-top: 5px;
        }


      }
    }
  }

  .delivery-product {

    // .delivery-product__wrapper

    &__wrapper {

    }

    // .delivery-product__bg

    &__bg {
    }

    // .delivery-product__body

    &__body {
      position: relative;
      max-height: none;

      border-radius: 30px;

      padding: 15px;

    @include _550 {
      padding: 30px;
    }
    }

    // .delivery-product__background

    &__background {

      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 30px;

      z-index: -1;
      overflow: hidden;

      // .delivery-product__background--item

      &--item {
        position: absolute;

        &:nth-child(1) {
          left: 0;
          top: 0;
          transform: translate(-30%, -0%);

          img {
            width: min(30vw, 166px);
            height: auto;
          }
        }

        &:nth-child(2) {
          right: 0;
          top: 50%;
          transform: translate(20%, 0%);
        @include _550 {
          transform: translate(20%, -50%);
        }

          img {
            width: min(70vw, 400px);
            height: auto;
          }
        }
      }
    }

    // .delivery-product__close-btn

    &__close-btn {
      width: 44px;
      height: 44px;
      border: 1px solid #DEDEDE;
      border-radius: 7px;

    @include _550 {
      top: 30px;
      right: 30px;
    } display: inline-flex;
      align-items: center;
      justify-content: center;

      color: var(--primary);
    }

    // .delivery-product__container

    &__container {
      overflow-y: auto;
      max-height: calc(var(--svh, 1vh) - 90px);
      max-height: calc(100svh - 90px);

      display: flex;
      flex-direction: column;
    }

    // .delivery-product__title

    &__title {
      padding-top: 50px;

      color: #232323;
      text-align: center;
      font-size: 1.875rem;
      font-weight: 700;
      line-height: 106.667%;
    }

    // .delivery-product__selected

    &__selected {

      max-width: 331px;
      align-self: center;
      margin: 17px auto 0;

      padding: 23px;

      background: #F9F9F9;
      border-radius: 7px;

      display: inline-flex;
      align-items: center;
      flex-direction: column;

    @include _550 {
      display: flex;
      flex-direction: row;
    }

      > b {
        color: #232323;
        font-size: 1.125rem;

      @include _768 {
        font-size: 1.25rem;
      } font-weight: 600;
        line-height: 130%;

        padding-right: 11px;
      }

      // .delivery-product__selected--list

      &--list {
      }

      // .delivery-product__selected--product

      &--product {
        display: inline-flex;
        flex-direction: column;

        margin-top: 28px;

      @include _550 {
        margin-top: 0;

        display: grid;
        grid-template-columns: 62px auto;
        gap: 0 12px;
      } text-align: center;

        > span {
          align-self: self-end;
        }

        > b {
          align-self: self-start;
          margin-top: 6px;

          font-weight: 700;
          font-size: 0.875rem;
          line-height: 100%;

          width: 100%;
          padding: 5px;
          border-radius: 5px;

          background: rgba(220, 220, 220, 0.15);

          svg {
            color: var(--primary);
            flex: 0 0 12px;
            margin-right: 2px;
          }
        }
      }

      // .delivery-product__selected--image

      &--image {
        border: 1px solid #F2F2F2;
        border-radius: 10px;
        background: var(--white);

        padding: 3px;

        position: relative;

        grid-column: 1;
        grid-row: 1/3;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 5px;

        img {

          min-width: 79px;
          min-height: 97px;
        @include _550 {
          min-width: none;
          min-height: none;
        }

        }

      @include _550 {
        margin-bottom: 0;
        min-width: none;
      }
      }

      // .delivery-product__selected--close

      &--close {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(50%, -50%);
        width: 44px;
        height: 44px;
      @include _550 {
        width: 20px;
        height: 20px;
      } border: 1px solid var(--primary);
        background: var(--white);
        color: var(--primary);

        display: inline-flex;
        align-items: center;
        justify-content: center;

        border-radius: 5px;

        svg {
          margin-bottom: 1px;
          width: 45%;
          height: 45%;
        }
      }
    }

    // .delivery-product__form

    &__form {
      padding-top: 11px;
    @include _550 {
      padding-top: 54px;
    } max-width: 525px;
      margin: 0 auto;
      width: 100%;

      display: flex;
      flex-direction: column;

      .btn {
        align-self: center;
        margin-top: 17px;
      }

      h3 {
        font-size: 1rem;

      @include _550 {
        font-size: 1.125rem;
      } @include _768 {
        font-size: 1.25rem;
      } line-height: 160%;
        font-weight: 600;
      }

      label {
        padding-top: 14px;
        padding-bottom: 0;
      @include _550 {
        padding-top: 17px;
        padding-bottom: 10px;
      }

        span {
          display: block;
          padding-bottom: 12px;

          font-size: 0.9375rem;

        @include _550 {
          font-size: 1.125rem;
        } @include _768 {
          font-size: 1.25rem;
        } line-height: 130%;

        }

        input {
          width: 100%;
          padding: 9px 14px;
        @include _550 {
          padding: 18px 19px;
        } font-size: 0.9375rem;
        @include _768 {
          font-size: 1.125rem;
        } line-height: 150%;

          border: 1px solid #DEDEDE;
          border-radius: 7px;
        }
      }
    }
  }

  .close-btn {
    background: var(--white);
    color: var(--primary);
    border-radius: 5px;
    border: 1px solid #DEDEDE;

    transition: color .2s ease, background .2s ease;

    @media (any-hover: hover) {
      &:hover {
        background: #DEDEDE;
        color: #535353;
      }

      &:active {
        background: #DEDEDE;
        color: #535353;
      }
    }
  }

  .final-test {

    // .final-test__wrapper

    &__wrapper {
    }

    // .final-test__bg

    &__bg {
    }

    // .final-test__body

    &__body {
      position: relative;
    @include _992 {
      min-height: calc(100svh - 60px);
    } overflow: hidden;
      background: transparent;

      display: flex;
      flex-direction: column;
      justify-content: center;

      border-radius: 30px;

      padding: 15px;

    @include _550 {
      padding: 30px;
    } max-width: 1145px;
      border-radius: 20px;

      @media screen {

      }
      @media (min-height: 700px) and (min-width: 992px) {
        min-height: 624px;
      }
    }

    // .final-test__close-btn

    &__close-btn {
    @include _550 {
      top: 30px;
      right: 30px;
    }
    }

    // .final-test__logo

    &__logo {
      width: 103px;
      height: 103px;
    @include _992 {
      width: 161px;
      height: 161px;
      left: 53px;
      top: -30px;

      padding-bottom: 25px;
      padding-left: 0;

      img {
        width: 90px;
        height: 90px;
      }
    }

      img {
        width: 60px;
        height: 60px;
        object-fit: contain;
      }

      position: absolute;
      left: -20px;
      top: -20px;
      border-radius: 50%;
      background: var(--white);

      display: flex;
      align-items: flex-end;
      justify-content: center;

      padding-bottom: 15px;
      padding-left: 10px;
    }

    // .final-test__background

    &__background {

      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 20px;
      overflow: hidden;
      background: var(--primary);
      z-index: -1;

      // .final-test__background--item

      &--item {
        position: absolute;

        &:nth-child(1) {
          right: 15%;
          top: 85px;

          img {
            width: 184px;
            height: auto;
          }

        @include _992 {
          right: 15%;
          top: 31px;
          transform: translate(0%, -30%);

          img {
            width: 266px;
            height: auto;
          }
        }

          @media (min-height: 700px) and (min-width: 992px) {
            right: 15%;
            top: 31px;
            transform: translate(0%, 0%);
            img {
              width: 366px;
              height: auto;
            }
          }
        }

        &:nth-child(2) {
          left: 0;
          bottom: 0;
          opacity: .35;
          transform: translate(-25%, 30%);
          z-index: -1;

          img {
            width: min(65vw, 600px);
            height: auto;
          }
        }
      }
    }

    // .final-test__container

    &__container {
      overflow-y: auto;
      max-height: calc(var(--svh, 1vh) - 120px);
      max-height: calc(100svh - 120px);

    @include _992 {
      padding-top: 0;
      padding-bottom: 0;
    } padding-top: 200px;
      padding-bottom: 20px;

      @media (min-height: 700px) {
        margin-top: 150px;
      }

      text-align: center;
    }

    // .final-test__title

    &__title {
      color: #FFF;
      text-align: center;
      font-size: 2.1875rem;

    @include _550 {
      font-size: 3rem;
    } @include _768 {
      font-size: 4rem;
    } @include _992 {
      font-size: 4.375rem;
    } font-weight: 600;
      line-height: 100%;
    }

    // .final-test__text

    &__text {
      margin-top: 10px;

      font-size: 1.375rem;

    @include _992 {
      font-size: 2rem;
    } line-height: 140.625%;
      color: var(--white);
      text-align: center;

      b {
        font-weight: 600;
      }
    }
  }
`