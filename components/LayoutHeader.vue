<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title">
        <nuxt-link to="/">
          <span>{{ title }}</span>
        </nuxt-link>
      </h1>

      <button v-if="false" class="mobile-menu__btn">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="global-nav">
        <ul class="menu">
          <template v-for="(link, index) in links">
            <li :key="index" class="menu__item">
              <nuxt-link
                class="header__link"
                :to="`/${link.path}`"
                :class="link.className"
                >{{ link.name }}</nuxt-link
              >
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: 'myPage',
      links: [
        {
          id: 1,
          path: '',
          name: 'Home',
          className: '',
        },
        {
          id: 2,
          path: 'profile',
          name: 'Profile',
          className: '',
        },
        {
          id: 3,
          path: 'blog',
          name: 'Blog',
          className: '',
        },
        {
          id: 4,
          path: 'activitys',
          name: 'Activitys',
          className: '',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.header {
  background-color: $cBlack;
  opacity: 0.9;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 1080px;
  }

  &__title {
    justify-content: center;

    & > a {
      & > span {
        font-size: 26px;
        color: $cWhite;
      }
    }
  }
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;

  & > span {
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
}

.menu {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  &__item {
    margin-left: 20px;

    & > a {
      color: $cWhite;
    }
  }
}
</style>
