<template>
  <section class="layoutVisual">
    <div class="layoutVisual_textarea">
      <h1 class="layoutVisual__title">{{ tagline }}</h1>
      <p class="layoutVisual__text">{{ text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: 'Welcome to myPage.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.f',
    }
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.layoutVisual {
  background-size: cover;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  padding: 7vw;
  position: relative;

  &__textare {
    position: absolute;
    top: 20%;
    left: 20%;
    display: inline-block;
    max-width: 800px;
    padding: 5% 3%;
  }

  &__title {
    font-size: 38px;
    color: $cBlack;
  }

  &__text {
    display: inline-block;
    word-break: break-all;
  }
}
</style>
