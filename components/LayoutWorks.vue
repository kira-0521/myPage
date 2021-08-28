<template>
  <layout-wrapper>
    <section class="works">
      <div class="inner works__inner">
        <PagesTitle :title="title" :subtitle="subtitle"></PagesTitle>
      </div>
    </section>
  </layout-wrapper>
</template>

<script>
export default {
  data() {
    return {
      title: 'Works',
      subtitle: '活動実績',
    }
  },
}
</script>

<style lang="scss" scoped></style>
