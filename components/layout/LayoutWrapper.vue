<template>
  <div class="wrapper" :class="routePaddingChange">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutWrapper',
  computed: {
    routePaddingChange() {
      if (this.$route.path === '/') {
        return 'not-padding'
      } else {
        return 'padding-top'
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';
@import './assets/css/modules/_mixin.scss';

.wrapper {
  min-height: 100vh;
  background-color: $cWhite;
}

.padding-top {
  padding-top: 80px !important;

  @include sp {
    padding-top: 0;
  }
}
</style>
