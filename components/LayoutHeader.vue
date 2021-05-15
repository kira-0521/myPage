<template>
  <header class="header">
    <h1 class="header__title">
      <nuxt-link to="/">
        <span>myPage</span>
      </nuxt-link>
    </h1>

    <base-button>
      <span></span>
      <span></span>
      <span></span>
    </base-button>
  </header>
</template>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

span {
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
</style>
