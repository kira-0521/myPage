<template>
  <div class="content">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutContentWidth',
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';
@import './assets/css/modules/_mixin.scss';

.content {
  margin: 0 auto;
  max-width: $contentMaxWidth;

  @include sp {
    padding: 0 20px;
  }
}
</style>
