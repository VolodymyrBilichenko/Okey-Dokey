import styled from "styled-components";

export const Form = styled.div`
  input, textarea {
    &.is-error {
      color: var(--accent);
    }

    &::placeholder {
      color: #6C6C6C;
      transition: opacity .2s ease;
      opacity: 1;
    }

    &:focus::placeholder {
      opacity: 0;
    }
  }

  .ss-main:focus {
    box-shadow: none;
  }

  .custom-select {
    --ss-main-height: 44px;
  @include _992 {
    --ss-main-height: 60px;
    --ss-spacing-s: 5px;

    &.is-min {
      --ss-spacing-s: 10px;
      --ss-main-height: 50px;
    }
  } --ss-spacing-s: 7px;
    --ss-border-radius: 7px;

    .ss-single {

      font-size: 0.875rem;

    @include _992 {
      font-size: 1rem;
    }
    }
  }

  .custom-select.ss-content {
    --ss-primary-color: #E3E3E3;
    --ss-spacing-l: 19px;
    --ss-spacing-m: 0;
    --ss-border-color: var(--light-3);

    &.is-min {
      --ss-spacing-l: 19px;
      --ss-spacing-m: 10px;
    }
  }

  .custom-select.ss-content .ss-list .ss-option.ss-highlighted, .custom-select.ss-content .ss-list .ss-option:hover, .custom-select.ss-content .ss-list .ss-option:not(.ss-disabled).ss-selected {
    color: var(--black);
  }

  .custom-select.ss-content .ss-option {
    span {
      display: block;
      padding: 14px 0;
      width: 100%;

      position: relative;
    }

    &:not(:last-child) span {
      &::before {
        content: '';
        position: absolute;
        left: 19px;
        bottom: 0;
        width: calc(100% - 19px - 19px);
        height: 1px;
        background: var(--light-5);
      }
    }
  }

  .custom-select.ss-main .ss-arrow {
    transition: transform .2s ease;
  }

  .ss-option {
    transition: background .2s ease, color .2s ease;
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;

    cursor: pointer;

    &__input {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      border: 0;

      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }

    &__input:checked + &__element svg {
      opacity: 1;
    }

    &__element {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 30px;
      height: 30px;
      flex: 0 0 30px;
      margin-right: 11px;

      background: var(--white);
      color: var(--primary);

      svg {
        width: 12px;
        height: 12px;
        transition: opacity .3s ease;
        opacity: 0;
      }

      border-radius: 7px;
    }

    &__text {
      user-select: none;
      color: var(--white);
      font-size: 1rem;
    @include _992 {
      font-size: 1.125rem;
    }
    }
  }
`