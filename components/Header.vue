<template>
  <header class="black">
    <Login :show="showLogin" @hide="ToggleLogin" />
    <Profile :show="showProfile" @hide="ToggleProfile" />
    <div class="menu">
      <NuxtLink class="logo" to="/">
        PIAN CAI
      </NuxtLink>
      <div class="main">
        <NuxtLink class="link" to="/calcs">
          Калькуляторы
        </NuxtLink>
        <NuxtLink class="link" to="/blog">
          Блог
        </NuxtLink>
        <button class="link" @click="ToContancts">
          Контакты
        </button>
        <NuxtLink class="link" to="/pro">
          Pro
        </NuxtLink>
        <NuxtLink v-show="admin" class="link" to="/admin">
          Админ
        </NuxtLink>
      </div>
      <button v-if="!auth" class="login" @click="ToggleLogin">
        Вход
      </button>
      <button v-else class="login" @click="ToggleProfile">
        {{ !user || !user.email ? 'профиль' : user.email }}
        <div v-show="user.access" class="pro">
          PRO
        </div>
        <img src="img/arrowDown.png" alt=">" class="image">
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, useStore, computed, useRoute, onMounted, watch } from '@nuxtjs/composition-api'
const store = useStore()
const route = useRoute()
store.dispatch('CheckAuth')
const auth = computed(() => store.getters.isAuth)
const showLogin = computed(() => store.getters.showLogin)
const user = computed(() => store.getters.user)
const admin = computed(() => store.getters.isAdmin)
const showProfile = ref(false)
const ToggleLogin = () => {
  store.commit('updateShowLogin', !showLogin.value)
}
const ToggleProfile = () => {
  showProfile.value = !showProfile.value
}
const ToContancts = () => {
  const el = document.getElementById('contacts')
  el.scrollIntoView({ block: 'end', inline: 'center', behavior: 'smooth' })
}
const scrollEvent = () => {
  if (window.scrollY > scrollDistance) {
    if (transparent) {
      transparent = false
      document.querySelector('header').classList.add('black')
    }
  } else if (!transparent) {
    transparent = true
    document.querySelector('header').classList.remove('black')
  }
}
const scrollDistance = 100
let transparent = true
watch(route, (newValue, oldValue) => {
  if (process.client) {
    if (newValue.name === oldValue.name) { return }
    console.log(newValue.name, oldValue.name)
    if (newValue.name === 'index') {
      if (window.scrollY < scrollDistance) {
        document.querySelector('header').classList.remove('black')
      }
      document.addEventListener('scroll', scrollEvent)
    } else {
      document.removeEventListener('scroll', scrollEvent)
      document.querySelector('header').classList.add('black')
    }
  }
})
onMounted(() => {
  if (process.client && route.value.name === 'index') {
    document.querySelector('header').classList.remove('black')
    document.addEventListener('scroll', scrollEvent)
  }
})
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;

  &.black {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    background-color: white;

    .menu {
      .logo {
        color: black;
      }
      .main {
        .link {
          color: black;
        }
      }
      .login {
        color: black;
      }
    }
  }

  .menu {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: 0.05em;
      color: white;
    }
    .main {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0;
      gap: 40px;

      .link {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.33px;
        color: white;
      }
    }
    .login {
      display: flex;
      align-items: center;
      align-content: center;

      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.33px;

      text-align: right;
      background: 0;
      border: none;
      cursor: pointer;
      color: white;

      .pro {
        margin-left: 4px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 1px 6px;
        gap: 10px;

        background: linear-gradient(104.64deg, #4776E6 0.45%, #8E54E9 100.45%);
        border-radius: 4px;

        font-style: italic;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: -0.33px;
        color: #FFFFFF;
      }
      .image {
        width: 28px;
        height: 28px;
      }
    }
  }
}
@media (max-width: 600px) {
  header {
  left: 0;
  right: 0;
  padding-top: 20px;
  padding-bottom: 20px;

  .menu {
    padding-left: 1.5vw;
    padding-right: 1.5vw;

    .logo {
      font-size: 3.5vw;
    }
    .main {
      gap: 2.5vw;

      .link {
        font-size: 3.5vw;
      }
    }
    .login {
      font-size: 3.5vw;

      text-align: right;

      .pro {
        margin-left: 4px;
        padding: 1px 6px;
        gap: 10px;
        border-radius: 4px;

        font-size: 16px;
      }
      .image {
        width: 28px;
        height: 28px;
      }
    }
  }
}
}
</style>
