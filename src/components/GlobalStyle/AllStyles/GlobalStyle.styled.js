import styled from "styled-components";

export const GlobalStyled = styled.div`
    @use 'sass:math';
.header{
      
    position: relative;
    left: 0; top: 0;
    width: 100%;

    //padding-right: var(--popup-padding) !important;

    //transform: translate(0, var(--pos));

    //transition: transform .2s ease;

    //z-index: 2;

    padding-top: var(--container-padding);
  @include _992 {
    padding-top: 0;
  }

    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      border-radius: 150px 0 150px 0;
      background: var(--white);
      border: 1px solid var(--black);
      padding: 4px 33px 4px 23px;
    @include _992 {
      background: transparent;
      border: 0;
      padding: 0;
      border-radius: 0;
    }
    }

    &::before {
      content: '';
      position: absolute;
      left: max(var(--container-padding), calc(50% - #{math.div($container, 2)}px)); bottom: 0;
      transform: translate(-40%,0%);
      width: 140px; aspect-ratio: 1/1;
    @include _992 {
      transform: translate(-55%,30px);
      width: 1086px; height: 1086px; aspect-ratio: none;
    }
      background: var(--primary);
      border-radius: 50%;
      z-index: -1;
    }

    // .header__logo

    &__logo {
      flex: 1 1 auto;
    @include _992 {
      flex: 0 1 auto;
    }
      &--link {
        max-width: 150px;
        position: relative;
        z-index: 4;

      @include _992 {
        order: 1;
        z-index: 0;

        &::before {
          content: '';
          position: absolute;
          left: 50%; top: 50%;
          transform: translate(-55%,-60%);
          width: 175px; height: 175px;
          background: var(--white);
          border-radius: 50%;
          z-index: -1;
        }
      }
      }

      // .header__logo--img

      &--img {

        width: 47px; height: 47px;
        padding: 10px 0 5px;

      @include _992 {
        width: 90px; height: 90px;
      }
        object-fit: contain;
      }
    }

    // .header__nav

    &__nav {
      position: absolute;
      left: 0; top: 0;
      width: max(320px,100%); height: calc(var(--vh, 1svh) * 100);

      background: var(--white);

      overflow-y: auto; overflow-x: hidden;

      opacity: 0; visibility: hidden;

      &._mob-menu-active {
        opacity: 1; visibility: visible;
      }

      transition: opacity .3s ease, visibility .3s ease;

      z-index: 2;

    @include _992 {
      position: static;
      width: auto; height: auto;
      background-color: transparent;
      padding: 0;
      overflow: visible;

      opacity: 1; visibility: visible;

      display: flex;
      justify-content: center;

      flex: 1 1 100%;
      order: 3;

    }

      // .header__nav--body

      &--body {
        position: relative;
        padding: var(--height-header) 0;
        overflow: hidden;
        &::before {
          content: '';
          position: fixed;
          left: 0; top: 0;
          width: 100%; height: var(--height-header);
          background: var(--white);
          z-index: 2;
        }

      @include _992 {

        border: 1px solid var(--black);
        background: var(--white);
        margin: 0 auto;

        padding: 0 40px;
        border-top-left-radius: 70px;
        border-bottom-right-radius: 70px;

        &::before {
          display: none;
        }
      }
      }

      // .header__nav--list

      &--list {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;

        padding-top: 30px;

      @include _992 {
        flex-wrap: wrap;
        align-items: stretch;
        flex-direction: row;

        padding-top: 0;
      }
      }

      &--list > li {
        width: 100%;
        text-align: center;
        position: relative;


      @include _992 {
        width: auto;

        &:not(:first-child) {
          &::before {
            content: '';
            position: absolute;
            left: 0; top: 50%;
            transform: translate(0,-50%);
            width: 1px; height: 15px;
            background: var(--black);
          }
        }
      }

      }

      &--list > li > a {
        width: 100%;

        display: block;
      @include _992 {
        padding: 21px 14.05px;
        margin: 0 10px;
      }
        padding: 10px;
        position: relative;

        color: var(--black);
        overflow: hidden;

        transition: color .2s ease;
        &.is-current {
          color: var(--accent);
          &::before {
            opacity: 1;
          }
        }
        @media (any-hover: hover) {
          &:hover {
            color: var(--accent);
            &::before {
              transform: translate3d(0,0,0.001px);
            }
          }

          &:active {
            color: var(--accent-active);
            &::before {
              transform: translate3d(0,50%,0.001px);
            }
          }
        }

        &::before {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 100%; height: 4px;
          background: var(--accent);
          border-radius: 6px 6px 0 0;

          transition: transform .3s ease;
          transform: translate3d(0,100%,0.001px);

          display: none;

        @include _992 {
          display: block;
        }
        }

      @include _992 {
        width: auto;
      }

      }
    }

    // .header__add

    &__add {
    @include _992 {
      order: 2;
    }

      display: flex;
      align-items: flex-start;

      position: relative;
      z-index: 3;
    }

    // .header__tel

    &__tel {

      position: relative;
      margin-right: 35px;

      @media (any-hover: hover) {
        &:hover &--target {
          filter: drop-shadow(0px 10px 30px rgba(64, 92, 186, 0.50));
          svg:last-child {
            transform: scaleY(-1);
          }
        }

        &:active &--target {
          filter: drop-shadow(0px 0px 30px rgba(64, 92, 186, 0.50));
        }
      }

      // .header__tel--target

      &--target {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60% 15px 15px;

        width: 114px; height: 114px;
        margin-top: -60px;
        border-radius: 50%;

        background: var(--primary);
        color: var(--white);

        @media (any-hover: hover) {
          transition: filter .3s ease;
          &:hover {
            svg:last-child {
              transform: scaleY(-1);
            }
            filter: drop-shadow(0px 10px 30px rgba(64, 92, 186, 0.50));
          }



          &:active {
            filter: drop-shadow(0px 0px 30px rgba(64, 92, 186, 0.30));
          }

          &:hover + * {
            opacity: 1; visibility: visible;
          }
        }

        &.is-active {
          svg:last-child {
            transform: scaleY(-1);
          }
        }

        svg {
          &:nth-child(1) {
            flex: 0 0 21px;
            margin-right: 7px;
          }

          &:nth-child(2) {
            flex: 0 0 7px;
            transition: transform .2s ease;
          }
        }
      }

      &--target.is-active + &--block {
        opacity: 1; visibility: visible;
      }

      // .header__tel--block

      &--block {
        position: absolute;
        right: 20px; top: 100%;
        //width: 240px; height: auto;

        background: var(--white);
        transform: translate(0,-5px);

        opacity: 0; visibility: hidden;

        transition: opacity .3s ease, visibility .3s ease;
        @media (any-hover: hover) {
          &:hover {
            opacity: 1; visibility: visible;
          }
        }

        &::before {
          content: '';
          position: absolute;
          right: 25px; top: 0.5px;
          transform: translate(0,-100%);
          width: 21px; height: 8px;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 21 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_603_4' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='21' height='8'%3E%3Crect width='21' height='8' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_603_4)'%3E%3Cpath d='M32 170C32 175.523 27.5228 180 22 180L-196 180C-201.523 180 -206 175.523 -206 170L-206 17.9411C-206 12.4183 -201.523 7.94115 -196 7.94115L0.293033 7.94113C2.45993 7.94113 4.4656 6.79634 5.56756 4.93056V4.93056C7.93835 0.916469 13.7459 0.916468 16.1166 4.93056V4.93056C17.2186 6.79634 19.2243 7.94113 21.3912 7.94113L32 7.94113L32 170Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A")
          0 0 / contain no-repeat;
        }

        padding: 17px 20px;
        border-radius: 10px;

        box-shadow: 0px 10px 20px rgba(165, 165, 165, 0.25);
      }

      // .header__tel--list

      &--list {
        a {
          display: block;
          white-space: nowrap;

          text-align: center;

          padding: 14px 5px 5px;

          color: var(--black);
          font-weight: 600;
          line-height: 187.5%;

          border-bottom: 1px solid var(--light-4);
          @media (any-hover: hover) {
            transition: color .15s ease;
            &:hover {
              color: var(--accent-hover);
            }

            &:active {
              color: var(--accent-active);
            }
          }
        }
      }

      // .header__tel--btn

      &--btn {
        margin-top: 6px;
        white-space: nowrap;
      }
    }

    // .header__lang

    &__lang {

      position: relative;
      margin-right: 10px;
    @include _992 {
      margin-right: 5px;
    }

      @media (any-hover: hover) {
        &:hover & {
          &--list {
            opacity: 1; visibility: visible;
          }
        }

        &:hover &--target {
          filter: drop-shadow(0px 10px 35px rgba(0, 0, 0, 0.15));
          svg {
            transform: scaleY(-1);
          }
        }

        &:active &--target {
          filter: drop-shadow(0px 0px 35px rgba(0, 0, 0, 0.15));
        }
      }

      // .header__lang--target

      &--target {
        background: transparent;
        color: var(--white);

        display: inline-flex;
        align-items: center;
        justify-content: center;

        position: relative;
        z-index: 2;

        width: 44px; height: 44px;

        font-size: 0.75rem;
        line-height: 100%;

      @include _992 {
        padding: 65% 15px 15px;

        width: 114px; height: 114px;
        margin-top: -60px;

        font-size: 1rem;
      }

        border-radius: 50%;
        background: var(--black);

        @media (any-hover: hover) {
          transition: filter .3s ease;
          &:hover {
            filter: drop-shadow(0px 10px 35px rgba(0, 0, 0, 0.15));
            svg {
              transform: scaleY(-1);
            }
          }

          &:active {
            filter: drop-shadow(0px 0px 35px rgba(0, 0, 0, 0.15));
          }
        }

        svg {
          flex: 0 0 7px;
          margin-left: 5px;
        @include _992 {
          margin-left: 10px;
        }

          transition: transform .2s ease;
        }
      }

      &--target.is-active svg {
        transform: scaleY(-1);
      }

      &--target.is-active + &--list {
        opacity: 1; visibility: visible;
      }

      // .header__lang--list

      &--list {
        position: absolute;
        left: 50%; top: 100%;
        transform: translate(calc(-50% - 6px),-7px);
        background: var(--white);

        padding: 4px 5px;

        transition: opacity .3s ease, visibility .3s ease;
        opacity: 0; visibility: hidden;

        z-index: 2;

        &::before {
          content: '';
          position: absolute;
          right: 5px; top: 0px;
          transform: translate(0,-100%);
          width: 10px; height: 4px;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0_604_20' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='10' height='4'%3E%3Crect width='10' height='4' fill='%23D9D9D9'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_604_20)'%3E%3Cpath d='M15 45C15 50.5228 10.5228 55 5 55L-36 55C-41.5228 55 -46 50.5229 -46 45L-46 13.7719C-46 8.24909 -41.5228 3.77192 -36 3.77192L0.318138 3.77192C1.33356 3.77192 2.27031 3.22513 2.76964 2.34096V2.34096C3.84713 0.433007 6.59515 0.433006 7.67264 2.34096V2.34096C8.17197 3.22513 9.10872 3.77192 10.1241 3.77192L15 3.77192L15 45Z' fill='white'/%3E%3C/g%3E%3C/svg%3E%0A")
          left bottom / contain no-repeat;
        }

        border-radius: 10px 0 10px 10px;
        box-shadow: 0px 10px 20px rgba(165, 165, 165, 0.25);

        a {
          display: block;
          padding: 5px 10px;

          color: var(--black);
          text-align: center;
          font-weight: 600;

          @media (any-hover: hover) {
            transition: color .15s ease;
            &:hover {
              color: var(--accent);
            }

            &:active {
              color: var(--accent-active);
            }
          }
        }
      }
    }

    // .header__account

    &__account {

      position: relative;
      z-index: 2;

      margin-right: 10px;

    @include _992 {
      margin-top: 4px; margin-left: -30px;
      margin-right: 0;
    }

      // .header__account--btn

      &--btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 44px; height: 44px;
      @include _992 {
        width: 71px; height: 71px;
        background: var(--accent);
        color: var(--white);

        svg {
          width: 22px; height: 22px;
        }
      }

        svg {
          width: 15px; height: 15px;
        }

        border-radius: 50%;
        background: transparent;
        border: 1px solid var(--accent);
        color: var(--accent);

        @media (any-hover: hover) {
          transition: filter .3s ease;
          &:hover {
            filter: drop-shadow(0px 10px 25px rgba(251, 59, 83, 0.50));
          }

          &:active {
            filter: drop-shadow(0px 0px 25px rgba(251, 59, 83, 0.50));
          }
        }
      }
    }

    // .header__burger

    &__burger {
      position: relative;

      width: 44px; height: 44px;
      background: var(--accent);
      border-radius: 50%;

      z-index: 4;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
    @include _992 {
      display: none;
    }

      p {
        display: block;
        width: 18px; height: 18px;
        position: relative;
      }

      & span {
        position: absolute;
        right: 0%; top: 50%;

        width: 18px; height: 2px;
        background: var(--white);
        border-radius: 5px;

        transition-duration: .3s;
        transition-timing-function: ease;
        transition-property: transform, top, opacity, visibility;

        &:nth-child(1) {
          transform: translate3d(0%,-350%,0);
        }

        &:nth-child(2) {
          width: 70%;
          transform: translate3d(0%, -50%, 0);
          opacity: 1; visibility: visible;
        }

        &:nth-child(3) {
          transform: translate3d(0%, 250%, 0);
        }
      }

      &._mob-menu-active span {
        &:nth-child(1) {
          top: 50%;
          transform: translate3d(0%, -50%, 0) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0; visibility: hidden;
        }

        &:nth-child(3) {
          top: 50%;
          transform: translate3d(0%, -50%, 0) rotate(-45deg);
        }
      }
    }
  }

    :root {
        --title-font: 'Solomon Sans', sans-serif;
        --main-font: 'Solomon Sans', sans-serif;
        
        --accent: #E40421;
        --accent-hover: #f61d3a;
        --accent-active: #D4112A;
        --primary: #213A8F;
        --primary-active: #152C79;

        --light: #F1F1F1;
        --light-2: #D9D9D9;
        --light-3: #D6D6D6;
        --light-4: #F5F5F5;
        --light-5: #DEDEDE;
        --light-6: #FAFAFA;

        --white: #FFF;
        --black: #000;
        --text-color-1: #252525;
        --text-color-2: #121212;
        --text-color-3: #636363;
        --text-color-4: #292929;

        --container-padding: 20px;
        --negative-container-padding: -20px;
        --gold: #F1CB42;

        --play-icon: #E40421 url("data:image/svg+xml,%3Csvg viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.1086 5.42332L4.15023 2.06173C3.95565 1.95053 3.73508 1.89286 3.51097 1.89457C3.28686 1.89628 3.0672 1.95732 2.87434 2.07148C2.68644 2.17895 2.53034 2.33423 2.42188 2.52155C2.31342 2.70888 2.25648 2.92157 2.25684 3.13803V9.86119C2.25648 10.0776 2.31342 10.2903 2.42188 10.4777C2.53034 10.665 2.68644 10.8203 2.87434 10.9277C3.06722 11.0418 3.28687 11.1029 3.51097 11.1046C3.73507 11.1063 3.95563 11.0486 4.15023 10.9375L10.1086 7.5759C10.3007 7.46945 10.4609 7.31349 10.5724 7.12423C10.6839 6.93496 10.7427 6.71929 10.7427 6.49961C10.7427 6.27993 10.6839 6.06426 10.5724 5.87499C10.4609 5.68572 10.3007 5.52977 10.1086 5.42332Z' fill='white'/%3E%3C/svg%3E%0A");
    }

    html, body {
        font-size: 16px;
        min-height: 100%;
        min-width: 320px;

        //background: var(--primary);
    }

    body {

        font-family: var(--main-font);
        font-weight: 400;
        line-height: 150%;

        &._mob-menu-active {
            overflow: hidden;
        }

        &._popup-active {
            overflow: hidden;
        }
        
    }

    [aria-hidden="true"] {
        user-select: none; pointer-events: none;
    }

    .image-aspect-ratio {
        width: 100%; position: relative;
        padding-top: var(--padding-aspect-ratio);
    }

    .image-aspect-ratio img {
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100%;
        object-fit: cover;
    }

    section {
        position: relative;
        //z-index: 2;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }

    @keyframes fadeIn2 {
        from {
            opacity: 0; visibility: hidden;
        }

        to {
            opacity: 1; visibility: visible;
        }
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
        }
    }

    @keyframes fadeOut2 {
        from {
            opacity: 1; visibility: visible;
        }
        to {
            opacity: 0; visibility: hidden;
        }
    }

    .fade-out {
        animation: fadeOut2 0.3s ease 0s 1 normal forwards;
    }

    .fade-in {
        animation: fadeIn2 0.3s ease 0s 1 normal forwards;
    }

    .wrapper {
        min-height: 100%;

        display: flex;
        flex-direction: column;

        overflow: hidden;
        
        opacity: 0;
        animation: fadeIn 0.3s ease 0.2s 1 normal forwards;
    }

    .account-wrapper {
        @include _992 {
            display: grid;
            grid-template-columns: 293px calc(100% - 293px - 23px - 23px);

            grid-template-rows: 69px;
            grid-auto-rows: min-content;
        }
        
        @include _container {
            grid-template-columns: 363px calc(100% - 363px - 23px - 23px);
        }
        
        gap: 0 40px;

        padding: 30px 23px 0;

        @media(min-width: #{$containerLarge}px) {
            padding: 30px 73px 0;
            grid-template-columns: 363px calc(100% - 363px - 21px - 21px);
        }

        .footer {
            margin-top: 73px;
            grid-column: 1/3;
        }

        .main {
            grid-column: 2; grid-row: 2/3;
        }
    }

    .simplebar-scrollbar::before {
        background: var(--primary);
        top: 0; width: 100%; left: 0;
    }

    .simplebar-scrollbar.simplebar-visible::before {
        opacity: 1;
    }

    .simplebar-track {
        background: #F8F8F8;
        border-radius: 7px;

        &.simplebar-vertical {
            width: 4px;
        }
    }

    .aside {
        grid-column: 1; grid-row: 1/3;
    }

    .header-account {
        grid-column: 2; grid-row: 1;
        align-self: self-start;
    }

    .main {

        flex: 1 0 auto;
        position: relative;

        min-height: 200px;

        display: flex;
        flex-direction: column;

        padding-bottom: 50px;
        @include _992 {
            padding-bottom: 100px;
        }

        &._none-padding-on-mob {
            padding-bottom: 0px;
            @include _992 {
                padding-bottom: 100px;
            }
        }
    }

    .container {
        padding-left: var(--container-padding);
        padding-right: var(--container-padding);
        
        @media (min-width: #{$container}px) {
            padding-left: max(var(--container-padding), calc(50% - #{math.div($container, 2)}px));
            padding-right: max(var(--container-padding), calc(50% - #{math.div($container, 2)}px));

            &._large {
                padding-left: max(var(--container-padding), calc(50% - #{math.div($containerLarge, 2)}px));
                padding-right: max(var(--container-padding), calc(50% - #{math.div($containerLarge, 2)}px));
            }
        }
    }

    .splide__arrow:focus-visible {
        outline: 0;
    }

    .arrow-btn {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 44px; height: 44px;

        @include _768 {
            width: 70px; height: 70px;
        }

        &._super-min {
            width: 34px; height: 34px;
        }

        &._min {
            width: 44px; height: 44px;
        }

        svg {
            width: 30%; height: 30%;
        }

        border-radius: 50%;
        background: var(--accent);
        color: var(--white);

        opacity: 1;

        transition: background .3s ease, opacity .3s ease, box-shadow .3s ease;
        @media (any-hover: hover) {
            &:hover {
                box-shadow: 0px 4px 20px rgba(251, 59, 83, 0.25);
            }
            
            &:active {
                background: var(--accent-active);
                box-shadow: none;
            }
        }
    }

    .btn {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        
        padding: 13.5px 16px;

        background: var(--accent);
        color: var(--white);

        line-height: 116.667%;
        font-size: 0.9375rem;
        font-weight: 700;

        &._alt {
            min-width: 155px; min-height: 44px;
            @include _992 {
                min-width: 186px; min-height: 56px;
            }
        }

        &._min {
            font-size: 0.9375rem;
            padding: 13.5px 26.4px;
        }

        &._min-2 {
            font-size: 0.9375rem;
            padding: 13.5px 30px;
            @include _992 {
                padding: 13.5px 30px;
            }
            &._transparent {
                border: 1px solid var(--accent);
                padding: 11.5px 30px;
                @include _992 {
                    padding: 11.5px 30px;
                }
                background: transparent;
                color: var(--accent);
                @media (any-hover: hover) {
                    &:hover {
                        background: var(--accent);
                        color: var(--white);
                    }
                    
                    &:active {
                        background: var(--accent-active);
                        color: var(--white);
                    }
                }
            }
        }

        @include _550 {
            &._min, &._min-2 {
                font-size: 0.9375rem;
            }
        }
        
        @include _768 {
            font-size: 1rem;
            &._min, &._min-2 {
                font-size: 0.9375rem;
            }
        }
        
        @include _992 {
            font-size: 1.125rem;
            &._min, &._min-2 {
                font-size: 0.9375rem;
            }
        }

        border-radius: 35px;

        transition: background .3s ease, color .3s ease, box-shadow .3s ease;
        @media (any-hover: hover) {
            &:hover {
                box-shadow: 0px 10px 25px rgba(228, 5, 33, 0.35);
            }
            
            &:active {
                background: var(--accent-active);
                box-shadow: none;
            }
        }
    }

    .copy-btn {
        position: relative;
        &::before {
            content: attr(data-success-copied-message);
            position: absolute;
            left: 50%; top: 100%;
            transform: translate(-50%,5px);
            background: var(--white);
            padding: 7px 10px;
            border-radius: 5px;
            box-shadow: 0 0 15px -5px rgba(0,0,0,0.15);

            font-size: 0.875rem;
            line-height: 100%;
            color: var(--black);
            font-weight: 400;

            pointer-events: none;
            opacity: 0;

            z-index: 2;
        }

        &.is-copied::before {
            opacity: 1;
            animation: fadeOut 1s ease 1s 1 normal forwards;
        }
    }

    .circle-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 12px 7px 7px; aspect-ratio: 1/1;
        @include _768 {
            padding: 15px 30px;
        }

        border-radius: 50%;
        background: var(--white);
        text-align: center;
        &._accent {
            background: var(--accent);
            color: var(--white)
        }
        border: 3px solid var(--accent);

        color: var(--accent);
        font-size: 0.875rem;
        
        @include _768 {
            font-size: 1rem;
        }
        
        @include _992 {
            font-size: 1.125rem;
        }
        font-weight: 700;
        line-height: 116.667%;

        transition: background .3s ease, color .2s ease, box-shadow .3s ease, border-color .3s ease;
        @media (any-hover: hover) {
            
            &:not(._accent) {
                &:hover {
                    color: var(--white);
                    background: var(--accent);
                    box-shadow: 0px 4px 20px rgba(251, 59, 83, 0.25);
                }
                &:active {
                    color: var(--white);
                    background: var(--accent-active);
                    box-shadow: none;
                    border-color: var(--accent-active);
                }
            }

            &._accent {
                &:hover {
                    box-shadow: 0px 4px 20px rgba(251, 59, 83, 0.25);
                }
                
                &:active {
                    background: var(--accent-active);
                    box-shadow: none;
                    border-color: var(--accent-active);
                }
            }
            
            
        }
    }

    .visually-hidden {
        position: absolute;
        width: 1px; height: 1px;
        margin: -1px; padding: 0;
        border: 0;
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }

    .visible-on-mob {
        @include _992 {
            display: none;
        }
    }

    .visible-on-desktop {
        @media (max-width: 991px) {
            display: none;
        }
    }

    .splide__arrow--prev svg {
        transform: none;
    }

    .circle-progress {
        width: 77px; height: 77px;
        &.is-min {
            width: 60px; height: 60px;

            > svg {
                width: 60px; height: 60px;

                circle:last-of-type {
                    stroke-width: 3;
                    stroke-dasharray: 170px;
                    stroke-dashoffset: calc(170px - (170px * var(--percent)) / 100);
                    stroke: var(--theme); 
                }
            }
        }
        position: relative;

        &::before {
            content: '';
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%,calc(-50% + 1px));
            width: calc(100% + 10px); height: calc(100% + 10px);
            border-radius: 50%;
            background: var(--theme);
            border-radius: 50%;
            opacity: .05;
        }

        > svg {
            width: 77px; height: 77px;

            transform: scaleY(-1);

            circle {
                width: 100%; height: 100%;
                fill: none;
                stroke: #FFF;
                stroke-width: 2;
                stroke-linecap: round;
            }

            circle:last-of-type {
                stroke-width: 4;
                stroke-dasharray: 220px;
                stroke-dashoffset: calc(220px - (220px * var(--percent)) / 100);
                stroke: var(--theme); 
            }
        }
    }

    .simplebar-track {
        background: var(--white);
    }

    .simplebar-scrollbar::before {
        bottom: 0; right: 0;
    }

    .simplebar-track.simplebar-horizontal {
        height: 7px;
    }
`