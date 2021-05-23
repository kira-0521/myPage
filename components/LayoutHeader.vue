<template>
  <header class="header">
    <div class="header__inner">
      <h1 class="header__title">
        <nuxt-link to="/">
          <span>{{ title }}</span>
        </nuxt-link>
      </h1>

      <button
        v-show="windowSize <= 1199"
        class="mobile-menu__btn"
        :class="{ active: isActive }"
        @click="buttonClick"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav v-show="1200 <= windowSize" class="global-nav">
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
  props: { isActive: Boolean },
  data() {
    return {
      windowSize: window.innerWidth,
      // 変数にする必要あり？
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
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.windowSize = window.innerWidth
    },
    buttonClick() {
      this.$emit('mobile-active')
    },
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.header {
  background-color: $cWhite;
  opacity: 0.9;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: $contentMaxWidth;
    padding: 0 3%;
  }

  &__title {
    justify-content: center;

    & > a {
      & > span {
        font-size: 26px;
        color: $cBlack;
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
    background-color: $cBlack;
    width: 35px;
    height: 2px;
    display: block;
    margin-bottom: 9px;
    transition: transform 0.4s;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.active {
  & > span {
    &:nth-child(1) {
      transition-delay: 70ms;
      transform: translateY(11px) rotate(135deg);
    }
    &:nth-child(2) {
      transition-delay: 0s;
      transform: translateX(-18px) scaleX(0);
    }
    &:nth-child(3) {
      transition-delay: 140ms;
      transform: translateY(-11px) rotate(-135deg);
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
      color: $cBlack;
    }
  }
}
</style>
