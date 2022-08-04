<template>
  <div>
    <section v-if="post" class="post">
      <p class="title">
        {{ post.title }}
      </p>
      <p class="date">
        {{ `${new Date(post.date).getDay()+1} ${month[new Date(post.date).getMonth()]} ${new Date(post.date).getFullYear()}` }}
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
    <OtherPosts />
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

    useMeta({
      title: 'Пост'
    })

    return { post, month }
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
    font-size: 40px;
    line-height: 130%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000000;
    margin-top: -85px;
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
@media (max-width: 1200px) {
  .post {
    margin-bottom: 50px;

    .image {
      width: 89.74358974358975vw;
      height: 64.1025641025641vw;
      margin-top: 30px;
    }

    .title {
      font-size: 6.153846153846154vw;
      margin-top: 20px;
    }

    .date {
      font-size: 3.8461538461538463vw;
      margin-top: 20px;
    }

    .text {
      font-size: 3.8461538461538463vw;
      max-width: 100%;
      margin-top: 40px;
    }
  }
}
</style>
