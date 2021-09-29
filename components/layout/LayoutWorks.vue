<template>
  <section class="works" :style="singlePadding">
    <div class="inner works__inner">
      <PagesTitle :title="title" :subtitle="subtitle"></PagesTitle>
      <ul class="works__img">
        <template v-for="work in works">
          <li
            :key="work.id"
            class="works__img-list"
            data-aos="fade-up"
            @click="openModal(work)"
          >
            <figure>
              <nuxt-img
                :src="work.img"
                quality="100"
                preset="avatar"
                class="image"
              />
              <a href="#">
                <figcaption>{{ work.name }}</figcaption>
              </a>
            </figure>
          </li>
        </template>
        <Modal
          v-if="modalFlag"
          :val="postItem"
          @close-modal="closeModal"
        ></Modal>
      </ul>
    </div>
  </section>
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
          name: 'Log',
          img: '/images/log.png',
          skills: 'HTML, CSS, JavaScript',
          description:
            'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
        },
        {
          id: 2,
          name: 'StayWorld',
          img: '/images/stayworld.png',
          skills: 'HTML, CSS, JavaScript',
          description:
            'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
        },
      ],
      postItem: null,
      modalFlag: false,
    }
  },
  computed: {
    singlePadding() {
      const routeName = this.$route.path
      if (routeName === '/works') {
        return 'padding: 40px 0;'
      } else {
        return 'padding: 100px 0;'
      }
    },
  },
  methods: {
    openModal(item) {
      this.postItem = item
      this.modalFlag = true
    },
    closeModal() {
      this.modalFlag = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';
@import './assets/css/modules/_mixin.scss';

.works {
  &__img {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 40px;

    @include sp {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &__img-list {
    &:hover .image {
      cursor: pointer;
      box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.4);
    }
  }
}

.image {
  border-radius: 15px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  width: 300px;
  height: 300px;
}
</style>
