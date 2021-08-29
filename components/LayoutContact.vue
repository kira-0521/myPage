<template>
  <layout-wrapper>
    <section class="contact">
      <div class="inner contact__inner">
        <PagesTitle :title="title" :subtitle="subtitle"></PagesTitle>
        <Form
          :name="name"
          :email="email"
          :text="text"
          @emilSend="$emit('email-send')"
        ></Form>
      </div>
    </section>
  </layout-wrapper>
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
  data() {
    return {
      title: 'Contact',
      subtitle: '連絡事項',
    }
  },
}
</script>

<style lang="scss" scoped></style>
