<template>
  <section class="layoutVisual">
    <div class="layoutVisual__inner">
      <h1 class="layoutVisual__title">{{ tagline }}</h1>
      <p class="layoutVisual__text">{{ text }}</p>
    </div>
    <!-- <span class="arrow">scroll</span> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: 'Kira Tanaka',
      text: 'WEBエンジニア',
    }
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.layoutVisual {
  width: 100%;
  overflow: hidden;
  margin: 0;
  min-height: 100vh;

  &__inner {
    max-width: $contentMaxWidth;
    margin: 0 auto !important;
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: repeat(2, 1fr);
    padding: 3%;
    margin: 30px 0;
  }

  &__title {
    font-size: 38px;
    color: $cBlack;
    grid-row: 1;
    grid-column: 1 / 3;
  }

  &__text {
    color: $cSecondText;
    display: inline-block;
    word-break: break-all;
    grid-row: 2;
    grid-column: 1 / 3;
    position: relative;
  }
}

.arrow {
  display: inline-block;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  padding: 10px 10px 110px;
  overflow: hidden;
  color: $cBlack;
  font-size: 14px;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 1;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  writing-mode: vertical-lr;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: 95px;
    background-color: $cBlack;
  }
}
.empty {
  height: 100vh;
  background-color: $cWhite;
}
</style>
