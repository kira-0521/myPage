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
  min-height: 100vh;
  background-color: $cWhite;
  padding-top: 80px !important;

  @media (min-width: 768px) {
    padding-top: 0;
  }
}
</style>
