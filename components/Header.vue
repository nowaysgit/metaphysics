<template>
  <header class="black">
    <Login :show="showLogin" @hide="ToggleLogin" />
    <Profile :show="showProfile" @hide="ToggleProfile" />
    <div class="menu">
      <button class="logo" @click="GoTo('/')">
        <img src="/img/logo.png" style="height: 26px; width: 26px; margin-right: 10px;">
        <p style="padding-top: 2px;">
          PIAN CAI
        </p>
      </button>
      <img
        v-show="windowWidth < 1200"
        src="/img/menu.png"
        alt="="
        class="mobileMenuButton"
        @click="ToggleMobile"
      >
      <div v-if="windowWidth < 1200 && showMobile" class="mobileMenu">
        <img
          src="/img/menu.png"
          alt="="
          style="margin-bottom: 27px; align-self: flex-end;"
          @click="ToggleMobile"
        >
        <button class="link" @click="GoTo('/calcs')">
          Калькуляторы
        </button>
        <button class="link" @click="GoTo('/pro')">
          Калькулятор PRO
        </button>
        <button class="link" @click="GoTo('/blog')">
          Блог
        </button>
        <button class="link" @click="ToContancts">
          Контакты
        </button>
        <button v-show="admin" class="link" @click="GoTo('/admin')">
          Админ
        </button>
        <button v-if="!auth" class="login" @click="ToggleLogin">
          Вход
        </button>
        <button v-else class="login" @click="ToggleProfile">
          {{ !user || !user.email ? 'профиль' : user.email }}
          <div v-show="user.access" class="pro">
            PRO
          </div>
          <img src="/img/arrowDown.png" alt=">" class="image">
        </button>
      </div>
      <div v-if="windowWidth > 1199" class="pcMenu">
        <div class="main">
          <NuxtLink class="link" to="/calcs">
            Калькуляторы
          </NuxtLink>
          <NuxtLink class="link" to="/pro">
            Калькулятор PRO
          </NuxtLink>
          <NuxtLink class="link" to="/blog">
            Блог
          </NuxtLink>
          <button class="link" @click="ToContancts">
            Контакты
          </button>
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
          <img src="/img/arrowDown.png" alt=">" class="image">
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, useStore, computed, useRoute, useRouter, onMounted, watch } from '@nuxtjs/composition-api'
const store = useStore()
const route = useRoute()
const router = useRouter()
store.dispatch('CheckAuth')
const auth = computed(() => store.getters.isAuth)
const showLogin = computed(() => store.getters.showLogin)
const user = computed(() => store.getters.user)
const admin = computed(() => store.getters.isAdmin)
const showProfile = ref(false)
const showMobile = ref(false)
const windowWidth = ref(1000)
const ToggleLogin = () => {
  store.commit('updateShowLogin', !showLogin.value)
  HideMobile()
}
const ToggleProfile = () => {
  showProfile.value = !showProfile.value
  HideMobile()
}
const ToContancts = () => {
  const el = document.getElementById('contacts')
  el.scrollIntoView({ block: 'end', inline: 'center', behavior: 'smooth' })
  HideMobile()
}
const ToggleMobile = () => {
  showMobile.value = !showMobile.value
}
const HideMobile = () => {
  showMobile.value = false
}
const GoTo = (url) => {
  HideMobile()
  router.push(url)
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
  if (process.client) {
    if (route.value.name === 'index') {
      document.querySelector('header').classList.remove('black')
      document.addEventListener('scroll', scrollEvent)
    }
    windowWidth.value = window.innerWidth
  }
  window.onresize = () => {
    windowWidth.value = window.innerWidth
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
  z-index: 1;

  &.black {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    background-color: white;

    .menu {
      .logo {
        color: black;
      }
      .mobileMenuButton {
        filter: none;
      }

      .pcMenu {

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
  }

  @media(max-width: 1200px) {
    .menu {
      margin-left: 5.128205128205128vw;
      margin-right: 5.128205128205128vw;
      width: 100%;
    }
  }
  @media(min-width: 1200px) {
    .menu {
      width: 1200px;
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mobileMenuButton {
      filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(310deg) brightness(110%) contrast(101%);
    }
    .logo {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: 0.05em;
      color: white;
      display: flex;
    }
    .logo:hover {
      color: #FA6960;
    }

    .pcMenu {
      width: 89%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .main {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0;
        gap: 40px;
        margin-left: auto;
        margin-right: auto;

        .link {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
          letter-spacing: -0.26px;
          color: white;
        }
        .link:hover {
          color: #FA6960;
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
        letter-spacing: -0.26px;

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
      .login:hover {
        color: #FA6960;
      }
    }

    .mobileMenu {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: absolute;
      flex-direction: column;
      top: 0;
      right: 0;
      padding: 20px 5.1282051282vw;
      align-content: flex-start;
      background: white;
      border-bottom: 1px solid rgb(0, 0, 0);

      .link {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.26px;
        color: black;
        margin-bottom: 13px;
        padding-left: 0;
        margin-left: 0;
      }

      .login {
        display: flex;
        align-items: center;
        align-content: center;

        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.26px;

        text-align: right;
        background: 0;
        border: none;
        cursor: pointer;
        color: black;

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
}
</style>
