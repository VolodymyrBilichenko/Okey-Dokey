import styled from "styled-components";

export const GlobalStyled = styled.div`
    @use 'sass:math';

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