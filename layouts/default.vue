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
import routeLinksArray from '../static/modules/routeLinksArray'

export default {
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    links() {
      return routeLinksArray
    },
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
