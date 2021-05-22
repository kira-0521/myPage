<template>
  <section class="layoutVisual">
    <h1 class="layoutVisual__title">{{ tagline }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: 'myPage',
    }
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.layoutVisual {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  padding: 7vw;
  background: url('/main-cover.jpg') no-repeat center center scroll; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: brightness(50%);

  &__title {
    font-size: 38px;
    color: $cWhite;
  }
}
</style>
