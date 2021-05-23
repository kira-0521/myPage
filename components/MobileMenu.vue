<template>
  <nav class="mobile-menu" :class="{ active: isActive }">
    <ul class="mobile-menu__ul">
      <li class="mobile-menu__li">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="mobile-menu__li">
        <nuxt-link to="/profile">Profile</nuxt-link>
      </li>
      <li class="mobile-menu__li">
        <nuxt-link to="/blog">Blog</nuxt-link>
      </li>
      <li class="mobile-menu__li">
        <nuxt-link to="/activitys">Activitys</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.mobile-menu {
  height: 100vh;
  width: 256px;
  background-color: $cWhite;
  transform: translateX(100%);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 8px 0;

  &__ul {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  &__li {
    padding: 0 16px;
    margin: 16px 0;
  }
}

.active {
  transform: translateX(0);
}
</style>
