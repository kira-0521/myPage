<template>
  <section class="layoutVisual">
    <h1>{{ tagline }}</h1>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: 'myPage',
    }
  },
}
</script>

<style lang="scss" scoped>
.layoutVisual {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('/main-cover.jpg') no-repeat center center scroll; /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url('/main-cover.jpg') no-repeat center center scroll; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  background-size: cover;
  color: #333;
}
</style>
