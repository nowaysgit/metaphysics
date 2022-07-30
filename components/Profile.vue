<template>
  <div v-show="props.show" class="background" @click.stop="emit('hide')">
    <section class="popup" @click.stop="">
      <img src="img/close.png" alt="закрыть" class="close" @click.stop="emit('hide')">
      <div :class="access ? 'tariff pro' : 'tariff standard'" @click="ToPro">
        <div class="info">
          <p :class="access ? 'name pro' : 'name standard'">
            Калькулятор PRO
          </p>
          <p v-if="access" class="date pro">
            Доступен до {{ !user || !user.accessDate ? 'дата' : new Date(user.accessDate).toLocaleString('ru', { day: '2-digit', month: '2-digit', year: '2-digit' }) }}
          </p>
          <p v-else class="date standard">
            Получите доступ сейчас
          </p>
        </div>
        <img :src="access ? 'img/arrowRightWhite.png' : 'img/arrowRightBlack.png'" alt=">">
      </div>
      <div class="buttons">
        <a class="button help" href="https://www.vk.com/" target="_blank">Написать в поддержку</a>
        <button class="button exit" @click="Logout">
          Выйти
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, useRouter, useStore } from '@nuxtjs/composition-api'
const store = useStore()
const router = useRouter()
const access = computed(() => store.getters.isAccess)
const user = computed(() => store.getters.user)
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['hide'])

const ToPro = () => {
  router.push('/pro')
  emit('hide')
}

const Logout = () => {
  store.dispatch('Logout')
  emit('hide')
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
}
.popup {
  position: fixed;
  width: 360px;
  right: 12.5vw;
  top: 76px;

  background: #FFFFFF;
  border: 1px solid #000000;

  .close {
    position: absolute;
    width: 20px;
    height: 20px;
    right: -30px;
    top: -30px;
    cursor: pointer;
  }

  .tariff {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px 30px 22px 30px;

    border-bottom: 1px solid #000000;
    cursor: pointer;

    &.pro {
      background: linear-gradient(90deg, #4E54C8 0%, #6D72E9 100%);
    }

    &.standard {
      background: white;
    }

    .info {
      .name {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.33px;

        &.pro {
          color: white;
        }

        &.standard {
          color: black;
        }

        margin-bottom: 4px;
      }

      .date {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.26px;

        &.pro {
          color: rgba(255, 255, 255, 0.6);
        }

        &.standard {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }

    .image {
      width: 6px;
      height: 12px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 30px 34px 30px;

    .button {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -0.33px;
      padding: 0;
    }

    .help {
      color: #000000;
    }

    .exit {
      color: #F04438;
      margin-top: 16px;
    }
  }
}
</style>
