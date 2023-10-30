import styled from "styled-components";

export const Libs = styled.div`
  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

  /* Document
     ========================================================================== */

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  /* Sections
     ========================================================================== */

  /**
   * Remove the margin in all browsers.
   */

  body {
    margin: 0;
  }

  /**
   * Render the \`main\` element consistently in IE.
   */

  main {
    display: block;
  }

  /**
   * Correct the font size and margin on \`h1\` elements within \`section\` and
   * \`article\` contexts in Chrome, Firefox, and Safari.
   */

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  /* Grouping content
     ========================================================================== */

  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
     ========================================================================== */

  /**
   * Remove the gray background on active links in IE 10.
   */

  a {
    background-color: transparent;
  }

  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Correct the inheritance and scaling of font size in all browsers.
   * 2. Correct the odd \`em\` font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /**
   * Prevent \`sub\` and \`sup\` elements from affecting the line height in
   * all browsers.
   */

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content
     ========================================================================== */

  /**
   * Remove the border on images inside links in IE 10.
   */

  img {
    border-style: none;
  }

  /* Forms
     ========================================================================== */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * Remove the inner border and padding in Firefox.
   */

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  /**
   * Restore the focus styles unset by the previous rule.
   */

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /**
   * Correct the padding in Firefox.
   */

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from \`fieldset\` elements in IE.
   * 3. Remove the padding so developers are not caught out when they zero out
   *    \`fieldset\` elements in all browsers.
   */

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    vertical-align: baseline;
  }

  /**
   * Remove the default vertical scrollbar in IE 10+.
   */

  textarea {
    overflow: auto;
  }

  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to \`inherit\` in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Interactive
     ========================================================================== */

  /*
   * Add the correct display in Edge, IE 10+, and Firefox.
   */

  details {
    display: block;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* Misc
     ========================================================================== */

  /**
   * Add the correct display in IE 10+.
   */

  template {
    display: none;
  }

  /**
   * Add the correct display in IE 10.
   */

  [hidden] {
    display: none;
  }

  .splide__container {
    box-sizing: border-box;
    position: relative
  }

  .splide__list {
    backface-visibility: hidden;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important
  }

  .splide.is-initialized:not(.is-active) .splide__list {
    display: block
  }

  .splide__pagination {
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0;
    pointer-events: none
  }

  .splide__pagination li {
    display: inline-block;
    line-height: 1;
    list-style-type: none;
    margin: 0;
    pointer-events: auto
  }

  .splide:not(.is-overflow) .splide__pagination {
    display: none
  }

  .splide__progress__bar {
    width: 0
  }

  .splide {
    position: relative;
    visibility: hidden
  }

  .splide.is-initialized, .splide.is-rendered {
    visibility: visible
  }

  .splide__slide {
    backface-visibility: hidden;
    box-sizing: border-box;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    list-style-type: none !important;
    margin: 0;
    position: relative
  }

  .splide__slide img {
    vertical-align: bottom
  }

  .splide__spinner {
    animation: splide-loading 1s linear infinite;
    border: 2px solid #999;
    border-left-color: transparent;
    border-radius: 50%;
    bottom: 0;
    contain: strict;
    display: inline-block;
    height: 20px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px
  }

  .splide__sr {
    clip: rect(0 0 0 0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px
  }

  .splide__toggle.is-active .splide__toggle__play, .splide__toggle__pause {
    display: none
  }

  .splide__toggle.is-active .splide__toggle__pause {
    display: inline
  }

  .splide__track {
    overflow: hidden;
    position: relative;
    z-index: 0
  }

  @keyframes splide-loading {
    0% {
      transform: rotate(0)
    }
    to {
      transform: rotate(1turn)
    }
  }

  .splide__track--draggable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  .splide__track--fade > .splide__list > .splide__slide {
    margin: 0 !important;
    opacity: 0;
    z-index: 0
  }

  .splide__track--fade > .splide__list > .splide__slide.is-active {
    opacity: 1;
    z-index: 1
  }

  .splide--rtl {
    direction: rtl
  }

  .splide__track--ttb > .splide__list {
    display: block
  }

  .splide__arrow {
    -ms-flex-align: center;
    align-items: center;
    background: #ccc;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    display: -ms-flexbox;
    display: flex;
    height: 2em;
    -ms-flex-pack: center;
    justify-content: center;
    opacity: .7;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 2em;
    z-index: 1
  }

  .splide__arrow svg {
    fill: #000;
    height: 1.2em;
    width: 1.2em
  }

  .splide__arrow:hover:not(:disabled) {
    opacity: .9
  }

  .splide__arrow:disabled {
    opacity: .3
  }

  .splide__arrow:focus-visible {
    outline: 3px solid #0bf;
    outline-offset: 3px
  }

  .splide__arrow--prev {
    left: 1em
  }

  .splide__arrow--prev svg {
    transform: scaleX(-1)
  }

  .splide__arrow--next {
    right: 1em
  }

  .splide.is-focus-in .splide__arrow:focus {
    outline: 3px solid #0bf;
    outline-offset: 3px
  }

  .splide__pagination {
    bottom: .5em;
    left: 0;
    padding: 0 1em;
    position: absolute;
    right: 0;
    z-index: 1
  }

  .splide__pagination__page {
    background: #ccc;
    border: 0;
    border-radius: 50%;
    display: inline-block;
    height: 8px;
    margin: 3px;
    opacity: .7;
    padding: 0;
    position: relative;
    transition: transform .2s linear;
    width: 8px
  }

  .splide__pagination__page.is-active {
    background: #fff;
    transform: scale(1.4);
    z-index: 1
  }

  .splide__pagination__page:hover {
    cursor: pointer;
    opacity: .9
  }

  .splide__pagination__page:focus-visible {
    outline: 3px solid #0bf;
    outline-offset: 3px
  }

  .splide.is-focus-in .splide__pagination__page:focus {
    outline: 3px solid #0bf;
    outline-offset: 3px
  }

  .splide__progress__bar {
    background: #ccc;
    height: 3px
  }

  .splide__slide {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
  }

  .splide__slide:focus {
    outline: 0
  }

  @supports (outline-offset:-3px) {
    .splide__slide:focus-visible {
      outline: 3px solid #0bf;
      outline-offset: -3px
    }
  }
  @media screen and (-ms-high-contrast: none) {
    .splide__slide:focus-visible {
      border: 3px solid #0bf
    }
  }
  @supports (outline-offset:-3px) {
    .splide.is-focus-in .splide__slide:focus {
      outline: 3px solid #0bf;
      outline-offset: -3px
    }
  }
  @media screen and (-ms-high-contrast: none) {
    .splide.is-focus-in .splide__slide:focus {
      border: 3px solid #0bf
    }

    .splide.is-focus-in .splide__track > .splide__list > .splide__slide:focus {
      border-color: #0bf
    }
  }

  .splide__toggle {
    cursor: pointer
  }

  .splide__toggle:focus-visible {
    outline: 3px solid #0bf;
    outline-offset: 3px
  }

  .splide.is-focus-in .splide__toggle:focus {
    outline: 3px solid #0bf;
    outline-offset: 3px
  }

  .splide__track--nav > .splide__list > .splide__slide {
    border: 3px solid transparent;
    cursor: pointer
  }

  .splide__track--nav > .splide__list > .splide__slide.is-active {
    border: 3px solid #000
  }

  .splide__arrows--rtl .splide__arrow--prev {
    left: auto;
    right: 1em
  }

  .splide__arrows--rtl .splide__arrow--prev svg {
    transform: scaleX(1)
  }

  .splide__arrows--rtl .splide__arrow--next {
    left: 1em;
    right: auto
  }

  .splide__arrows--rtl .splide__arrow--next svg {
    transform: scaleX(-1)
  }

  .splide__arrows--ttb .splide__arrow {
    left: 50%;
    transform: translate(-50%)
  }

  .splide__arrows--ttb .splide__arrow--prev {
    top: 1em
  }

  .splide__arrows--ttb .splide__arrow--prev svg {
    transform: rotate(-90deg)
  }

  .splide__arrows--ttb .splide__arrow--next {
    bottom: 1em;
    top: auto
  }

  .splide__arrows--ttb .splide__arrow--next svg {
    transform: rotate(90deg)
  }

  .splide__pagination--ttb {
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    left: auto;
    padding: 1em 0;
    right: .5em;
    top: 0
  }

  :root {
    --ss-primary-color: #5897fb;
    --ss-bg-color: #ffffff;
    --ss-font-color: #4d4d4d;
    --ss-font-placeholder-color: #8d8d8d;
    --ss-disabled-color: #dcdee2;
    --ss-border-color: #dcdee2;
    --ss-highlight-color: #fffb8c;
    --ss-success-color: #00b755;
    --ss-error-color: #dc3545;
    --ss-main-height: 30px;
    --ss-content-height: 300px;
    --ss-spacing-l: 7px;
    --ss-spacing-m: 5px;
    --ss-spacing-s: 3px;
    --ss-animation-timing: 0.2s;
    --ss-border-radius: 4px
  }

  @keyframes ss-valueIn {
    0% {
      transform: scale(0);
      opacity: 0
    }
    100% {
      transform: scale(1);
      opacity: 1
    }
  }
  @keyframes ss-valueOut {
    0% {
      transform: scale(1);
      opacity: 1
    }
    100% {
      transform: scale(0);
      opacity: 0
    }
  }

  .ss-hide {
    display: none !important
  }

  .ss-main {
    display: flex;
    flex-direction: row;
    position: relative;
    user-select: none;
    color: var(--ss-font-color);
    min-height: var(--ss-main-height);
    width: 100%;
    padding: var(--ss-spacing-s);
    cursor: pointer;
    border: 1px solid var(--ss-border-color);
    border-radius: var(--ss-border-radius);
    background-color: var(--ss-bg-color);
    outline: 0;
    box-sizing: border-box;
    transition: background-color var(--ss-animation-timing);
    overflow: hidden
  }

  .ss-main:focus {
    box-shadow: 0 0 5px var(--ss-primary-color)
  }

  .ss-main.ss-disabled {
    background-color: var(--ss-disabled-color);
    cursor: not-allowed
  }

  .ss-main.ss-disabled .ss-values .ss-disabled {
    color: var(--ss-font-color)
  }

  .ss-main.ss-disabled .ss-values .ss-value .ss-value-delete {
    cursor: not-allowed
  }

  .ss-main.ss-open-above {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px
  }

  .ss-main.ss-open-below {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px
  }

  .ss-main .ss-values {
    display: inline-flex;
    flex-wrap: wrap;
    gap: var(--ss-spacing-m);
    flex: 1 1 100%
  }

  .ss-main .ss-values .ss-placeholder {
    display: flex;
    padding: var(--ss-spacing-s) var(--ss-spacing-m) var(--ss-spacing-s) var(--ss-spacing-m);
    margin: auto 0px auto 0px;
    line-height: 1em;
    align-items: center;
    width: 100%;
    color: var(--ss-font-placeholder-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .ss-main .ss-values .ss-max {
    display: flex;
    user-select: none;
    align-items: center;
    width: fit-content;
    font-size: 12px;
    color: var(--ss-bg-color);
    line-height: 1;
    padding: var(--ss-spacing-s) var(--ss-spacing-m);
    background-color: var(--ss-primary-color);
    border-radius: var(--ss-border-radius)
  }

  .ss-main .ss-values .ss-single {
    display: flex;
    margin: auto 0px auto var(--ss-spacing-s)
  }

  .ss-main .ss-values .ss-value {
    display: flex;
    user-select: none;
    align-items: center;
    width: fit-content;
    background-color: var(--ss-primary-color);
    border-radius: var(--ss-border-radius);
    animation-name: ss-valueIn;
    animation-duration: var(--ss-animation-timing);
    animation-timing-function: ease-out;
    animation-fill-mode: both
  }

  .ss-main .ss-values .ss-value.ss-value-out {
    animation-name: ss-valueOut;
    animation-duration: var(--ss-animation-timing);
    animation-timing-function: ease-out
  }

  .ss-main .ss-values .ss-value .ss-value-text {
    font-size: 12px;
    color: var(--ss-bg-color);
    line-height: 1;
    padding: var(--ss-spacing-s) var(--ss-spacing-m)
  }

  .ss-main .ss-values .ss-value .ss-value-delete {
    display: flex;
    align-items: center;
    height: var(--ss-spacing-l);
    width: var(--ss-spacing-l);
    padding: var(--ss-spacing-s) var(--ss-spacing-m);
    cursor: pointer;
    border-left: solid 1px var(--ss-bg-color);
    box-sizing: content-box
  }

  .ss-main .ss-values .ss-value .ss-value-delete svg {
    height: var(--ss-spacing-l);
    width: var(--ss-spacing-l)
  }

  .ss-main .ss-values .ss-value .ss-value-delete svg path {
    fill: none;
    stroke: var(--ss-bg-color);
    stroke-width: 18;
    stroke-linecap: round;
    stroke-linejoin: round
  }

  .ss-main .ss-deselect {
    display: flex;
    align-self: center;
    justify-content: flex-end;
    flex: 0 1 auto;
    width: 8px;
    height: 8px;
    margin: 0 var(--ss-spacing-m) 0 var(--ss-spacing-m)
  }

  .ss-main .ss-deselect svg {
    width: 8px;
    height: 8px
  }

  .ss-main .ss-deselect svg path {
    fill: none;
    stroke: var(--ss-font-color);
    stroke-width: 20;
    stroke-linecap: round;
    stroke-linejoin: round
  }

  .ss-main .ss-arrow {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 1 auto;
    width: 12px;
    height: 12px;
    margin: auto var(--ss-spacing-m) auto var(--ss-spacing-m)
  }

  .ss-main .ss-arrow path {
    fill: none;
    stroke: var(--ss-font-color);
    stroke-width: 18;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition-timing-function: ease-out;
    transition: var(--ss-animation-timing)
  }

  .ss-content {
    position: absolute;
    display: flex;
    height: auto;
    flex-direction: column;
    width: auto;
    max-height: var(--ss-content-height);
    box-sizing: border-box;
    border: solid 1px var(--ss-border-color);
    background-color: var(--ss-bg-color);
    transition: transform var(--ss-animation-timing), opacity var(--ss-animation-timing);
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
    overflow: hidden;
    z-index: 10000
  }

  .ss-content.ss-relative {
    position: relative;
    height: 100%
  }

  .ss-content.ss-open-above {
    flex-direction: column-reverse;
    opacity: 1;
    transform: scaleY(1);
    transform-origin: center bottom;
    border-top-left-radius: var(--ss-border-radius);
    border-top-right-radius: var(--ss-border-radius)
  }

  .ss-content.ss-open-below {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: center top;
    border-bottom-left-radius: var(--ss-border-radius);
    border-bottom-right-radius: var(--ss-border-radius)
  }

  .ss-content .ss-search {
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    padding: var(--ss-spacing-l) var(--ss-spacing-l) var(--ss-spacing-m) var(--ss-spacing-l)
  }

  .ss-content .ss-search input {
    display: inline-flex;
    font-size: inherit;
    line-height: inherit;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0px;
    padding: var(--ss-spacing-m) var(--ss-spacing-l);
    margin: 0;
    border: 1px solid var(--ss-border-color);
    border-radius: var(--ss-border-radius);
    background-color: var(--ss-bg-color);
    outline: 0;
    text-align: left;
    box-sizing: border-box
  }

  .ss-content .ss-search input::placeholder {
    color: var(--ss-font-placeholder-color);
    vertical-align: middle
  }

  .ss-content .ss-search input:focus {
    box-shadow: 0 0 5px var(--ss-primary-color)
  }

  .ss-content .ss-search .ss-addable {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex: 0 0 auto;
    height: auto;
    margin: 0 0 0 var(--ss-spacing-m);
    border: 1px solid var(--ss-border-color);
    border-radius: var(--ss-border-radius)
  }

  .ss-content .ss-search .ss-addable svg {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 1 auto;
    width: 12px;
    height: 12px;
    margin: auto var(--ss-spacing-m) auto var(--ss-spacing-m)
  }

  .ss-content .ss-search .ss-addable svg path {
    fill: none;
    stroke: var(--ss-font-color);
    stroke-width: 18;
    stroke-linecap: round;
    stroke-linejoin: round
  }

  .ss-content .ss-list {
    flex: 1 1 auto;
    height: auto;
    overflow-x: hidden;
    overflow-y: auto
  }

  .ss-content .ss-list .ss-error {
    color: var(--ss-error-color);
    padding: var(--ss-spacing-l)
  }

  .ss-content .ss-list .ss-searching {
    color: var(--ss-font-color);
    padding: var(--ss-spacing-l)
  }

  .ss-content .ss-list .ss-optgroup.ss-close .ss-option {
    display: none !important
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--ss-spacing-m) var(--ss-spacing-l) var(--ss-spacing-m) var(--ss-spacing-l)
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-label-text {
    flex: 1 1 auto;
    font-weight: bold;
    color: var(--ss-font-color)
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label:has(.ss-arrow) {
    cursor: pointer
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions {
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--ss-spacing-m)
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    cursor: pointer
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall:hover {
    opacity: .5
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall.ss-selected svg path {
    stroke: var(--ss-error-color)
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall span {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60%;
    text-align: center;
    padding: 0 var(--ss-spacing-s) 0 0
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg {
    flex: 0 1 auto;
    width: 13px;
    height: 13px
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg path {
    fill: none;
    stroke: var(--ss-success-color);
    stroke-linecap: round;
    stroke-linejoin: round
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg:first-child {
    stroke-width: 5
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-selectall svg:last-child {
    stroke-width: 11
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-closable {
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    cursor: pointer
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-closable .ss-arrow {
    flex: 1 1 auto;
    width: 10px;
    height: 10px
  }

  .ss-content .ss-list .ss-optgroup .ss-optgroup-label .ss-optgroup-actions .ss-closable .ss-arrow path {
    fill: none;
    stroke: var(--ss-font-color);
    stroke-width: 18;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition-timing-function: ease-out;
    transition: var(--ss-animation-timing)
  }

  .ss-content .ss-list .ss-optgroup .ss-option {
    padding: var(--ss-spacing-s) var(--ss-spacing-s) var(--ss-spacing-s) calc(var(--ss-spacing-l) * 3)
  }

  .ss-content .ss-list .ss-option {
    display: flex;
    padding: var(--ss-spacing-m) var(--ss-spacing-l) var(--ss-spacing-m) var(--ss-spacing-l);
    color: var(--ss-font-color);
    cursor: pointer;
    user-select: none
  }

  .ss-content .ss-list .ss-option:hover {
    color: var(--ss-bg-color);
    background-color: var(--ss-primary-color)
  }

  .ss-content .ss-list .ss-option.ss-highlighted, .ss-content .ss-list .ss-option:not(.ss-disabled).ss-selected {
    color: var(--ss-bg-color);
    background-color: var(--ss-primary-color)
  }

  .ss-content .ss-list .ss-option.ss-disabled {
    cursor: not-allowed;
    background-color: var(--ss-disabled-color)
  }

  .ss-content .ss-list .ss-option.ss-disabled:hover {
    color: var(--ss-font-color)
  }

  .ss-content .ss-list .ss-option .ss-search-highlight {
    background-color: var(--ss-highlight-color)
  }

  /*# sourceMappingURL=slimselect.css.map */

  [data-simplebar] {
    position: relative;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start
  }

  .simplebar-wrapper {
    overflow: hidden;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit
  }

  .simplebar-mask {
    direction: inherit;
    position: absolute;
    overflow: hidden;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    z-index: 0
  }

  .simplebar-offset {
    direction: inherit !important;
    box-sizing: inherit !important;
    resize: none !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch
  }

  .simplebar-content-wrapper {
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none
  }

  .simplebar-content-wrapper::-webkit-scrollbar, .simplebar-hide-scrollbar::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0
  }

  .simplebar-content:after, .simplebar-content:before {
    content: ' ';
    display: table
  }

  .simplebar-placeholder {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    pointer-events: none
  }

  .simplebar-height-auto-observer-wrapper {
    box-sizing: inherit !important;
    height: 100%;
    width: 100%;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    flex-grow: inherit;
    flex-shrink: 0;
    flex-basis: 0
  }

  .simplebar-height-auto-observer {
    box-sizing: inherit;
    display: block;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 1000%;
    width: 1000%;
    min-height: 1px;
    min-width: 1px;
    overflow: hidden;
    pointer-events: none;
    z-index: -1
  }

  .simplebar-track {
    z-index: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden
  }

  [data-simplebar].simplebar-dragging {
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  [data-simplebar].simplebar-dragging .simplebar-content {
    pointer-events: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  [data-simplebar].simplebar-dragging .simplebar-track {
    pointer-events: all
  }

  .simplebar-scrollbar {
    position: absolute;
    left: 0;
    right: 0;
    min-height: 10px
  }

  .simplebar-scrollbar:before {
    position: absolute;
    content: '';
    background: #000;
    border-radius: 7px;
    left: 2px;
    right: 2px;
    opacity: 0;
    transition: opacity .2s .5s linear
  }

  .simplebar-scrollbar.simplebar-visible:before {
    opacity: .5;
    transition-delay: 0s;
    transition-duration: 0s
  }

  .simplebar-track.simplebar-vertical {
    top: 0;
    width: 11px
  }

  .simplebar-scrollbar:before {
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px
  }

  .simplebar-track.simplebar-horizontal {
    left: 0;
    height: 11px
  }

  .simplebar-track.simplebar-horizontal .simplebar-scrollbar {
    right: auto;
    left: 0;
    top: 0;
    bottom: 0;
    min-height: 0;
    min-width: 10px;
    width: auto
  }

  [data-simplebar-direction=rtl] .simplebar-track.simplebar-vertical {
    right: auto;
    left: 0
  }

  .simplebar-dummy-scrollbar-size {
    direction: rtl;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    height: 500px;
    width: 500px;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: scrollbar !important
  }

  .simplebar-dummy-scrollbar-size > div {
    width: 200%;
    height: 200%;
    margin: 10px 0
  }

  .simplebar-hide-scrollbar {
    position: fixed;
    left: 0;
    visibility: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none
  }

  .mejs__offscreen {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal
  }

  .mejs__container {
    background: #000;
    font-family: Helvetica, Arial, serif;
    position: relative;
    text-align: left;
    text-indent: 0;
    vertical-align: top
  }

  .mejs__container, .mejs__container * {
    box-sizing: border-box
  }

  .mejs__container video::-webkit-media-controls, .mejs__container video::-webkit-media-controls-panel, .mejs__container video::-webkit-media-controls-panel-container, .mejs__container video::-webkit-media-controls-start-playback-button {
    -webkit-appearance: none;
    display: none !important
  }

  .mejs__fill-container, .mejs__fill-container .mejs__container {
    height: 100%;
    width: 100%
  }

  .mejs__fill-container {
    background: transparent;
    margin: 0 auto;
    overflow: hidden;
    position: relative
  }

  .mejs__container:focus {
    outline-offset: .125rem;
    outline-style: solid;
    outline-width: .125rem
  }

  .mejs__iframe-overlay {
    height: 100%;
    position: absolute;
    width: 100%
  }

  .mejs__embed, .mejs__embed body {
    background: #000;
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100%
  }

  .mejs__fullscreen {
    overflow: hidden !important
  }

  .mejs__container-fullscreen {
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000
  }

  .mejs__background, .mejs__mediaelement {
    left: 0;
    position: absolute;
    top: 0
  }

  .mejs__mediaelement {
    height: 100%;
    width: 100%;
    z-index: 0
  }

  .mejs__poster {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 1
  }

  :root .mejs__poster-img {
    display: none
  }

  .mejs__poster-img {
    border: 0;
    padding: 0
  }

  .mejs__overlay {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0
  }

  .mejs__layer {
    z-index: 1
  }

  .mejs__overlay-play {
    cursor: pointer
  }

  .mejs__overlay-button {
    background: transparent;
    border: 0
  }

  .mejs__overlay:hover .mejs__overlay-button svg {
    opacity: 1
  }

  .mejs__overlay-button svg {
    opacity: .75
  }

  .mejs__overlay-button:focus svg {
    opacity: 1
  }

  .mejs__overlay-button, .mejs__overlay-button svg, .mejs__overlay-loading, .mejs__overlay-loading svg {
    height: 5rem;
    width: 5rem
  }

  .mejs__overlay-loading-bg-img {
    -webkit-animation: a 1s linear infinite;
    animation: a 1s linear infinite;
    display: block;
    height: 5rem;
    width: 5rem;
    z-index: 1
  }

  @-webkit-keyframes a {
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }
  @keyframes a {
    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }

  .mejs__controls {
    bottom: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 2.5rem;
    left: 0;
    list-style-type: none;
    margin: 0;
    padding: 0 .625rem;
    position: absolute;
    width: 100%;
    z-index: 3
  }

  .mejs__controls:not([style*="display: none"]) {
    background: rgba(255, 0, 0, .7);
    background: -webkit-linear-gradient(transparent, rgba(0, 0, 0, .35));
    background: linear-gradient(transparent, rgba(0, 0, 0, .35))
  }

  .mejs__button, .mejs__time, .mejs__time-rail {
    font-size: .625rem;
    height: 2.5rem;
    line-height: .625rem;
    margin: 0;
    width: 2rem
  }

  .mejs__button > button {
    background-color: transparent;
    border: 0;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 0;
    height: 1.125rem;
    line-height: 0;
    margin: .625rem .375rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-decoration: none;
    width: 1.125rem
  }

  .mejs__button svg {
    fill: currentColor;
    height: 1.125rem;
    width: 1.125rem
  }

  .mejs__button > button:focus {
    outline: .125rem dotted #fff
  }

  .mejs__container-keyboard-inactive [role=slider], .mejs__container-keyboard-inactive [role=slider]:focus, .mejs__container-keyboard-inactive a, .mejs__container-keyboard-inactive a:focus, .mejs__container-keyboard-inactive button, .mejs__container-keyboard-inactive button:focus {
    outline: 0
  }

  .mejs__playpause-button svg {
    display: none
  }

  .mejs__pause svg.mejs__icon-pause, .mejs__play svg.mejs__icon-play, .mejs__replay svg.mejs__icon-replay {
    display: block
  }

  .mejs__fullscreen-button svg.mejs__icon-unfullscreen {
    display: none
  }

  .mejs__fullscreen svg.mejs__icon-fullscreen {
    display: block
  }

  .mejs__fullscreen svg.mejs__icon-unfullscreen {
    display: none
  }

  .mejs__unfullscreen svg.mejs__icon-unfullscreen {
    display: block
  }

  .mejs__unfullscreen svg.mejs__icon-fullscreen {
    display: none
  }

  .mejs__time {
    box-sizing: content-box;
    color: #fff;
    font-size: .6875rem;
    font-weight: 700;
    height: 1.5rem;
    overflow: hidden;
    padding: 1rem .375rem 0;
    text-align: center;
    width: auto
  }

  .mejs__time-rail {
    direction: ltr;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 2.5rem;
    margin: 0 .625rem;
    padding-top: .625rem;
    position: relative
  }

  .mejs__time-buffering, .mejs__time-current, .mejs__time-float, .mejs__time-float-corner, .mejs__time-float-current, .mejs__time-hovered, .mejs__time-loaded, .mejs__time-marker, .mejs__time-total {
    border-radius: .125rem;
    cursor: pointer;
    display: block;
    height: .625rem;
    position: absolute
  }

  .mejs__time-total {
    background: hsla(0, 0%, 100%, .3);
    margin: .3125rem 0 0;
    width: 100%
  }

  .mejs__time-buffering {
    -webkit-animation: b 2s linear infinite;
    animation: b 2s linear infinite;
    background: -webkit-linear-gradient(135deg, hsla(0, 0%, 100%, .4) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, .4) 0, hsla(0, 0%, 100%, .4) 75%, transparent 0, transparent);
    background: linear-gradient(-45deg, hsla(0, 0%, 100%, .4) 25%, transparent 0, transparent 50%, hsla(0, 0%, 100%, .4) 0, hsla(0, 0%, 100%, .4) 75%, transparent 0, transparent);
    background-size: .9375rem .9375rem;
    width: 100%
  }

  @-webkit-keyframes b {
    0% {
      background-position: 0 0
    }
    to {
      background-position: 1.875rem 0
    }
  }
  @keyframes b {
    0% {
      background-position: 0 0
    }
    to {
      background-position: 1.875rem 0
    }
  }

  .mejs__time-loaded {
    background: hsla(0, 0%, 100%, .3)
  }

  .mejs__time-current, .mejs__time-handle-content {
    background: hsla(0, 0%, 100%, .9)
  }

  .mejs__time-hovered {
    background: hsla(0, 0%, 100%, .5);
    z-index: 10
  }

  .mejs__time-hovered.negative {
    background: rgba(0, 0, 0, .2)
  }

  .mejs__time-buffering, .mejs__time-current, .mejs__time-hovered, .mejs__time-loaded {
    left: 0;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transition: all .15s ease-in;
    transition: all .15s ease-in;
    width: 100%
  }

  .mejs__time-buffering {
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1)
  }

  .mejs__time-hovered {
    -webkit-transition: height .1s cubic-bezier(.44, 0, 1, 1);
    transition: height .1s cubic-bezier(.44, 0, 1, 1)
  }

  .mejs__time-hovered.no-hover {
    -webkit-transform: scaleX(0) !important;
    -ms-transform: scaleX(0) !important;
    transform: scaleX(0) !important
  }

  .mejs__time-handle, .mejs__time-handle-content {
    border: .25rem solid transparent;
    cursor: pointer;
    left: 0;
    position: absolute;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    z-index: 11
  }

  .mejs__time-handle-content {
    border: .25rem solid hsla(0, 0%, 100%, .9);
    border-radius: 50%;
    height: .625rem;
    left: -.4375rem;
    top: -.25rem;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    width: .625rem
  }

  .mejs__time-rail .mejs__time-handle-content:active, .mejs__time-rail .mejs__time-handle-content:focus, .mejs__time-rail:hover .mejs__time-handle-content {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
  }

  .mejs__time-float {
    background: #eee;
    border: 1px solid #333;
    bottom: 100%;
    color: #111;
    display: none;
    height: 1.0625rem;
    margin-bottom: .5625rem;
    position: absolute;
    text-align: center;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 2.25rem
  }

  .mejs__time-float-current {
    display: block;
    left: 0;
    margin: .125rem;
    text-align: center;
    width: 1.875rem
  }

  .mejs__time-float-corner {
    border: .3125rem solid #eee;
    border-color: #eee transparent transparent;
    border-radius: 0;
    display: block;
    height: 0;
    left: 50%;
    line-height: 0;
    position: absolute;
    top: 100%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 0
  }

  .mejs__long-video .mejs__time-float {
    margin-left: -1.4375rem;
    width: 4rem
  }

  .mejs__long-video .mejs__time-float-current {
    width: 3.75rem
  }

  .mejs__broadcast {
    color: #fff;
    height: .625rem;
    position: absolute;
    top: .9375rem;
    width: 100%
  }

  .mejs__volume-button {
    position: relative
  }

  .mejs__volume-button > .mejs__volume-slider {
    -webkit-backface-visibility: hidden;
    background: rgba(50, 50, 50, .7);
    border-radius: 0;
    bottom: 100%;
    display: none;
    height: 7.1875rem;
    left: 50%;
    margin: 0;
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 1.5625rem;
    z-index: 1
  }

  .mejs__volume-button:hover {
    border-radius: 0 0 .25rem .25rem
  }

  .mejs__volume-total {
    background: hsla(0, 0%, 100%, .5);
    border: .06rem solid #fff;
    height: 6.25rem;
    left: 50%;
    margin: 0;
    position: absolute;
    top: .5rem;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: .125rem
  }

  .mejs__volume-current {
    left: 0;
    margin: 0;
    width: 100%
  }

  .mejs__volume-current, .mejs__volume-handle {
    background: hsla(0, 0%, 100%, .9);
    position: absolute
  }

  .mejs__volume-handle {
    border: 1px solid #fff;
    border-radius: 1px;
    cursor: ns-resize;
    height: .375rem;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 1rem
  }

  .mejs__horizontal-volume-slider {
    display: block;
    height: 2.25rem;
    position: relative;
    vertical-align: middle;
    width: 3.5rem
  }

  .mejs__horizontal-volume-total {
    background: rgba(50, 50, 50, .8);
    border: .06rem solid #fff;
    border-radius: .125rem;
    font-size: 1px;
    height: .5rem;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 1rem;
    width: 3.125rem
  }

  .mejs__horizontal-volume-current {
    background: hsla(0, 0%, 100%, .8);
    border-radius: .125rem;
    border-right: .06rem solid #fff;
    font-size: 1px;
    height: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%
  }

  .mejs__horizontal-volume-handle {
    display: none
  }

  .mejs__mute svg, .mejs__unmute svg {
    stroke: currentColor
  }

  .mejs__volume-button svg {
    display: none
  }

  .mejs__mute .mejs__icon-mute, .mejs__unmute .mejs__icon-unmute {
    display: block
  }

  .mejs__captions-button, .mejs__chapters-button {
    position: relative
  }

  .mejs__captions-button svg, .mejs__chapters-button svg {
    padding-top: .125rem
  }

  .mejs__captions-button > .mejs__captions-selector, .mejs__chapters-button > .mejs__chapters-selector {
    background: rgba(50, 50, 50, .7);
    border: 1px solid transparent;
    border-radius: 0;
    bottom: 100%;
    margin-right: -2.6875rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 50%;
    visibility: visible;
    width: 5.375rem
  }

  .mejs__chapters-button > .mejs__chapters-selector {
    margin-right: -3.4375rem;
    width: 6.875rem
  }

  .mejs__captions-selector-list, .mejs__chapters-selector-list {
    list-style-type: none !important;
    margin: 0;
    overflow: hidden;
    padding: 0
  }

  .mejs__captions-selector-list-item, .mejs__chapters-selector-list-item {
    color: #fff;
    cursor: pointer;
    display: block;
    list-style-type: none !important;
    margin: 0 0 .375rem;
    overflow: hidden;
    padding: 0
  }

  .mejs__captions-selector-list-item:hover, .mejs__chapters-selector-list-item:hover {
    background-color: #c8c8c8 !important;
    background-color: hsla(0, 0%, 100%, .4) !important
  }

  .mejs__captions-selector-input, .mejs__chapters-selector-input {
    clear: both;
    float: left;
    left: -62.5rem;
    margin: .1875rem .1875rem 0 .3125rem;
    position: absolute
  }

  .mejs__captions-selector-label, .mejs__chapters-selector-label {
    cursor: pointer;
    float: left;
    font-size: .625rem;
    line-height: .9375rem;
    padding: .25rem .625rem 0;
    width: 100%
  }

  .mejs__captions-selector-list-item:hover .mejs__captions-selector-label, .mejs__chapters-selector-list-item:hover .mejs__chapters-selector-label {
    text-decoration: underline
  }

  .mejs__captions-selected, .mejs__chapters-selected {
    color: #21f8f8;
    font-weight: 700
  }

  .mejs__captions-translations {
    font-size: .625rem;
    margin: 0 0 .3125rem
  }

  .mejs__captions-layer {
    bottom: 0;
    color: #fff;
    font-size: 1rem;
    left: 0;
    line-height: 1.25rem;
    position: absolute;
    text-align: center
  }

  .mejs__captions-layer a {
    color: #fff;
    text-decoration: underline
  }

  .mejs__captions-layer[lang=ar] {
    font-size: 1.25rem;
    font-weight: 400
  }

  .mejs__captions-position {
    bottom: .9375rem;
    left: 0;
    position: absolute;
    width: 100%
  }

  .mejs__captions-position-hover {
    bottom: 2.1875rem
  }

  .mejs__captions-text, .mejs__captions-text * {
    background: hsla(0, 0%, 8%, .5);
    box-shadow: .3125rem 0 0 hsla(0, 0%, 8%, .5), -.3125rem 0 0 hsla(0, 0%, 8%, .5);
    padding: 0;
    white-space: pre-wrap
  }

  .mejs__container.mejs__hide-cues video::-webkit-media-text-track-container {
    display: none
  }

  .mejs__overlay-error {
    position: relative
  }

  .mejs__overlay-error > img {
    left: 0;
    max-width: 100%;
    position: absolute;
    top: 0;
    z-index: -1
  }

  .mejs__cannotplay, .mejs__cannotplay a {
    color: #fff;
    font-size: .8em
  }

  .mejs__cannotplay {
    position: relative
  }

  .mejs__cannotplay a, .mejs__cannotplay p {
    display: inline-block;
    padding: 0 .9375rem;
    width: 100%
  }
`