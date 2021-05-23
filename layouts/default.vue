<template>
  <div>
    <!-- SSR無効 -->
    <no-ssr>
      <layout-header :is-active="isActive" @mobile-active="clickChange" />
    </no-ssr>
    <Nuxt />
    <!-- <layout-footer /> -->
    <mobile-menu :is-active="isActive" />
    <div
      class="mobile-menu__cover"
      :class="{ active: isActive }"
      @click="clickChange"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    clickChange() {
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss">
@import './assets/css/modules/_variables.scss';

body {
  position: relative;
  min-height: 100vh;
}

.mobile-menu__cover {
  width: 100vw;
  height: 100vh;
  background-color: $cBlack;
  position: fixed;
  top: 0;
  z-index: -100;
  visibility: hidden;
  overflow: hidden;
  opacity: 0;

  &.active {
    z-index: 50;
    opacity: 0.7;
    visibility: visible;
  }
}
</style>
