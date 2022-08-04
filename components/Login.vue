<template>
  <div v-show="props.show" class="background" @click.stop="emit('hide')">
    <section class="popup" @click.stop="">
      <img src="/img/close.png" alt="закрыть" class="close" @click.stop="emit('hide')">
      <div v-if="!invalid" class="title">
        Войти или зарегестрироваться
      </div>
      <section v-else>
        <div class="title">
          Введите код из письма
        </div>
        <p class="subtitle">
          Письмо отправлено на адрес
        </p>
        <p class="text">
          {{ values.email }}
        </p>
      </section>
      <EmailField v-if="!invalid" placeholder="Электронная почта" label="Email" @update="update('email', $event)" />
      <CodeField v-else label="Code" :error="error" placeholder="Введите код" @update="update('code', $event)" />
      <section>
        <button v-if="!invalid" class="button" :disabled="disabled" @click="update('success1', $event)">
          Получить код
        </button>
        <button v-else class="button" :disabled="disabled" @click="update('success2', $event)">
          Продолжить
        </button>
      </section>
      <p v-show="!invalid" class="politics">
        Нажимая кнопку «Получить код», вы соглашаетесь с условиями <u class="link" @click="ToPolitics">политики конфиденциальности</u>
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, useContext, useStore, useRouter } from '@nuxtjs/composition-api'
const { $axios } = useContext()
const store = useStore()
const router = useRouter()
const values = ref({})
const invalid = ref(false)
const disabled = ref(true)
const error = ref('')
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['hide'])
const update = async (name, event) => {
  if (!process.client) { return }
  if (name === 'success1') {
    disabled.value = true
    await $axios.$post('user/login1',
      {
        email: values.value.email
      }).then((response) => {
      if (response) {
        invalid.value = true
        error.value = ''
      }
    }).catch((err) => {
      error.value = err.response.data.message
      disabled.value = false
    })
  } else if (name === 'success2') {
    disabled.value = true
    await $axios.post('user/login2',
      {
        email: values.value.email,
        code: values.value.code
      }).then(async (response) => {
      if (response) {
        const user = await response.data.user
        store.commit('updateUser', user)
        emit('hide')
        error.value = ''
      }
    }).catch((err) => {
      console.log(err)
      if (!err.response || !err.response.data || !err.response.data.message) {
        error.value = err
      } else {
        error.value = err.response.data.message
      }
    })
  } else if (event.type === 'error') {
    disabled.value = false
  } else if (event.type === 'success') {
    values.value[name] = event.value
    disabled.value = false
    error.value = ''
  }
}
const ToPolitics = () => {
  router.push('/politics')
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
}
.popup {
  box-sizing: border-box;
  position: absolute;
  width: 360px;
  height: 360px;
  right: 12.5vw;
  top: 72px;
  padding: 30px 30px 45px 30px;

  background: #FFFFFF;
  border: 1px solid #000000;

  .close {
    position: absolute;
    width: 15px;
    height: 15px;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -0.47px;
    color: #000000;
  }
  .subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -0.26px;
    color: rgba(0, 0, 0, 0.4);

    margin-top: 20px;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -0.26px;
    color: #000000;

    margin-top: 4px;
  }
  .button {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -0.26px;
    color: #000000;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 18px 10px 20px;
    gap: 10px;
    width: 100%;
    height: 61px;

    border: 1px solid #000000;
  }
  .button:disabled {
    color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
  .politics {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 130%;
    letter-spacing: 0.01px;
    color: rgba(0, 0, 0, 0.4);

    margin-top: 30px;

    .link {
      cursor: pointer;
    }
  }
}
@media (max-width: 400px) {
  .popup {
    width: 89.74358974358975vw;
    height: 89.74358974358975vw;
    right: 5.128205128205128vw;
    top: 72px;
    padding: 30px 30px 45px 30px;

    .close {
      width: 15px;
      height: 15px;
      right: 20px;
      top: 20px;
    }

    .title {
      font-size: 5.153846153846154vw;
    }

    .subtitle {
      font-size: 3.615384615384616vw;

      margin-top: 5.128205128205128vw;
    }

    .text {
      font-size: 3.615384615384616vw;

      margin-top: 1.0256410256410255vw;
    }

    .button {
      font-size: 3.615384615384616vw;
      padding: 3.615384615384616vw 1.564102564102564vw 4.128205128205128vw;
      height: 13.64102564102564vw;
    }

    .politics {
      font-size: 2.8205128205128207vw;
      margin-top: 7.6923076923076925vw;
    }
  }
}
</style>
