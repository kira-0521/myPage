<template>
  <form class="form" @submit.prevent="$emit('email-send')">
    <div class="form__el">
      <p class="label-title">名前<span class="caution"> (必須)</span></p>
      <input
        v-model="name"
        type="text"
        class="input-init input-area"
        placeholder="例) 山田太郎"
        required
      />
    </div>
    <div class="form__el">
      <p class="label-title">
        メールアドレス<span class="caution"> (必須)</span>
      </p>
      <input
        v-model="email"
        type="email"
        class="input-init input-area"
        placeholder="例) yamadatarou@gmail.com"
        required
      />
    </div>
    <div class="form__el">
      <p class="label-title">電話番号</p>
      <input
        v-model="tel"
        type="tel"
        class="input-init input-area"
        placeholder="例) 09012345678"
      />
    </div>
    <div class="form__el">
      <p class="label-title">内容<span class="caution"> (必須)</span></p>
      <textarea
        v-model="text"
        type="text"
        class="input-init input-area text-area"
        :rows="rows"
        required
        placeholder="例) こんにちは！"
      />
    </div>
    <BaseButton
      :padding-width="3"
      :padding-height="0.7"
      :weapon="7"
      :weight="600"
      >送信する</BaseButton
    >
  </form>
</template>

<script>
export default {
  computed: {
    form() {
      return this.$store.state.form
    },
    rows() {
      const num = this.form.text.split('\n').length
      return num > 3 ? num : 3
    },
    name: {
      get() {
        return this.$store.state.form.name
      },
      set(value) {
        this.$store.dispatch({
          type: 'updateForm',
          name: 'name',
          value,
        })
      },
    },
    email: {
      get() {
        return this.$store.state.form.email
      },
      set(value) {
        this.$store.dispatch({
          type: 'updateForm',
          name: 'email',
          value,
        })
      },
    },
    tel: {
      get() {
        return this.$store.state.form.tel
      },
      set(value) {
        this.$store.dispatch({
          type: 'updateForm',
          name: 'tel',
          value,
        })
      },
    },
    text: {
      get() {
        return this.$store.state.form.text
      },
      set(value) {
        this.$store.dispatch({
          type: 'updateForm',
          name: 'text',
          value,
        })
      },
    },
  },
}
</script>

<style scoped lang="scss">
@import './assets/css/modules/_variables.scss';

::placeholder {
  color: $placeHolder;
}

.input-init {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
}

.input-area {
  box-sizing: border-box;
  height: 50px;
  width: 300px;
  padding: 5px;
  margin-top: 5px;
  color: $cText;
  font-size: 14px;
  line-height: 2;
  background-color: $cWhite;
  border: 2px solid $cBorder;
  border-radius: 7px;
}

.text-area {
  height: 100px;
}

.label-title {
  font-size: 12px;
  color: $cText;
}

.caution {
  color: $cReverse;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  &__el {
    &:not(:first-child) {
      margin-top: 30px;
    }
  }
}
</style>
