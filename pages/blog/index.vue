<template>
  <div>
    <p class="btitle">
      Читайте мой блог
    </p>
    <section v-if="posts" class="posts">
      <div v-for="post in posts" :key="post.id" class="post">
        <img class="image" :src="`/img/blog/${post.photo}`" alt="">
        <NuxtLink class="title" :to="`/blog/${post.id}`">
          {{ post.title }}
        </NuxtLink>
        <p class="date">
          {{ `${new Date(post.date).getDay()} ${month[new Date(post.date).getMonth()]} ${new Date(post.date).getFullYear()}` }}
        </p>
      </div>
    </section>
    <section v-else class="posts">
      <p class="title">
        ЗАГРУЗКА...
      </p>
    </section>
  </div>
</template>

<script>
import { useStore, useMeta, defineComponent, ref, useFetch, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const store = useStore()
    const { $axios } = useContext()
    store.dispatch('CheckAuth')
    const posts = ref(null)

    const month = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Ноябрь',
      'Декабрь'
    ]

    useFetch(async () => {
      const { data } = await $axios.get('/blog/getAll')
      posts.value = data
    })

    useMeta({
      title: 'Блог'
    })

    return { posts, month }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.btitle {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 90px;
  line-height: 115%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #000000;

  margin-bottom: 80px;
}
.posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  .post {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

    .image {
      width: 373px;
      height: 270px;
      object-fit: cover;
    }

    .title {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 130%;
      letter-spacing: -0.01em;
      color: #000000;
      margin-top: 20px;
      max-width: 373px;
      max-height: 78px;

      overflow: hidden;
      position: relative;
      padding-right: 1em;
      text-transform: none;
    }
    .title:before {
      content: '…';
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .title:after {
      content: "";
      position: absolute;
      right: 0;
      width: 1em;
      height: 1em;
      margin-top: 0.2em;
      background: white;
    }

    .date {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: rgba(0, 0, 0, 0.4);

      margin-top: 10px;
    }
  }
}
</style>
