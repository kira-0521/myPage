<template>
  <section class="contact" :class="paddingChange">
    <div class="inner contact__inner">
      <PagesTitle :title="title" :subtitle="subtitle"></PagesTitle>
      <Form></Form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact',
      subtitle: '連絡事項',
    }
  },
  computed: {
    paddingChange() {
      if (this.$route.path === '/contact') {
        return 'padding-los'
      } else {
        return 'padding-sum'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import './assets/css/modules/_variables.scss';

.contact {
  background-color: $cSecondBg;
  padding: 100px 0;
}

.padding-los {
  padding: 35px 0;
}
</style>
