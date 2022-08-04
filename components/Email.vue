<template>
  <section id="email" class="email">
    <p class="title">
      Желаете, чтобы ваша жизнь <em class="italics">заиграла новыми красками?</em>
    </p>
    <p class="description">
      Запишитесь на <em class="italics">БЕСПЛАТНУЮ</em> онлайн-встречу!<br>Введите свой адрес электронной почты и я свяжусь с вами!
    </p>
    <div class="block">
      <input v-model="value" :disabled="sent" type="email" placeholder="example@example.com" class="email">
      <p v-show="value" class="arrowText" :disabled="sent" @click="send">
        {{ sent ? "ОК" : "-->" }}
      </p>
      <hr class="subLine">
    </div>
  </section>
</template>

<script setup>
import { ref, useContext } from '@nuxtjs/composition-api'
const { $axios } = useContext()
const value = ref('')
const sent = ref(false)

const send = async () => {
  if (process.client) {
    if (sent.value) { return }
    await $axios.post('/user/sendRecordEmail', { email: value.value }).then((response) => {
      if (response) {
        console.log(response)
        sent.value = true
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>
.email {
  display: flex;
  flex-direction: column;
  margin-top: 220px;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    line-height: 130%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000000;
    .italics {
      font-style: italic;
    }
  }
  .description {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: #000000;

    margin-top: 80px;
    margin-left: 620px;

    .italics {
      font-style: italic;
      font-weight: 600;
    }
  }
  .block {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    .email {
      font-style: normal;
      font-weight: 500;
      font-size: 70px;
      line-height: 130%;
      letter-spacing: -1.56px;

      color: rgba(0, 0, 0, 0.3);

      border: 0;

      margin-top: 100px;
    }
    .arrowText {
      font-weight: 500;
      font-size: 70px;
      line-height: 130%;

      cursor: pointer;
    }
    .arrowText[disabled="disabled"] {
      cursor: default;
      color: #b2b2b2;
    }
    .email:active, :focus {
      outline: 0;
      border: 0;

      color: rgba(0, 0, 0, 1);
    }
    .email:hover {
      outline: 0;
      border: 0;
    }
    .email[disabled="disabled"] {
      cursor: default;
      pointer-events: none;
    }
    .subLine {
      margin-top: 30px;
      border-top: 3px solid rgba(0, 0, 0, 0.3);
      width: 100%;
    }
    .input:active, :focus + .subLine {
      outline: 0;
      border-top: 3px solid rgba(0, 0, 0, 0.7);
    }
    .input:hover + .subLine {
      outline: 0;
      border-top: 3px solid rgba(0, 0, 0, 1);
    }
  }
}
@media (max-width: 1200px) {
  .email {
    margin-top: 100px;

    .title {
      font-size: 6.153846153846154vw;
    }

    .description {
      font-size: 3.8461538461538463vw;
      margin-left: 0;
      margin-top: 30px;
    }

    .block {
      .email {
        font-size: 6.153846153846154vw;
        max-width: 80%;
        margin-top: 30px;
      }

      .arrowText {
        font-size: 6.153846153846154vw;
      }

      .subLine {
        margin-top: 12px;
        border-top: 2px solid rgba(0, 0, 0, 0.3);
      }

      .input:active, :focus + .subLine {
        border-top: 2px solid rgba(0, 0, 0, 0.7);
      }

      .input:hover + .subLine {
        border-top: 2px solid rgba(0, 0, 0, 1);
      }
    }
  }
}
</style>
