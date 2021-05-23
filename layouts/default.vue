<template>
  <div>
    <!-- SSR無効 -->
    <no-ssr>
      <layout-header />
    </no-ssr>
    <Nuxt />
    <!-- <layout-footer /> -->
  </div>
</template>

<style lang="scss">
body {
  position: relative;
  min-height: 100vh;
}
</style>
