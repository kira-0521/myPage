<template>
  <section class="works" :style="singlePadding">
    <div class="inner works__inner">
      <PagesTitle
        :title="title"
        :subtitle="subtitle"
        data-aos="fade-up"
      ></PagesTitle>
      <ul class="works__contents">
        <li
          v-for="work in worksArray"
          :key="work.id"
          class="works__contents__list"
          data-aos="fade-up"
          @click="openModal(work)"
        >
          <figure class="works__contents__image">
            <nuxt-img :src="work.img" quality="100" preset="avatar" />
            <a :href="work.link">
              <figcaption class="works__contents__name">
                {{ work.name }}
              </figcaption>
            </a>
          </figure>
        </li>
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
import worksArray from '../../static/modules/works'

export default {
  data() {
    return {
      title: 'Works',
      subtitle: '活動実績',
      postItem: null,
      modalFlag: false,
    }
  },
  computed: {
    worksArray() {
      return worksArray
    },
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
  &__contents {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 40px;

    @include sp {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__list {
      &:hover .image {
        cursor: pointer;
        box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.4);
      }

      @include sp {
        &:not(:first-child) {
          margin-top: 35px;
        }
      }
    }

    &__image {
      & > img {
        border-radius: 15px;
        box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.3);
        transition: 0.3s;
        width: 300px;
        height: 300px;
      }
    }

    &__name {
      margin-top: 10px;
      text-align: center;
      font-weight: bold;
      color: $cBlack;
      font-size: 20px;
    }
  }
}
</style>
