<template>
  <transition name="modal" appear>
    <div class="modal__overlay" @click.self="closeModal">
      <div class="modal__window">
        <div class="modal__content">
          <figure class="figure">
            <a href="#">
              <nuxt-img
                :src="val.img"
                quality="100"
                preset="avatar"
                sizes="md:100% lg:500px"
              />
            </a>
          </figure>
          <figcaption class="figcaption">
            <h3 class="figcaption__title">{{ val.name }}</h3>
            <p class="figcaption__text">{{ val.skills }}</p>
            <p class="figcaption__text">{{ val.description }}</p>
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
      required: true,
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
    height: 55%;
    width: 60%;
    overflow: hidden;
    background-color: $cWhite;
  }

  &__content {
    height: 100%;
    padding: 30px;
    font-size: 0;
  }
}

.figure {
  display: inline-block;
  width: 40%;
}

.figcaption {
  display: inline-block;
  width: 40%;
  margin-left: 30px;

  &__title {
    font-size: 30px;
    color: $cBlack;
  }

  &__text {
    font-size: 16px;
    color: $cBlack;
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
