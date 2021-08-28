<template>
  <layout-wrapper>
    <section class="works">
      <div class="inner works__inner">
        <PagesTitle :title="title" :subtitle="subtitle"></PagesTitle>
        <ul class="works__img">
          <template v-for="work in works">
            <li :key="work.id" class="works__img-list">
              <nuxt-img
                :src="work.img"
                quality="100"
                class="inline-block"
                preset="avatar"
                sizes="md:100% lg:500px"
              />
            </li>
          </template>
        </ul>
      </div>
    </section>
  </layout-wrapper>
</template>

<script>
export default {
  data() {
    return {
      title: 'Works',
      subtitle: '活動実績',
      works: [
        {
          id: 1,
          img: '/images/sample.jpg',
        },
        {
          id: 2,
          img: '/images/sample2.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.works {
  &__img {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 40px;

    @media screen and (max-width: 769px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
