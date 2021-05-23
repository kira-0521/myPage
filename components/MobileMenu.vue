<template>
  <div class="mobile-menu">
    <nav class="mobile-menu__nav">
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
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.mobile-menu {
  height: 100vh;
  width: 256px;
  background-color: $cWhite;
  transform: translateY(-100%);
  top: 0;

  &__nav {
    padding: 8px 0;
  }

  &__ul {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  &__li {
    padding: 0 16px;
  }
}
</style>
