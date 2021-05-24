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
  async asyncData() {
    const { data } = await axios.get('https://mypage.microcms.io/api/v1/blog', {
      headers: { 'X-API-KEY': 'aebf3989-317c-41bd-ba6a-e969b4612cd2' },
    })
    return data
  },
}
</script>
