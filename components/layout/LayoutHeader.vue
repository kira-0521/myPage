<template>
  <header class="header">
    <div class="header__inner">
      <button
        v-show="windowSize <= 768"
        class="mobile-menu__btn"
        :class="{ active: isActive }"
        @click="$emit('mobile-active')"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav v-show="769 <= windowSize" class="header__nav">
        <nuxt-link to="/" style="width: 43px; height: 43px"> myPage </nuxt-link>
        <ul class="header__ul">
          <template v-for="link in links">
            <li :key="link.id" class="header__li">
              <nuxt-link
                class="header__link"
                :to="link.path"
                :class="link.className"
                active-class="active-link"
                exact
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
  props: {
    isActive: Boolean,
    links: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      windowSize: window.innerWidth,
      img: '/images/K.png',
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
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.header {
  background-color: $cWhite;
  opacity: 0.9;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  &__inner {
    margin: 0 auto;
    width: $contentMaxWidth;
    padding: 0 3%;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    width: 43px;
    border-radius: 50%;
    display: inline-block;
    margin: 0;
  }

  &__ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  &__li {
    margin-left: 20px;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: $cGreen;
      transition: all 0.3s ease;
      transform: scale(0, 1);
      transform-origin: center top;
    }

    &:hover {
      &::after {
        transform: scale(1, 1);
      }
    }
  }

  &__link {
    color: $cText;
    font-size: 18px;
  }
}

.active-link {
  color: $cGreen;
  font-weight: 900;
}

.mobile-menu__btn {
  background-color: unset;
  border: none;
  outline: none !important;
  cursor: pointer;
  display: block;
  margin-left: auto;

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
</style>
