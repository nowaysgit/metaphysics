<template>
  <div>
    <Tariffs :show="showTarrifs" @hide="ToggleTarrifs" />
    <section>
      <div class="title">
        <em class="italics">Калькулятор PRO</em> основан на методиках расчёта, которые применялись с самых древних времен китайских императоров
      </div>
      <div v-show="!access" class="about">
        <img class="image" src="/img/calcProAbout.png" alt="lol">
        <p class="text">
          Он вычисляет и раскрывает характер, карьеру, брак<br>и состояние человека исходя из комбинаций ветвей<br>символов и элементов Инь и ян в зависимости от года,<br>месяца, дня и времени рождения
        </p>
      </div>
    </section>
    <BigCalc v-if="access" class="calc" />
    <div v-else>
      <section class="bonuses">
        <div class="title">
          Пользуясь данным инструментом<br><em class="italics">вы получите множество бонусов!</em>
        </div>
        <div class="table">
          <div class="t1">
            <p class="title">
              Расшифровку вашей карты по более чем 40 символическим звездам!
            </p>
            <p class="text">
              Они помогут раскрыть ваш потенциал и возможности, а зная как правильно поступать, вы обретёте уверенность в себе, сделаете правильный выбор, совершите нужные сделки, научитесь слышать своё сердце и улучшите все сферы своей жизни!
            </p>
          </div>
          <div class="t2">
            <p class="title">
              Отличную шпаргалку для общения с родственниками, друзьями, коллегами и партнёрами!
            </p>
            <p class="text">
              Расшифровывайте всех, с кем общаетесь и тех, с кем общение только предстоит! Это поможет понять характер, энергию, состояние человека и поспособствует поиску правильного подхода.
            </p>
          </div>
          <div class="t3">
            <p class="title">
              Понимание, как находиться в ресурсном состоянии, невзирая на внешние обстоятельства!
            </p>
          </div>
          <div class="t4">
            <p class="title">
              Возможность увеличить свою удачу, применяя на практике дары, которые заложены в вашей карте рождения!
            </p>
          </div>
        </div>
      </section>
      <section class="access" @click="ToggleTarrifs">
        <p class="title">
          ПОЛУЧИТЬ ДОСТУП
        </p>
        <hr class="line">
      </section>
    </div>
    <section class="quote">
      <p class="text1">
        Зная свои элементы кода вы получите от меня персональные советы, благодаря которым сможете улучшить свою жизнь!
      </p>
      <p class="text2">
        Света Шарнова
      </p>
      <p class="text3">
        Основатель студии «Pian Cai»
      </p>
    </section>
  </div>
</template>

<script>
import { useStore, computed, useMeta, defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const store = useStore()
    store.dispatch('CheckAuth')
    const auth = computed(() => store.getters.isAuth)
    const access = computed(() => store.getters.isAccess)

    const showTarrifs = ref(false)
    const ToggleTarrifs = () => {
      showTarrifs.value = !showTarrifs.value
    }

    useMeta({
      title: 'Калькулятро PRO'
    })

    return { auth, access, showTarrifs, ToggleTarrifs }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.title {
  font-weight: 500;
  font-size: 66px;
  line-height: 130%;
  letter-spacing: -1.2px;
  color: black;

  .italics {
    font-style: italic;
    font-weight: 600;
    color: #8534D6;
  }
}
.calc {
  margin-top: 100px;
}
.about {
  display: flex;
  margin-top: 100px;

  .image {
    width: 360px;
    height: 400px;

    background: rgba(0, 0, 0, 0.1);
  }

  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    letter-spacing: -0.47px;
    color: black;

    margin-left: 140px;
  }
}

.bonuses {
  display: flex;
  flex-direction: column;

  margin-top: 200px;

  .title {
    font-weight: 500;
    font-size: 66px;
    line-height: 130%;
    letter-spacing: -1.2px;
    color: black;

    .italics {
      font-style: italic;
      font-weight: 600;
      color: #F57C1F;
    }
  }

  .table {
    margin-top: 100px;
    width: 100%;
    display:flex;
    flex-wrap: wrap;

    .title {
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      line-height: 140%;
      letter-spacing: -0.59px;
      color: black;
      margin: 0;
    }
    .text {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: black;
      margin-top: 30px;
      margin-bottom: 0;
    }

    .t1 {
      padding: 40px 40px 57px 40px;
      width: 50%;
      box-sizing: border-box;

      border-top: 1px solid #000000;
      border-left: 1px solid #000000;
      border-right: 1px solid #000000;
      border-bottom: 1px solid #000000;
    }
    .t2 {
      padding: 40px 40px 57px 40px;
      width: 50%;
      box-sizing: border-box;

      border-top: 1px solid #000000;
      border-right: 1px solid #000000;
      border-bottom: 1px solid #000000;
    }
    .t3 {
      padding: 40px 40px 45px 40px;
      width: 50%;
      box-sizing: border-box;

      border-bottom: 1px solid #000000;
      border-left: 1px solid #000000;
      border-right: 1px solid #000000;
    }
    .t4 {
      padding: 40px 40px 45px 40px;
      width: 50%;
      box-sizing: border-box;

      border-bottom: 1px solid #000000;
      border-right: 1px solid #000000;
    }
  }
}

.access {
  margin-top: 200px;
  width: 100%;
  cursor: pointer;

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 115px;
    line-height: 140px;
    text-align: center;
    letter-spacing: -0.16875vw;
    color: black;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .line {
    width: 100%;
    height: 4px;
    background-color: black;
  }
}
.access:hover {
  .title {
    background: linear-gradient(90deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .line {
    background: linear-gradient(90deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%);
    -webkit-text-fill-color: transparent;
  }
}

.quote {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 31.25vw;

  .text1 {
    font-style: italic;
    font-weight: 400;
    font-size: 28px;
    line-height: 140%;
    letter-spacing: -0.59px;
    color: black;
  }
  .text2{
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    letter-spacing: -0.47px;
    color: black;

    margin-top: 20px;
  }
  .text3 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.18px;
    color: rgba(0, 0, 0, 0.3);

    margin-top: 4px;
  }
}
</style>
