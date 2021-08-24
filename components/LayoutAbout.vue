<template>
  <layout-wrapper>
    <div class="about">
      <div class="about__text">
        <div class="title">
          <h2 class="about__title">{{ section.title }}</h2>
          <p class="about__subtitle">{{ section.subtitle }}</p>
        </div>
        <div class="description">
          <p class="about__description">{{ description }}</p>
        </div>
        <div class="link">
          Blog
          <BaseButton></BaseButton>
        </div>
      </div>
      <div class="about__img">
        <img :src="img.me" width="100%" height="100%" alt="" />
      </div>
    </div>
  </layout-wrapper>
</template>

<script>
export default {
  nama: 'layout-about',
  data() {
    return {
      section: {
        title: 'About',
        subtitle: '私について',
      },
      description: '田中輝良 / Kira Tanaka長崎県平戸市出身Web制作',
      img: {
        me: '@/assets/images/me.JPG',
      },
    }
  },
}
</script>
