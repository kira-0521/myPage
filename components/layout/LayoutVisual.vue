<template>
  <section class="layoutVisual">
    <div class="layoutVisual__inner">
      <div class="layoutVisual__content">
        <h1 class="layoutVisual__title">{{ tagline }}</h1>
        <p class="layoutVisual__text">{{ text }}</p>
        <BaseButton
          :link="btnStyle.link"
          :color="btnStyle.color"
          :mt="btnStyle.mt"
          >Contact</BaseButton
        >
        <div class="scrollDown"><span>Scroll</span></div>
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
      text: 'WEB Engineer',
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
@import './assets/css/modules/_mixin.scss';

.layoutVisual {
  margin: 0;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  position: relative;

  &__inner {
    padding-top: 180px;
    max-width: $contentMaxWidth;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;

    @include sp {
      align-items: center;
    }
  }

  &__title {
    color: $cBlack;
    font-size: 82px;
    font-family: 'Alberta';
    text-align: center;

    @include sp {
      font-size: 46px;
    }
  }

  &__text {
    font-size: 34px;
    color: $cSecondText;
    display: inline-block;
    word-break: break-all;
    font-family: 'Alberta';

    @include sp {
      font-size: 20px;
    }
  }
}

.scrollDown {
  position: absolute;
  left: 50%;
  bottom: 10px;
  height: 50px;

  & > span {
    position: absolute;
    left: -15px;
    top: -15px;
    color: $cBlack;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 1px;
    height: 30px;
    background: $cBlack;
    animation: pathmove 1.4s ease-in-out infinite;
    opacity: 0;
  }
}

@keyframes pathmove {
  0% {
    height: 0;
    top: 0;
    opacity: 0;
  }
  30% {
    height: 30px;
    opacity: 1;
  }
  100% {
    height: 0;
    top: 50px;
    opacity: 0;
  }
}
</style>
