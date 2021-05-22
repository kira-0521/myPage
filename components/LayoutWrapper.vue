<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutWrapper',
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.wrapper {
  padding-top: 60px !important;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(244, 249, 244, 1) 20.25%,
    rgba(244, 248, 244, 1) 20.25%,
    rgba(244, 247, 249, 1) 80.25%
  );

  @media (min-width: 768px) {
    padding-top: 0;
  }
}
</style>
