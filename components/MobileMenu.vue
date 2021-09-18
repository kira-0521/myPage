<template>
  <nav class="mobile-menu" :class="{ active: isActive }">
    <ul class="mobile-menu__ul">
      <template v-for="link in links">
        <li :key="link.id" class="mobile-menu__li">
          <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    links: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.mobile-menu {
  height: 100vh;
  width: 256px;
  background-color: $cWhite;
  transform: translateX(-100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 8px 0;
  transition: all 0.5s;

  &__ul {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }

  &__li {
    padding: 0 16px;
    margin: 16px 0;

    &::after {
      content: '';
      height: 1px;
      display: block;
      margin-top: 10px;
      background-color: $cSecondText;
    }

    & > a {
      display: block;
      padding: 10px;
      color: $cText;
    }
  }
}

.active {
  transform: translateX(0);
}
</style>
