<template>
  <section class="layoutVisual">
    <div class="layoutVisual__inner">
      <div class="align-left">
        <h1 class="layoutVisual__title">{{ tagline }}</h1>
        <p class="layoutVisual__text">{{ text }}</p>
        <BaseButton
          :link="btnStyle.link"
          :color="btnStyle.color"
          :mt="btnStyle.mt"
          >Contact →</BaseButton
        >
      </div>
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
      btnStyle: {
        link: 'contact',
        color: '#fff',
        mt: 40,
        bg: '#25c49f',
      },
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
    margin: 30px auto 0 !important;
    text-align: right;
  }

  &__title {
    font-size: 82px;
    color: $cBlack;
  }

  &__text {
    font-size: 34px;
    color: $cSecondText;
    display: inline-block;
    word-break: break-all;
    position: relative;
  }
}

.align-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin-left: auto;
}

// .arrow {
//   display: inline-block;
//   position: absolute;
//   top: 100%;
//   left: 50%;
//   transform: translate(-50%, 0);
//   z-index: 2;
//   padding: 10px 10px 110px;
//   overflow: hidden;
//   color: $cBlack;
//   font-size: 14px;
//   font-family: 'Josefin Sans', sans-serif;
//   line-height: 1;
//   letter-spacing: 0.2em;
//   text-transform: uppercase;
//   text-decoration: none;
//   writing-mode: vertical-lr;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     width: 1px;
//     height: 95px;
//     background-color: $cBlack;
//   }
// }
// .empty {
//   height: 100vh;
//   background-color: $cWhite;
// }
</style>
