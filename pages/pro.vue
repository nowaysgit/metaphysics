<template>
  <div>
    <Tariffs :show="showTarrifs" @hide="ToggleTarrifs" />
    <section>
      <div class="title">
        Калькулятор PRO основан на методиках расчёта, которые применялись <em class="italics">с самых древних времен китайских императоров<em />
        </em>
      </div>
      <div v-show="!access" class="about">
        <img class="image" src="/img/calcProAbout.png" alt="lol">
        <div class="content">
          <p class="text">
            Он вычисляет и раскрывает характер, карьеру, брак<br>и состояние человека исходя из комбинаций ветвей<br>символов и элементов Инь и ян в зависимости от года, месяца, дня и времени рождения
          </p>
          <button class="button" @click="ToggleTarrifs">
            Получить доступ
          </button>
        </div>
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
              Понимание, как находиться в ресурсном состоянии, невзирая на внешние обстоятельства!
            </p>
          </div>
          <div class="t3">
            <p class="title">
              Возможность увеличить свою удачу, применяя на практике дары, которые заложены в вашей карте рождения!
            </p>
          </div>
          <div class="t4">
            <p class="title">
              Отличную шпаргалку для общения с родственниками, друзьями, коллегами и партнёрами!
            </p>
            <p class="text">
              Расшифровывайте всех, с кем общаетесь и тех, с кем общение только предстоит! Это поможет понять характер, энергию, состояние человека и поспособствует поиску правильного подхода.
            </p>
          </div>
        </div>
      </section>
      <section class="access" @click="ToggleTarrifs">
        <p class="text">
          Улучши свою жизнь прямо сейчас!
        </p>
        <img class="arrow" src="/img/coolArrow.svg" alt="lol">
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
        <em class="text3">
          / Основатель студии «Pian Cai»
        </em>
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
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 130%;
  letter-spacing: 0.005em;
  text-transform: uppercase;
  color: #000000;

  .italics {
    font-style: italic;
    font-weight: 600;
  }
}
.calc {
  margin-top: 100px;
}
@media(max-width: 1200px) {
  .title {
    font-size: 6.153846153846154vw;

    .italics {
      font-size: 6.153846153846154vw;
    }
  }
  .calc {
    margin-top: 100px;
  }
}
.about {
  display: flex;
  margin-top: 100px;

  .image {
    width: 460px;
    height: 300px;

    background: rgba(0, 0, 0, 0.1);
  }

  .content {
    display: flex;
    flex-direction: column;
    margin-left: 160px;

    .text {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: #000000;
    }

    .button {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 130%;
      letter-spacing: -0.56px;
      color: #000000;

      margin-top: 50px;
      padding: 10px 30px 12px;
      border: 2px solid #000000;
      border-radius: 100px;
      max-width: 207px;
      max-height: 49px;
      box-sizing: border-box;
    }
  }
}
@media (max-width: 1200px) {
  .about {
    margin-top: 40px;
    flex-direction: column;

    .image {
      width: 89.74358974358975vw;
      height: 54.61538461538461vw;
    }

    .content {
      margin-left: 0;

      .text {
        margin-top: 40px;
        font-size: 3.8461538461538463vw;
        letter-spacing: -0.86px;
      }

      .button {
        font-size: 4.615384615384616vw;

        margin-top: 40px;
        padding: 2.564102564102564vw 7.6923076923076925vw 3.076923076923077vw;
        border: 2px solid #000000;
        max-width: 53.07692307692308vw;
        max-height: 12.564102564102564vw;
        box-sizing: border-box;
      }
    }
  }
}
.bonuses {
  display: flex;
  flex-direction: column;

  margin-top: 200px;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 58px;
    line-height: 130%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000000;

    .italics {
      font-style: italic;
      font-weight: 600;
    }
  }

  .table {
    margin-top: 100px;
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .title {
      font-family: 'Lato';
      font-style: italic;
      font-weight: 600;
      font-size: 30px;
      line-height: 130%;
      letter-spacing: -0.03em;
      color: #000000;
      margin: 0;
      text-transform: none;

      text-decoration: underline;
      text-decoration-color: #95F573;
      text-decoration-skip-ink: none;
      text-underline-offset: -6.5px;
      text-decoration-thickness: 8px;
    }
    .text {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: #000000;
      margin-top: 30px;
      margin-bottom: 0;
    }

    .t1 {
      width: 580px;
      box-sizing: border-box;

    }
    .t2 {
      width: 580px;
      box-sizing: border-box;
      margin-top: 283px;
    }
    .t3 {
      width: 580px;
      box-sizing: border-box;
      margin-top: 40px;
    }
    .t4 {
      width: 580px;
      box-sizing: border-box;
      margin-top: 197px;
    }
  }
}
@media (max-width: 1200px) {
  .bonuses {
    margin-top: 100px;

    .title {
      font-size: 6.153846153846154vw;

      .italics {
        font-size: 6.153846153846154vw;
      }
    }

    .table {
      margin-top: 40px;

      .title {
        font-size: 6.153846153846154vw;

        text-underline-offset: -5.5px;
        text-decoration-thickness: 6px;
      }

      .text {
        font-size: 3.8461538461538463vw;
        margin-top: 30px;
      }

      .t1 {
        width: 100%;
      }

      .t2 {
        width: 100%;
        margin-top: 60px;
      }

      .t3 {
        width: 100%;
        margin-top: 61px;
      }

      .t4 {
        width: 100%;
        margin-top: 60px;
      }
    }
  }
}
.access {
  margin-top: 200px;
  width: 100%;
  cursor: pointer;

  .text {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: -0.01em;
    color: #000000;
  }
  .arrow {
    margin-left: 783px;
    margin-top: -23px;
    margin-bottom: 37px;

    width: 48px;
    height: 100px;
  }

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 118px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.01em;
    text-transform: uppercase;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
  .line {
    border: 0;
    margin-top: 24px;
    width: 100%;
    height: 8px;
    background-color: black;
  }
}
@media (max-width: 1200px) {
  .access {
    margin-top: 100px;
    width: 100%;

    .text {
      font-size: 5.641025641025641vw;
    }

    .arrow {
      margin-left: 64.1025641025641vw;
      margin-top: 20px;
      margin-bottom: 20px;

      width: 12.307692307692308vw;
      height: 25.64102564102564vw;
    }

    .title {
      font-size: 8.017948717948717vw;
    }

    .line {
      margin-top: 12px;
      height: 3px;
    }
  }
}
.access:hover {
  .title {
    color: #FA6960;
  }
  .line {
    background: #FA6960;
    -webkit-text-fill-color: transparent;
  }
}

.quote {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 31.25vw;

  .text1 {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;
    letter-spacing: -0.01em;
    color: #000000;
  }
  .text2 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: #000000;

    .text3 {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: #000000;
      color: rgba(0, 0, 0, 0.5);
    }
  }
}
@media (max-width: 1200px) {
  .quote {
    margin-top: 60px;
    margin-left: 0;

    .text1 {
      font-size: 6.153846153846154vw;
    }

    .text2 {
      margin-top: 20px;
      font-size: 3.8461538461538463vw;

      .text3 {
        font-size: 3.8461538461538463vw;
      }
    }
  }
}
</style>
