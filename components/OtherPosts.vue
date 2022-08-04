<template>
  <section class="blog">
    <div v-if="posts">
      <p class="title">
        Читайте мой блог
      </p>
      <div class="posts">
        <div v-for="pos in posts" :key="pos.id" class="post">
          <img class="image" :src="`/img/blog/${pos.photo}`" alt="">
          <NuxtLink class="title" :to="`/blog/${pos.id}`">
            {{ pos.title }}
          </NuxtLink>
          <p class="date">
            {{ `${new Date(pos.date).getDay()+1} ${month[new Date(pos.date).getMonth()]} ${new Date(pos.date).getFullYear()}` }}
          </p>
        </div>
      </div>
      <div class="row">
        <NuxtLink class="link" to="/blog">
          Показать больше
        </NuxtLink>
      </div>
    </div>
    <div v-else class="post">
      <p class="text">
        ЗАГРУЗКА...
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, useFetch, useContext, useRoute } from '@nuxtjs/composition-api'
const route = useRoute()
const { $axios } = useContext()
const posts = ref([])

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
  const { data } = await $axios.get(`/blog/getAll?count=3${route.value.name === 'blog-id' ? `&excluding=${route.value.params.id}` : ''}`)
  posts.value = data
})
</script>

<style lang="scss" scoped>
.blog {
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

  .posts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

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
        margin-bottom: 0;
      }
      .title:before {
        content: '…';
        position: absolute;
        right: 30px;
        bottom: 0;
      }

      .title:after {
        content: "";
        position: absolute;
        right: 20px;
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
  .row {
    display: flex;
    justify-content: center;

    .link {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
}
@media (max-width: 1200px) {
  .blog {
    margin-top: 100px;

    .title {
      font-size: 6.153846153846154vw;
      margin-bottom: 40px;
    }

    .posts {
      .post {
        margin-bottom: 40px;

        .image {
          width: 89.7435897436vw;
          height: 64.1025641025641vw;
          object-fit: cover;
        }

        .title {
          font-size: 4.358974358974359vw;
          margin-top: 20px;
          margin-bottom: 0;
          max-width: 89.74358974358975vw;
          max-height: 22.564102564102566vw;
        }

        .title:before {
          content: '…';
          position: absolute;
          right: 30px;
          bottom: 0;
        }

        .title:after {
          content: "";
          position: absolute;
          right: 20px;
          width: 1em;
          height: 1em;
          margin-top: 0.2em;
          background: white;
        }

        .date {
          font-size: 3.8461538461538463vw;

          margin-top: 10px;
        }
      }
    }

    .row {
      .link {
        font-size: 4.615384615384616vw;
      }
    }
  }
}
</style>
