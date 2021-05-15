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
@import './assets/css/modules/_variables.scss';

.footer {
  background-color: $cBlack;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 80px;

  &__text {
    color: $cWhite;
  }
}
</style>
