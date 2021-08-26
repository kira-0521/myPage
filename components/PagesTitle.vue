<template>
  <div class="title" :style="{ 'text-align': direction }">
    <h2 class="title__title">{{ title }}</h2>
    <p class="title__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'About',
    },
    subtitle: {
      type: String,
      default: '私について',
    },
    direction: {
      type: String,
      default: 'center',
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.title {
  &::after {
    content: '';
    display: inline-block;
    margin-top: 12px;
    height: 3px;
    background-color: $cGreen;
    width: 50px;
  }

  &__title {
    font-size: 38px;
    color: $cBlack;
  }

  &__subtitle {
    font-size: 15px;
    color: $cSecondText;
  }
}
</style>
