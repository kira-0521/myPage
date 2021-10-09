<template>
  <layout-wrapper>
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
export default {
  async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: 'blog',
      queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
    })
    return data
  },
  created() {
    console.log(this.$microcms)
  },
}
</script>
