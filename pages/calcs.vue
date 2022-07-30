<template>
  <div>
    <section class="pro">
      <p class="text">
        Раскодируйте дату своего рождения, исходя из комбинаций ветвей символов и элементов Инь и ян, и узнайте о себе всё!
      </p>
      <NuxtLink class="link" to="/pro">
        Подробнее -->
      </NuxtLink>
    </section>
    <section class="free">
      <p class="title">
        Калькуляторы
      </p>
      <CalcBlock calc="Bazi" title="Китайский календарь (Ба Цзы и Альманах)" description="Выбор дня — это выбор удачи. Выбор удачи — это своего рода усилие, прилагаемое людьми для использования благоприятных условий. Выбор благоприятного дня может сыграть определенную роль для вашего события, а так же повлиять на скорость вашего результата.<br/><br/><em>Введите в калькуляторе дату рождения и узнайте свой<br>элемент личности!</em>" />
      <CalcBlock class="margin160" calc="Ruler" title="Линейка Фэн-шуй для определения благоприятности размеров предметов" description="Фэн-шуй — это китайская философская система гармонизации каждого человека с окружающей средой. Согласно этому каждый объект с определенными размерами и в определенном месте будет излучать гармоническую энергию.<br><br>Линейка Фен-шуй используется для измерения размеров дверей, дверей спален, кухонных дверей, стола, мебели, кроватей и шкафов." />
      <CalcBlock class="margin160" calc="GuaPeople" title="Калькулятор Гуа (человека) с описаниями качеств направлений сторон света" description="Гуа — это китайский религиозный мотив, включающий восемь триграмм И Цзин, расположенных восьмиугольно вокруг символа, обозначающего баланс Инь и ян.<br><br>Введите пол и год рождения, чтобы определить свои счастливые звездные аспекты для внесения благоприятных изменений в Фэн-шуй." />
      <CalcBlock class="margin160" calc="GuaHouse" title="Калькулятор Гуа (дома) с описаниями качеств направлений сторон света" description="Гуа — это китайский религиозный мотив, включающий восемь триграмм И Цзин, расположенных восьмиугольно вокруг символа, обозначающего баланс Инь и ян.<br><br>Числа Фэн-шуй применимы как к дому, так и к людям, живущим в нем. Его цель — найти лучшую энергию Ци в доме для каждого человека, расположения кровати, направления входной двери и расположения рабочего стола." />
      <CalcBlock class="margin160" calc="GuaPeople" title="Калькулятор Ци Мэнь Дунь Цзя для расчета часовых раскладов цимень" description="Qi Men Dun Jia 奇門遁甲 — является древним китайским инструментом метафизики, используемым для прогнозирования результатов и выявления скрытых причин и следствий, что позволяет осуществлять стратегическое исполнение или решать различные задачи. Ключевая сила Qi Men Dun Jia заключается в анализе энергии текущего пространства и времени. Поместив человека в наиболее перспективную точку в нужное время и в нужном направлении, можно в конечном итоге получить наилучшие результаты для достижения своих целей." />
    </section>
    <section class="email">
      <p class="title">
        Желаете, чтобы ваша жизнь заиграла новыми красками?
      </p>
      <p class="description">
        Запишитесь на <strong>БЕСПЛАТНУЮ</strong> онлайн-встречу!<br>Введите свой адрес электронной почты и я свяжусь с вами! Или напишите мне в <a href="https://www.vk.com/" target="_blank"><u>Instagram</u></a>, <a href="https://www.vk.com/" target="_blank"><u>Telegram</u><a /> или <a href="https://www.vk.com/" target="_blank"><u>ВКонтакте</u><a />
        </a></a>
      </p>
      <div class="block">
        <p class="arrowText">
          -->
        </p>
        <input type="email" placeholder="example@example.com" class="email">
        <hr class="line">
      </div>
    </section>
  </div>
</template>

<script>
import { useStore, computed, useMeta, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const store = useStore()
    store.dispatch('CheckAuth')
    const auth = computed(() => store.getters.isAuth)
    const access = computed(() => store.getters.isAccess)

    useMeta({
      title: 'Калькулятры'
    })

    return { auth, access }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.pro {
  .text {
    font-style: italic;
    font-weight: 500;
    font-size: 66px;
    line-height: 130%;
    letter-spacing: -1.2px;
    color: #000000;

    margin-bottom: 80px;
  }
  .link {
    font-style: italic;
    font-weight: 400;
    font-size: 44px;
    line-height: 140%;
    letter-spacing: -0.98px;
    color: #000000;

    margin-left: 33.75vw;
  }
}
.free {
  margin-top: 200px;

  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 100px;
    line-height: 120%;
    letter-spacing: -2.23px;
    color: #000000;

    margin-bottom: 100px;
  }

  .margin160 {
    margin-top: 160px;
  }
}
.email {
  display: flex;
  flex-direction: column;
  margin-top: 300px;

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 86px;
    line-height: 130%;
    letter-spacing: -1.92px;
    color: #000000;
  }
  .description {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    letter-spacing: -0.47px;
    color: black;

    margin-top: 100px;
    margin-left: 31.25vw;

    a {
      color: black;
    }
  }
  .block {
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
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
    .email:active, :focus {
      outline: 0;
      border: 0;

      color: rgba(0, 0, 0, 1);
    }
    .email:hover {
      outline: 0;
      border: 0;
    }
    .line {
      margin-top: 30px;
      border-top: 3px solid rgba(0, 0, 0, 0.3);
      width: 100%;
    }
    .input:active, :focus + .line {
      outline: 0;
      border-top: 3px solid rgba(0, 0, 0, 0.7);
    }
    .input:hover + .line {
      outline: 0;
      border-top: 3px solid rgba(0, 0, 0, 1);
    }
  }
}
</style>
