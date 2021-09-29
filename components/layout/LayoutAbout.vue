<template>
  <section class="about" :style="heightToggle">
    <div class="inner about__inner">
      <div class="about__texts">
        <PagesTitle
          :title="pageTitle.title"
          :subtitle="pageTitle.subtitle"
          :direction="pageTitle.align"
        ></PagesTitle>
        <div class="about__description">
          <p class="about__text">{{ myInfo.name }}</p>
          <p class="about__text">{{ myInfo.from }}</p>
          <p class="about__text">{{ myInfo.job }}</p>
          <p class="about__text">{{ myInfo.skills }}</p>
        </div>
        <div class="link">
          <span class="link__blog">Blog</span>
          <BaseButton
            :link="btn.link"
            :color="btn.color"
            :bg="btn.bg"
            :mt="0"
            :padding-height="0.5"
            :padding-width="0.6"
            >→</BaseButton
          >
        </div>
      </div>
      <nuxt-img
        :src="image"
        data-aos="zoom-in"
        quality="80"
        preset="avatar"
        class="about__img"
      />
    </div>
  </section>
</template>

<script>
export default {
  nama: 'layout-about',
  data() {
    return {
      pageTitle: {
        title: 'About',
        subtitle: '私について',
        align: 'left',
      },
      image: '/images/me.jpg',
      myInfo: {
        name: '田中輝良 / Kira Tanaka',
        from: '長崎県平戸市出身',
        job: 'Web制作 / Webフロントエンド開発',
        skills: 'HTML, CSS(SASS), JavaScript, Vue.js, Nuxt.js',
      },
      btn: {
        link: 'blog',
        color: '#072720',
        bg: '#25c49f',
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
@import './assets/css/modules/_mixin.scss';

.about {
  background-color: $cSecondBg;
  padding: 100px 0;
  &__inner {
    display: flex;
    justify-content: space-evenly;

    @include sp {
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
    transition: 0.3s;
    @include sp {
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
