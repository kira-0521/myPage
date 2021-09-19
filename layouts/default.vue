<template>
  <div>
    <!-- SSR無効 -->
    <SideSns />
    <client-only>
      <layout-header
        :is-active="isActive"
        :links="links"
        @mobile-active="mobileToggle"
      />
    </client-only>
    <Nuxt />
    <layout-footer />
    <mobile-menu :is-active="isActive" :links="links" />
    <div v-if="isActive" class="mobile-menu__cover" @click="mobileToggle"></div>
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
          path: '/',
          name: 'Home',
          className: 'home',
        },
        {
          id: 2,
          path: '/about',
          name: 'About',
          className: 'about',
        },
        {
          id: 3,
          path: '/works',
          name: 'Works',
          className: 'works',
        },
        {
          id: 4,
          path: '/contact',
          name: 'Contact',
          className: 'contact',
        },
        {
          id: 5,
          path: '/bloglist',
          name: 'Blog',
          className: 'blog',
        },
      ],
    }
  },
  methods: {
    mobileToggle() {
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

ul {
  list-style: none;
  padding-left: 0;
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

.inner {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
