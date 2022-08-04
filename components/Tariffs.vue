<template>
  <div v-show="props.show" class="background" @click.stop="emit('hide')">
    <section class="popup" @click.stop="">
      <img src="/img/close.png" alt="закрыть" class="close" @click.stop="emit('hide')">
      <div v-show="error" class="errors">
        {{ error }}
      </div>
      <p class="title">
        Получите доступ к онлайн-инструменту, который позволит раскрыть код даты рождения!
      </p>
      <div class="tariffs" unselectable="on">
        <div v-for="product in products" :key="product.id" class="tariff">
          <input
            :id="product.id"
            type="radio"
            name="radio"
            :value="product.id"
            :checked="product.id === 3 ? true : false"
            @click="() => change(product.id)"
          >
          <label :for="product.id">
            <p class="name">
              {{ product.name }}
            </p>
            <p class="price">
              {{ format(product.price.toString()) }} ₽
            </p>
          </label>
        </div>
      </div>
      <button class="button" @click="buy">
        Купить
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref, useContext, useFetch, useStore } from '@nuxtjs/composition-api'
const { $axios } = useContext()
const store = useStore()
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['hide'])
const error = ref('')
const products = ref([])
const current = ref(3)

useFetch(async () => {
  const { data } = await $axios.get('/product/getAll')
  products.value = data.sort((a, b) => a.id - b.id)
})
const change = (value) => {
  current.value = value
}
const buy = async () => {
  if (process.client) {
    await $axios.get(`/yookassa/getUrl/${current.value}`).then((response) => {
      if (response) {
        window.open(response.data)
        emit('hide')
      }
    }).catch((err) => {
      if (err.response.data.message === 'Пользователь не авторизован!') {
        store.commit('updateShowLogin', true)
        emit('hide')
      } else {
        error.value = err.response.data.message
      }
    })
  }
}
const format = (value) => {
  let res;
  (value.includes(',')) ? res = new Intl.NumberFormat('ru-RU').format(value.replace(',', '.')).replace('.', ',') : res = new Intl.NumberFormat('ru-RU').format(value).replace(',', '.')
  return res
}
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
}
.popup {
  position: relative;
  top: calc(75vh - 50%);
  left: calc(50vw - 25%);
  z-index: 2;
  width: 47.5vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 50px 50px 60px 50px;
  box-sizing: border-box;
  //border-radius: 24px;

  .close {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 40px;
    top: 40px;
    cursor: pointer;
  }

  .errors {
    margin-bottom: 20px;
  }

  .title {
    font-style: italic;
    font-weight: 500;
    font-size: 28px;
    line-height: 140%;
    letter-spacing: -0.6px;
    color: #000000;

    margin-bottom: 40px;
  }

  .tariffs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    input[type=radio] {
      display: none;
    }

    .tariff {
      label {
        width: 9.375vw;
        height: 6.25vw;
        border: 2px solid rgba(0, 0, 0, 0.2);
        //border-radius: 16px;
        padding: 0.625vw 1.5vw 0.8125vw;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;

        .name {
          width: 6.8vw;

          font-style: normal;
          font-weight: 500;
          font-size: 1.5vw;
          line-height: 160%;
          letter-spacing: -0.47px;
          color: rgba(0, 0, 0, 0.2);
        }

        .price {
          width: 6.8vw;

          font-style: normal;
          font-weight: 600;
          font-size: 1.75vw;
          line-height: 140%;
          letter-spacing: -0.6px;
          color: rgba(0, 0, 0, 0.2);
        }
      }
      input[type=radio]:checked + label {
        border: 2px solid rgba(0, 0, 0, 1);
        .name {
          color: rgba(0, 0, 0, 1);
        }
        .price {
          color: rgba(0, 0, 0, 1);
        }
      }
      label:hover {
        border: 2px solid rgba(0, 0, 0, 0.5);
        .name {
          color: rgba(0, 0, 0, 0.5);
        }
        .price {
          color: rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 10px 28px;

    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 140%;
    color: #FFFFFF;

    width: 100%;
    height: 87px;

    background: black;
    //border-radius: 16px;

    margin-top: 40px;
  }
}

@media (max-width: 1200px) {
  .popup {
    width: 90vw;
    left: calc(30vw - 25%);
    padding: 2.564102564102564vw 2.564102564102564vw 3.8461538461538463vw 2.564102564102564vw;

    .close {
      width: 2.564102564102564vw;
      height: 2.564102564102564vw;
      right: 2.564102564102564vw;
      top: 2.564102564102564vw;
    }

    .errors {
      margin-bottom: 20px;
    }

    .title {
      font-size: 4.2897435897435894vw;
      margin-bottom: 20px;
    }

    .tariffs {
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-around;

      .tariff {
        label {
          margin-bottom: 20px;
          width: 36.375vw;
          height: 19.25vw;
          border: 2px solid rgba(0, 0, 0, 0.2);
          padding: 0.625vw 1.5vw 0.8125vw;

          .name {
            width: 100%;
            font-size: 5.5vw;
          }

          .price {
            width: 100%;
            font-size: 5.75vw;
          }
        }
      }
    }

    .button {
      padding: 2.564102564102564vw 1.282051282051282vw 3.5897435897435894vw;
      font-size: 5.641025641025641vw;

      width: 100%;
      height: 14.871794871794872vw;

      margin-top: 20px;
    }
  }
}
</style>
