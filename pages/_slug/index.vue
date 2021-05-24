<template>
  <layout-wrapper>
    <main class="main">
      <h1 class="title">{{ title }}</h1>
      <p class="publishedAt">{{ publishedAt }}</p>
      <!-- v-htmlを用いることで入ってきたbodyをDOMとして扱うことができる -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="post" v-html="body"></div>
    </main>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://mypage.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': 'aebf3989-317c-41bd-ba6a-e969b4612cd2' },
      }
    )
    // 帰ってきたオブジェクトのイチデータをコンポーネントにマージしている
    return data
  },
}
</script>

<style></style>
