<template>
  <transition name="modal" appear>
    <div class="modal__overlay" @click.self="closeModal">
      <div class="modal__window">
        <div class="modal__content">
          <figure class="figure">
            <a :href="val.link" target="_blank">
              <nuxt-img
                :src="val.img"
                quality="100"
                preset="avatar"
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
@import './assets/css/modules/_mixin.scss';

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
    width: 90%;
    border-radius: 10px;
    overflow: hidden;
    background-color: $cWhite;

    @include pc {
      width: 60%;
    }
  }

  &__content {
    padding: 15px;
    font-size: 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    position: relative;

    @include pc {
      padding: 50px 30px;
      flex-direction: row;
    }
  }
}

.figure {
  display: inline-block;

  &__image {
    border-radius: 10px;

    @include pcmiddle {
      height: 50%;
      width: 70%;
      margin: 0 auto;
    }
  }
}

.figcaption {
  display: inline-block;
  letter-spacing: 0.1em;

  @include pc {
    width: 50%;
  }
  &__title {
    font-size: 30px;
    color: $cText;
    position: relative;
    margin-left: 15px;

    &::before {
      content: '';
      width: 3px;
      height: 29px;
      border-radius: 10px;
      position: absolute;
      top: 11px;
      left: -15px;
      background-color: #25c49f;
    }
  }

  &__text {
    font-size: 16px;
    color: $cText;
    margin-top: 10px;

    @include pc {
      width: 70%;
    }
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
