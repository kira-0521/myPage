<template>
  <button
    class="el_btn"
    :style="{
      color: fore_color,
      'background-color': bg,
      padding: `${paddingHeight}em ${paddingWidth}em`,
    }"
    @click="clickEvent"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    fore_color: {
      type: String,
      default: '#f4f9f4',
    },
    bg: {
      type: String,
      default: '#212121',
    },
    paddingHeight: {
      type: Number,
      default: 0.7,
    },
    paddingWidth: {
      type: Number,
      default: 2.5,
    },
  },
  methods: {
    clickEvent() {
      // イベント名はそれぞれ異なるため抽象度が高い命名
      this.$emit('parent-event')
    },
  },
}
</script>

<style scoped lang="scss">
@import '../assets/css/modules/_variables.scss';

.el_btn {
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 1em 2.8em;
  text-align: center;
  border-radius: 32px;
  display: inline-block;
  letter-spacing: 0.2rem;
  transition: 0.2s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 1px 6px 15px rgba(0, 0, 0, 0.5);
  }
}
</style>
