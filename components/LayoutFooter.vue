<template>
  <footer class="footer">
    <p class="footer__text">Copyright &copy; Kira Tanaka</p>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
}
</script>

<style lang="scss" scoped>
@import './assets/styles/modules/_variables.scss';

.footer {
  background-color: $cDeepGreen;
  display: flex;
  justify-content: center;
  align-items: center;

  &__text {
    color: $cText;
  }
}
</style>
