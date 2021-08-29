<template>
  <layout-wrapper>
    <layout-contact
      :name.sync="form.name"
      :email.sync="form.email"
      :text.sync="form.text"
      @email-send="emailSend"
    ></layout-contact>
  </layout-wrapper>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        text: '',
      },
    }
  },
  methods: {
    emailSend() {
      // eslint-disable-next-line no-console
      console.log(this.form)
    },
  },
}
</script>
