<template>
  <section class="about" :style="heightToggle">
    <div class="inner about__inner">
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
      <nuxt-img :src="img" quality="80" preset="avatar" class="about__img" />
    </div>
  </section>
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
        from: '長崎県平戸市出身',
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
  computed: {
    heightToggle() {
      const routePath = this.$route.path
      if (routePath === '/about') {
        return 'min-height: 100vh;'
      } else {
        return 'height: 100%;'
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

.about {
  background-color: $cSecondBg;
  padding: 100px 0;
  &__inner {
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 769px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &__description {
    margin-top: 20px;
    font-size: 17px;
    color: $cText;
  }

  &__text {
    margin-top: 5px;

    &:first-child {
      margin-top: 0;
      letter-spacing: 3px;
    }
    &:nth-child(2) {
      letter-spacing: 3px;
    }
    &:nth-child(3) {
      letter-spacing: 1px;
    }
    &:nth-child(4) {
      letter-spacing: 1px;
    }
  }

  &__img {
    border-radius: 15px;
    border-radius: 50%;
    width: 320px;
    @media screen and (max-width: 769px) {
      margin-top: 30px;
    }
  }
}

.link {
  text-align: right;
  margin-top: 30px;

  &__blog {
    color: $cBlack;
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
