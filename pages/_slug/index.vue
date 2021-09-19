<template>
  <layout-wrapper>
    <div style="margin: 0 auto; width: 1080px">
      <h1 class="title">{{ title }}</h1>
      <p class="publishedAt">{{ publishedAt }}</p>
      <div class="post" v-html="body"></div>
    </div>
  </layout-wrapper>
</template>

<script>
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'blog',
      // エンドポイントを設定してブログ記事を動的に取得
      contentId: 't3rh_dhooy',
    })
    return data
  },
}
</script>
