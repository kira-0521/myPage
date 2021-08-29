<template>
  <form class="form" @submit.prevent="$emit('email-send')">
    <div class="form__el is-halfWidth">
      <p class="label-title">名前<span class="caution">※</span></p>
      <input
        :value="name"
        type="text"
        class="input-init input-area"
        @input="$emit('update:name', $event.target.value)"
      />
    </div>
    <div class="form__el is-halfWidth">
      <p class="label-title">メールアドレス<span class="caution">※</span></p>
      <input
        :value="email"
        type="text"
        class="input-init input-area"
        @input="$emit('update:email', $event.target.value)"
      />
    </div>
    <div class="form__el is-halfWidth">
      <p class="label-title">内容<span class="caution">※</span></p>
      <textarea
        :value="text"
        type="text"
        class="input-init input-area"
        @input="$emit('update:text', $event.target.value)"
      />
    </div>
    <BaseButton>送信</BaseButton>
  </form>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    email: {
      type: String,
      required: true,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
.is-halfWidth {
  width: 50%;
}

.input-init {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  outline: none;
  /* ユーザーが調整できるか */
  resize: none;
}

.input-area {
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  color: #545658;
  font-size: 13px;
  line-height: 2;
  background-color: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
}

.label-title {
  font-size: 12px;
  color: #545658;
}

.caution {
  color: #dd4b39;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  &__el {
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
}
</style>
