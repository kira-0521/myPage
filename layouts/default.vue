<template>
  <div>
    <!-- SSR無効 -->
    <no-ssr>
      <layout-header />
    </no-ssr>
    <Nuxt />
    <!-- <layout-footer /> -->
    <mobile-menu />
    <div class="mobile-menu__cover"></div>
  </div>
</template>

<style lang="scss">
@import './assets/css/modules/_variables.scss';

body {
  position: relative;
  min-height: 100vh;
}

.mobile-menu__cover {
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  background-color: $cBlack;
  position: fixed;
  top: 0;
  z-index: 50;
}
</style>
