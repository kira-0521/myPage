<template>
  <div>
    <!-- SSR無効 -->
    <client-only>
      <layout-header
        :is-active="isActive"
        :links="links"
        @mobile-active="clickChange"
      />
    </client-only>
    <Nuxt />
    <!-- <layout-footer /> -->
    <mobile-menu :is-active="isActive" />
    <div v-if="isActive" class="mobile-menu__cover" @click="clickChange"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      links: [
        {
          id: 1,
          path: '',
          name: 'Home',
          className: 'home',
        },
        {
          id: 2,
          path: 'about',
          name: 'About',
          className: 'about',
        },
        {
          id: 3,
          path: 'works',
          name: 'Works',
          className: 'works',
        },
        {
          id: 4,
          path: 'contact',
          name: 'Contact',
          className: 'contact',
        },
      ],
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
  overflow: hidden;
  z-index: 50;
  opacity: 0.7;
}
</style>
