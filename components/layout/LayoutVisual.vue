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
          >Contact</BaseButton
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
  background: linear-gradient(
    112.76846665913376deg,
    rgba(146, 226, 207, 1) 29.35590277777778%,
    rgba(211, 243, 236, 1) 73.03645833333333%
  );
  &__inner {
    padding-top: 180px;
    max-width: $contentMaxWidth;
    margin: 0 auto;
  }

  &__title {
    font-size: 82px;
    color: $cBlack;

    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }

  &__text {
    font-size: 34px;
    color: $cSecondText;
    display: inline-block;
    word-break: break-all;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
}

.align-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
}
</style>
