<template>
  <div>
    <section v-if="post" class="post">
      <p class="title">
        {{ post.title }}
      </p>
      <p class="date">
        {{ `${new Date(post.date).getDay()} ${month[new Date(post.date).getMonth()]} ${new Date(post.date).getFullYear()}` }}
      </p>
      <img class="image" :src="`/img/blog/${post.photo}`" alt="">
      <p class="text">
        {{ post.text }}
      </p>
    </section>
    <section v-else class="post">
      <p class="text">
        ЗАГРУЗКА...
      </p>
    </section>
    <section v-if="posts" class="another">
      <p class="title">
        Читайте также
      </p>
      <div class="posts1">
        <div v-for="pos in posts" :key="pos.id" class="post1">
          <img class="image1" :src="`/img/blog/${pos.photo}`" alt="">
          <NuxtLink class="title1" :to="`/blog/${pos.id}`">
            {{ pos.title }}
          </NuxtLink>
          <p class="date1">
            {{ `${new Date(pos.date).getDay()} ${month[new Date(pos.date).getMonth()]} ${new Date(pos.date).getFullYear()}` }}
          </p>
        </div>
      </div>
    </section>
    <section v-else class="post">
      <p class="text">
        ЗАГРУЗКА...
      </p>
    </section>
  </div>
</template>

<script>
import { useStore, useMeta, defineComponent, ref, useFetch, useContext, useRoute } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const route = useRoute()
    const store = useStore()
    const { $axios } = useContext()
    store.dispatch('CheckAuth')
    const post = ref(null)
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
      const { data } = await $axios.get(`/blog/get/${route.value.params.id}`)
      post.value = data
    })

    useFetch(async () => {
      const { data } = await $axios.get(`/blog/getAll?count=3&excluding=${route.value.params.id}`)
      posts.value = data
    })

    useMeta({
      title: 'Пост'
    })

    return { post, month, posts }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  .image {
    width: 787px;
    height: 400px;
    object-fit: cover;

    margin-top: 40px;
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
  }

  .date {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: rgba(0, 0, 0, 0.4);

    margin-top: 20px;
  }

  .text {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: #000000;
    max-width: 787px;

    margin-top: 80px;
  }
}
.another {
  margin-top: 180px;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 130%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000000;

    margin-bottom: 60px;
  }

  .posts1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .post1 {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;

      .image1 {
        width: 373px;
        height: 270px;
        object-fit: cover;
      }

      .title1 {
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

      .date1 {
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
}
</style>
