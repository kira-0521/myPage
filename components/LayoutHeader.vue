<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title">
        <nuxt-link to="/">
          <span>myPage</span>
        </nuxt-link>
      </h1>

      <button class="mobile-menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.header {
  background-color: $cBlack;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1080px;
  }

  &__title {
    justify-content: center;

    & > a {
      text-decoration: none;
      color: inherit;
      & > span {
        font-size: 28px;
        color: $cWhite;
      }
    }
  }
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
    background-color: $cWhite;
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.7s;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
