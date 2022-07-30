<template>
  <header class="header" :style="{'background-image': `url(/img/${props.image})`}">
    <Login :show="showLogin" @hide="ToggleLogin" />
    <div>
      <div class="menu">
        <NuxtLink class="logo" to="/">
          Pian Cai
        </NuxtLink>
        <button v-if="!auth" class="login" @click="ToggleLogin">
          Вход
        </button>
        <button v-else class="login" @click="Logout">
          Выход
        </button>
        <NuxtLink class="calc" to="/calc">
          Калькулятор PRO
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, useStore, computed } from '@nuxtjs/composition-api'
const store = useStore()
store.dispatch('CheckAuth')
const auth = computed(() => store.getters.isAuth)

const showLogin = ref(false)
const props = defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  },
  subtitle: {
    type: String,
    default: 'Описание'
  },
  image: {
    type: String,
    default: 'index.png'
  }
})

const ToggleLogin = () => {
  showLogin.value = !showLogin.value
}
const Logout = () => {
  store.dispatch('Logout')
}
</script>

<style lang="scss" scoped>
.header {
  background-size: cover;
  width: 99vw;
  height: 800px;

  margin-bottom: 160px;
}
.menu {
  text-transform: uppercase;
  padding-top: 40px;
  .logo {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    float: left;
  }
  .calc {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    margin-right: 59px;
    float: right;
  }
  .login {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    float: right;
    background: 0;
    border: none;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
