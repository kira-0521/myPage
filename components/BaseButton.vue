<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    class="el_btn"
    :style="{
      color: color,
      'background-color': bg,
      padding: `${paddingHeight}em ${paddingWidth}em`,
      'border-radius': `${weapon}px`,
      'font-weight': `${weight}`,
      'margin-top': `${mt}px`,
    }"
    @click="$emit('parent-event')"
  >
    <slot />
  </a>
  <button
    v-else
    class="el_btn"
    :style="{
      color: color,
      'background-color': bg,
      padding: `${paddingHeight}em ${paddingWidth}em`,
      'border-radius': `${weapon}px`,
      'font-weight': `${weight}`,
      'margin-top': `${mt}px`,
    }"
    @click="$emit('parent-event')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    link: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#f4f9f4',
    },
    bg: {
      type: String,
      default: '#25c49f',
    },
    paddingHeight: {
      type: Number,
      default: 0.7,
    },
    paddingWidth: {
      type: Number,
      default: 2.5,
    },
    weapon: {
      type: Number,
      default: 32,
    },
    weight: {
      type: Number,
      default: 400,
    },
    mt: {
      type: Number,
      default: 30,
    },
  },
}
</script>

<style scoped lang="scss">
.el_btn {
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 1em 2.8em;
  text-align: center;
  display: inline-block;
  letter-spacing: 0.2rem;
  transition: 0.2s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 1px 6px 15px rgba(0, 0, 0, 0.3);
  }
}
</style>
