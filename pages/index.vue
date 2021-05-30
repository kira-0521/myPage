<template>
  <layout-wrapper>
    <layout-visual />
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const page = params.p || '1'
    const limit = 10
    const { data } = await axios.get(
      `${process.env.microCMS_Url}blog?limit=${limit}&offset=${
        (page - 1) * limit
      }`,
      {
        headers: { 'X-API-KEY': 'aebf3989-317c-41bd-ba6a-e969b4612cd2' },
      }
    )
    return data
  },
  mounted() {
    // eslint-disable-next-line no-console
    axios
      .get(`${process.env.qiita_Url}items`, {
        params: {
          page: 1,
          per_page: 10,
        },
      })
      // eslint-disable-next-line no-console
      .then((res) => console.log(res.data))
  },
}
</script>
