<template>
  <footer class="footer">
    <p class="footer__text">Copyright &copy; {{ name }}</p>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  data() {
    return {
      name: 'Kira Tanaka',
    }
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.footer {
  background-color: $cWhite;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 70px;

  &__text {
    color: $cText;
  }
}
</style>
