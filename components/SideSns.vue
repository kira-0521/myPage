<template>
  <aside class="side">
    <div class="side__inner">
      <a
        href="https://twitter.com/progLog88"
        class="side__sns twitter"
        target="_blank"
        >Twitter</a
      >
      <a
        href="https://qiita.com/kira-0521"
        class="side__sns qiita"
        target="_blank"
        >Qiita</a
      >
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.side {
  position: fixed;
  top: 66%;
  transform: translateY(-50%);
  transition: all 0.3s ease-in;
  z-index: 90;

  &__inner {
    transform-origin: top left;
    transform: rotate(-90deg);
    margin-left: 25px;
  }

  &__sns {
    font-family: 'Alberta';
  }
}

.twitter {
  margin-right: 30px;
  color: $twitter;
}

.qiita {
  color: $qiita;
}
</style>
