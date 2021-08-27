<template>
  <layout-wrapper>
    <section class="about">
      <div class="about__inner">
        <div class="about__texts">
          <PagesTitle
            :title="title"
            :subtitle="subtitle"
            :direction="titleStyle.align"
          ></PagesTitle>
          <div class="about__description">
            <p class="about__text">{{ me.name }}</p>
            <p class="about__text">{{ me.from }}</p>
            <p class="about__text">{{ me.job }}</p>
            <p class="about__text">{{ me.skills }}</p>
          </div>
          <div class="link">
            <span class="link__blog">Blog</span>
            <BaseButton
              :link="btnStyle.link"
              :color="btnStyle.color"
              :mt="btnStyle.mt"
              :padding-height="btnStyle.paddingHeight"
              :padding-width="btnStyle.paddingWidth"
              >→</BaseButton
            >
          </div>
        </div>
        <div class="about__img">
          <img :src="img" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  </layout-wrapper>
</template>

<script>
export default {
  nama: 'layout-about',
  data() {
    return {
      title: 'About',
      subtitle: '私について',
      img: '/images/me.jpg',
      me: {
        name: '田中輝良 / Kira Tanaka',
        from: '長崎県平戸市出身Web制作',
        job: 'Web制作 / Webフロントエンド開発',
        skills: 'HTML, CSS(SASS), JavaScript, Vue.js, Nuxt.js',
      },
      titleStyle: {
        align: 'left',
      },
      btnStyle: {
        link: 'blog',
        color: '#fff',
        mt: 0,
        paddingHeight: 0.5,
        paddingWidth: 0.6,
      },
    }
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.about {
  &__inner {
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  }

  &__description {
    margin-top: 20px;
    font-size: 17px;
    color: $cBlack;
  }

  &__text {
    margin-top: 5px;
    color: $cBlack;

    &:first-child {
      margin-top: 0;
    }
  }
}

.link {
  text-align: right;
  margin-top: 30px;

  &__blog {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
