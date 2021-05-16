<template>
  <layout-wrapper>
    <div class="welcome">
      <h2 class="welcome__title"><i>Welcome to myPage</i></h2>
    </div>
  </layout-wrapper>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.welcome {
  position: relative;
  height: 100vh;

  &__title {
    color: #0c968d;
    position: absolute;
    top: 47%;
    left: 50%;
    font-size: 55px;
    display: inline-block;
    transform: translate(-50%, -50%);
  }
}
</style>
