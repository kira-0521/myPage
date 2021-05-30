<template>
  <layout-wrapper>
    <article class="article">
      <aside class="article__aside">
        <h1 class="id">{{ id }}</h1>
        <h1 class="title">{{ title }}</h1>
        <p class="publishedAt">{{ publishedAt }}</p>
        <p class="category">{{ category && category.name }}</p>
      </aside>
      <!-- v-htmlを用いることで入ってきたbodyをDOMとして扱うことができる -->
      <section class="article__main">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="post" v-html="body"></div>
      </section>
    </article>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    // ES6分割代入(dataはオブジェクトのイチプロパティ)
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

<style lang="scss" scoped>
ul {
  list-style: none;
}
.post {
  margin: 0 auto;
  max-width: 1080px;
  text-align: center;

  & > p {
    font-size: 38px;
    color: red;
    line-height: 1.8;
    letter-spacing: 0.2px;
  }
  & > h3 {
    font-size: 50px;
  }
}

p {
  color: red;
}

#hbdd025c0db {
  color: red;
}
</style>
