<template>
  <transition name="slide">
    <nav class="mobile-menu" :class="{ active: isActive }">
      <ul class="mobile-menu__ul">
        <li
          v-for="(route, index) in links"
          :key="index"
          class="mobile-menu__li"
        >
          <nuxt-link to="`/${route.link}`">{{ route.name }}</nuxt-link>
        </li>
        <!-- <li class="mobile-menu__li">
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li class="mobile-menu__li">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li class="mobile-menu__li">
          <nuxt-link to="/activitys">Activitys</nuxt-link>
        </li> -->
      </ul>
    </nav>
  </transition>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      links: [
        {
          name: 'Home',
          link: '',
        },
        {
          name: 'Profile',
          link: 'profile',
        },
        {
          name: 'Blog',
          link: 'blog',
        },
        {
          name: 'Activitys',
          link: 'activitys',
        },
      ],
    }
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

// .slide-enter {
//   opacity: 0;
// }
// .slide-enter-active {
//   transition: all 0.3s ease;
//   opacity: 0.5;
// }
// .slide-enter-to {
//   transition: all 0.3s ease;
//   opacity: 1;
// }
</style>
