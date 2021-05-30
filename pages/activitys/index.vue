<template>
  <layout-wrapper>
    <article v-for="(article, i) in articleList" :key="i">
      <img
        :src="article.user.profile_image_url"
        alt=""
        style="width: 50px; height: 50px; border-radius: 5px"
      />
      <a :href="article.url">{{ article.title }}</a>
    </article>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ context }) {
    try {
      const res = await axios.get(`${process.env.qiita_Url}items`, {
        params: {
          page: 1,
          per_page: 10,
        },
      })
      return {
        articleList: res.data,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
  mounted() {
    axios
      .get(`${process.env.qiita_Url}items`, {
        params: {
          page: 1,
          per_page: 3,
        },
      })
      // eslint-disable-next-line no-console
      .then((res) => console.log(res.data))
  },
}
</script>
