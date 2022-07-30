<template>
  <div>
    <section v-show="show" class="background" @click.stop="hide">
      <div class="popup" @click.stop="">
        <p v-if="!error" class="text">
          Готово!
        </p>
        <p v-else class="text">
          {{ error }}
        </p>
        <button @click.stop="hide">
          Закрыть
        </button>
      </div>
    </section>
    <section v-if="!admin">
      Страница недоступна для вас!
    </section>
    <section v-else>
      <p class="title">
        Добавить пост
      </p>
      <div class="post">
        <input id="title" v-model="title" type="text" class="title">
        <textarea id="text" v-model="text" class="text" />
        <input id="upload-file" class="file" type="file" accept=".png, .jpg, .jpeg, .jpe, .jif, .jfif, .jfi, .heif, .hevc, .HEIC, .HEVC, .jp2, .j2k, .jpf, .jpx, .jpm, .mj2" @change="onFileChange">
        <button class="add" @click="addPost">
          Добавить
        </button>
      </div>

      <p class="title">
        Изменить пост
      </p>
      <div class="post edit">
        <select class="select" @change="onPostSelect">
          <option selected disabled value="0">
            Выберете пост
          </option>
          <option v-for="post in posts" :key="post.id" :value="post.id">
            {{ post.title }}
          </option>
        </select>
        <input id="title1" v-model="titleEdit" type="text" class="title">
        <textarea id="text1" v-model="textEdit" class="text" />
        <input id="upload-file1" class="file" type="file" accept=".png, .jpg, .jpeg, .jpe, .jif, .jfif, .jfi, .heif, .hevc, .HEIC, .HEVC, .jp2, .j2k, .jpf, .jpx, .jpm, .mj2" @change="onFileChangeEdit">
        <button class="add" @click="savePost">
          Сохранить
        </button>
      </div>

      <p class="title">
        Изменить тарифы
      </p>
      <section class="tariffs">
        <div v-for="product in products" :key="product.id" class="tariff">
          <p class="text">
            Название
          </p>
          <input id="name" v-model="productsValue[product.id-1].name" type="text" class="fluid">
          <p class="text">
            Описание
          </p>
          <input id="description" v-model="productsValue[product.id-1].description" type="text" class="fluid">
          <p class="text">
            Длительность в днях
          </p>
          <input id="duration" v-model="productsValue[product.id-1].duration" type="number" class="fluid">
          <p class="text">
            Стоимость
          </p>
          <input id="price" v-model="productsValue[product.id-1].price" type="number" class="fluid">
        </div>
      </section>
      <button class="add" @click="saveTariffs">
        Сохранить
      </button>
    </section>
  </div>
</template>

<script>
import { useStore, useMeta, defineComponent, computed, useContext, ref, useFetch } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const store = useStore()
    const { $axios } = useContext()
    store.dispatch('CheckAuth')
    const image = ref()
    const title = ref()
    const text = ref()
    const imageEdit = ref()
    const titleEdit = ref()
    const textEdit = ref()
    const idEdit = ref()
    const admin = computed(() => store.getters.isAdmin)
    const products = ref([])
    const productsValue = ref([{ name: '' }, { name: '' }, { name: '' }])
    const posts = ref([])
    const show = ref(false)
    const error = ref('')

    const hide = () => {
      show.value = false
      error.value = ''
    }

    useFetch(async () => {
      let { data } = await $axios.get('/product/getAll')
      data = data.sort((a, b) => a.id - b.id)
      products.value = data
      productsValue.value = data
    })

    useFetch(async () => {
      const { data } = await $axios.get('/blog/getAll')
      posts.value = data.sort((a, b) => a.id - b.id)
    })

    useMeta({
      title: 'Админ'
    })

    const onFileChange = (e) => {
      if (!e.target.files.length) { return }
      image.value = e.target.files[0]
    }

    const onFileChangeEdit = (e) => {
      if (!e.target.files.length) { return }
      imageEdit.value = e.target.files[0]
    }

    const onPostSelect = (e) => {
      titleEdit.value = posts.value[Number(e.target.value) - 1].title
      textEdit.value = posts.value[Number(e.target.value) - 1].text
      idEdit.value = Number(e.target.value)
    }

    const addPost = async () => {
      if (process.client) {
        const data = new FormData()

        data.append('file', image.value, image.value.name)
        data.append('title', title.value)
        data.append('text', text.value)

        await $axios.post('/blog/add', data).then((response) => {
          if (response) {
            console.log(response.data)
            show.value = true
          }
        }).catch((err) => {
          console.log(err)
          error.value = err
          show.value = true
        })
      }
    }

    const savePost = async () => {
      if (process.client) {
        const data = new FormData()
        if (imageEdit.value) {
          data.append('file', imageEdit.value, imageEdit.value.name)
        }
        data.append('id', idEdit.value)
        data.append('title', titleEdit.value)
        data.append('text', textEdit.value)

        await $axios.post('/blog/save', data).then((response) => {
          if (response) {
            console.log(response.data)
            show.value = true
            posts.value[idEdit.value - 1].title = titleEdit.value
            posts.value[idEdit.value - 1].text = textEdit.value
          }
        }).catch((err) => {
          console.log(err)
          error.value = err
          show.value = true
        })
      }
    }

    const saveTariffs = async () => {
      if (process.client) {
        await $axios.post('/blog/saveTariffs', { tariffs: productsValue.value }).then((response) => {
          if (response) {
            console.log(response.data)
            show.value = true
          }
        }).catch((err) => {
          error.value = err
          show.value = true
          console.log(err)
        })
      }
    }

    return { admin, onFileChange, addPost, title, text, products, productsValue, saveTariffs, show, hide, error, posts, titleEdit, textEdit, savePost, onFileChangeEdit, onPostSelect }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4));
}
.popup {
  box-sizing: border-box;
  position: absolute;
  width: 460px;
  height: 180px;
  right: calc(50vw - 230px);
  top: calc(50vh - 130px);
  padding: 30px 30px 45px 30px;

  background: #FFFFFF;
  border: 1px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 130%;
    letter-spacing: -0.33px;

    margin-bottom: 20px;
  }
  button {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: -0.33px;
  }
}
.title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: -0.33px;

  margin-bottom: 15px;
}
.post {
  margin-bottom: 100px;
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: -0.33px;

    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;

    margin-bottom: 20px;
  }
  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: -0.33px;

    width: 100%;
    height: 200px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: inline;

    margin-bottom: 20px;
  }
  .file {
    width: 100%;

    margin-bottom: 20px;
  }
  .add {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: -0.33px;

    border: 5px solid #ccc;
    border-radius: 4px;
  }
}
.edit {
  .select {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: -0.33px;

    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    resize: inline;

    margin-bottom: 20px;
  }

}
.tariffs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-around;
  .tariff {
    margin-bottom: 70px;
    .text {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      letter-spacing: -0.33px;
    }

    .fluid {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
      letter-spacing: -0.33px;

      height: 60px;
      padding: 12px 20px;
      box-sizing: border-box;
      border: 2px solid #ccc;
      border-radius: 4px;
      background-color: #f8f8f8;
      resize: inline;

      margin-bottom: 20px;
    }
  }
}
.add {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: -0.33px;

    border: 5px solid #ccc;
    border-radius: 4px;
  }
</style>
