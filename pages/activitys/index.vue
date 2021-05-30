<template>
  <layout-wrapper>
    <ul>
      <li v-for="(article, index) in articleList" :key="index">
        {{ article }}
      </li>
    </ul>
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
      console.log(error)
    }
  },
  mounted() {
    axios
      .get(`${process.env.qiita_Url}items`)
      // eslint-disable-next-line no-console
      .then((res) => console.log(res))
  },
}
</script>
