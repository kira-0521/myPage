<template>
  <transition name="modal" appear>
    <div class="modal__overlay" @click.self="closeModal">
      <div class="modal__window">
        <div class="modal__content">
          <figure class="figure">
            <a :href="val.link">
              <nuxt-img
                :src="val.img"
                quality="100"
                preset="avatar"
                sizes="md:100% lg:500px"
                class="figure__image"
              />
            </a>
          </figure>
          <figcaption class="figcaption">
            <h3 class="figcaption__title">{{ val.name }}</h3>
            <p class="figcaption__text">
              <span class="figcaption__supplement">Skills</span>:
              {{ val.skills }}
            </p>
            <p class="figcaption__text">
              <span class="figcaption__supplement">説明</span>:
              {{ val.description }}
            </p>
          </figcaption>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    val: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.modal {
  &__overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }

  &__window {
    width: 60%;
    border-radius: 10px;
    overflow: hidden;
    background-color: $cWhite;
  }

  &__content {
    padding: 30px;
    font-size: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
}

.figure {
  display: inline-block;
  width: 40%;

  &__image {
    border-radius: 10px;
  }
}

.figcaption {
  display: inline-block;
  width: 40%;
  margin-left: 30px;
  letter-spacing: 0.1em;

  &__title {
    font-size: 30px;
    color: $cGreen;
  }

  &__text {
    font-size: 16px;
    color: $cText;
    margin-top: 10px;
  }

  &__supplement {
    font-weight: bold;
    color: $cBlack;
    margin-top: 10px;
  }
}
// transition
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
  .modal__window {
    transition: opacity 0.4s, transform 0.4s;
  }
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
  .modal__window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
