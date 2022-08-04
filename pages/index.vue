<template>
  <div>
    <section class="info">
      <div class="container">
        <div class="title">
          Студия китайской метафизики Светы Шарновой
        </div>
        <div class="description">
          Желаете, чтобы ваша жизнь заиграла новыми красками? Запишитесь на <u style="cursor: pointer;" @click="ToEmail">бесплатную онлайн-консультацию!</u>
        </div>
      </div>
    </section>
    <hr class="zatichka">
    <section class="about">
      <div class="title">
        Всем привет! Меня зовут Светлана. Я специалист, знающий как <em class="italics">правильно управлять своей жизнью, привлекать к себе удачу и благополучие!<em />
        </em>
      </div>
      <div class="content">
        <img src="/img/indexAbout.png" alt="About Image" class="image">
        <div class="info1">
          <p class="text1">
            Я консультант / наставник по Фэн-шуй и БаЦзы, который помогает получить желаемое в карьере и личной жизни. Со мной вы сможете реализовать себя как личность, жить в комфорте, заниматься любимым делом и проводить отпуск с наслаждением.
          </p>
          <div class="stats">
            <div class="stat">
              <div class="text2">
                Более 12 лет!
                <hr class="line1">
              </div>
              <p class="text1">
                Изучаю метафизику
              </p>
            </div>
            <div class="stat">
              <div class="text2">
                380+
                <hr class="line2">
              </div>
              <p class="text1">
                Клиентов
              </p>
            </div>
          </div>
          <p class="text1">
            Прошла обучение у известных китайских мастеров и консультации у опытных специалистов. При работе я использую формулы и методы древних мастеров, а вы получаете пошаговые руководства, которые позволяют получать максимальные результаты.
          </p>
        </div>
      </div>
    </section>
    <section class="certificates">
      <div class="title">
        Я СЕРТИФИЦИРОВАННЫЙ СПЕЦИАЛИСТ!
      </div>
      <div class="content">
        <img src="/img/sertificates/1.png" alt="About Image" class="image">
        <img src="/img/sertificates/2.png" alt="About Image" class="image">
        <img src="/img/sertificates/3.png" alt="About Image" class="image">
        <img src="/img/sertificates/4.png" alt="About Image" class="image">
        <img src="/img/sertificates/5.png" alt="About Image" class="image">
        <img src="/img/sertificates/6.png" alt="About Image" class="image">
        <img src="/img/sertificates/7.png" alt="About Image" class="image">
        <img src="/img/sertificates/8.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/9.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/10.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/11.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/12.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/13.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/14.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/15.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/16.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/17.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/18.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/19.png" alt="About Image" class="image">
        <img v-show="showCertificates" src="/img/sertificates/20.png" alt="About Image" class="image2">
        <img v-show="showCertificates" src="/img/sertificates/21.png" alt="About Image" class="image2">
      </div>
      <div class="center">
        <button class="button" @click="ToggleCertificates">
          {{ showCertificates ? 'Скрыть' : 'Показать больше' }}
        </button>
      </div>
      <p class="subDescription">
        Одна из ключевых причин, по которой я начала изучать БаЦзы и Фэн-шуй — чтобы лучше понять и узнать себя. Почему периодами даётся все легко, а потом настругает пауза? Это долгосрочный эффект или временное везение? Что я могу сделать, чтобы добиться лучшего результата?
      </p>
    </section>
    <section class="metaphysics-about">
      <img src="/img/indexMetaphysicsAbout1.png" alt="About Image" class="image">
      <div class="description">
        Возможно, вы не поверите, но почти за каждым успешным человеком стоят сильные метафизические специалисты. Люди редко добиваются успеха только благодаря силе и удаче.
      </div>
      <div class="title">
        Китайская метафизика основана на поиске Ци — <em class="italics">чистой энергии, дающей жизнь всему живому<em />
          <hr class="line">
        </em>
      </div>
      <div class="description">
        Ци — это невидимые энергетические потоки, концентрирующиеся в определенных точках времени и пространства. Умение улавливать их можно сравнить с удачей или тем явлением, о котором мы привыкли говорить: «Оказаться в нужное время в нужном месте».
      </div>
      <div class="doubleImage">
        <img src="/img/indexMetaphysicsAbout3.png" alt="About Image" class="image first">
        <img src="/img/indexMetaphysicsAbout2.png" alt="About Image" class="image">
      </div>
    </section>
    <section class="metaphysics-techniques">
      <div class="title">
        Каждая из техник китайской метафизики открывает перед вами <em class="italics">мир безграничных возможностей!<em />
          <hr class="line">
        </em>
      </div>
      <div class="description">
        Учение о Ци — ключ к успеху и удаче в делах, обретению своего призвания, формированию надёжного окружения и уверенному развитию бизнеса.
      </div>
      <div class="description">
        Натальная карта Ба Цзы помогает выбрать верного спутника и обрести счастье в личной жизни.
      </div>
      <div class="description">
        С помощью техник Фэн Шуй, Сань Хе, Сань Юань, Водных формул и БаЧжай вы сможете создать дом мечты, в котором царит только гармония и благополучие.
      </div>
      <img src="/img/indexMetaphysicsAbout4.png" alt="About Image" class="image">
      <div class="description2">
        «Жизнь слишком коротка — обретайте то, чего достойны!»
        <p class="name">
          Света Шарнова / Основатель студии «Pian Cai»
        </p>
      </div>
      <div class="circle">
        <p class="dignity m1">
          Любовь
        </p>
        <p class="dignity m2">
          Красота
        </p>
        <p class="dignity m3">
          Дружба
        </p>
        <p class="dignity m4">
          Бизнес
        </p>
        <p class="dignity m5">
          Здоровье
        </p>
        <p class="dignity m6">
          Долголетие
        </p>
        <p class="text">
          — во всех сферах участвует энергия Ци, а умение находить её и взаимодействовать с ней выведет вашу жизнь на новый уровень!
        </p>
      </div>
    </section>
    <Email />
    <Pro />
    <OtherPosts />
  </div>
</template>

<script>
import { useMeta, defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
export default defineComponent({
  setup () {
    const showCertificates = ref(false)
    useMeta({
      title: 'PIAN CIA'
    })
    const ToEmail = () => {
      console.log('LOL')
      const el = document.getElementById('email')
      el.scrollIntoView({ block: 'end', inline: 'center', behavior: 'smooth' })
    }
    const ToggleCertificates = () => {
      showCertificates.value = !showCertificates.value
    }
    onMounted(() => {
      if (process.client) {
        showCertificates.value = window.innerWidth < 1200
      }
      window.onresize = () => {
        showCertificates.value = window.innerWidth < 1200
      }
    })
    return { ToEmail, showCertificates, ToggleCertificates }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.line {
  height: 8px;
  background: #F8A577;
  border: 0;
  position: absolute;
  margin-top: -13px;
  margin-left: 1px;
  z-index: -1;
}
.info {
  height: 900px;
  width: 99vw;
  left: 0;
  right: 0;
  top: 200px;
  position: absolute;
  z-index: -1;
  margin-top: -200px;
  background-image: url('/img/indexStart.png');
  background-size: cover;
  display: flex;
  justify-content: center;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 90px;
    line-height: 115%;
    letter-spacing: 0.01em;
    text-transform: uppercase;

    padding-top: 240px;
    max-width: 1200px;

    color: #FFFFFF;
  }
  .description {
    max-width: 580px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: #FFFFFF;

    margin-top: 60px;
  }
}
.zatichka {
  padding-top: 700px;
  border: 0;
}
@media (max-width: 1200px) {
  .info {
    height: 220px;
    width: 99.8vw;
    left: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    background-image: url('/img/indexStart.png');
    background-size: cover;
    display: flex;
    justify-content: center;

    .title {
      font-size: 7.905128205128204vw;
      color: black;
    }

    .description {
      font-size: 3.8461538461538463vw;
      margin-top: 20px;
      letter-spacing: -0.36px;
      color: black;
    }
  }
  .zatichka {
    padding-top: 200px;
    border: 0;
  }
}

.about {
  margin-top: 120px;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 130%;
    letter-spacing: 0.005em;
    text-transform: uppercase;
    color: #000000;
    width: 100%;

    .italics {
      font-style: italic;
      font-weight: 600;
    }
  }
  @media (max-width: 1200px){
    .title {
      font-size: 6.153846153846154vw;
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 100px;

    .image {
      width: 460px;
      height: 281px;
    }
    .info1 {
      display: flex;
      flex-direction: column;
      margin-left: 160px;
      width: 580px;

      .text1 {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.26px;
        color: #000000;
      }
      .text2 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 130%;
        letter-spacing: -0.01em;
        color: #000000;

        margin-bottom: 5px;
        .line1 {
          width: 205px; background: #F8A577;
          height: 8px;
          border: 0;
          margin-top: -10px;
        }
        .line2 {
          width: 77px; background: #F8A577;
          height: 8px;
          border: 0;
          margin-top: -10px;
        }
      }
      .stats {
        display: flex;
        flex-direction: row;

        margin-top: 50px;
        margin-bottom: 54px;
        .stat {
          display: flex;
          flex-direction: column;

          margin-right: 110px;
        }
      }
    }
  }
  @media (max-width: 1200px){
    .content {

      .image {
        width: 89.74358974358975vw;
        height: 54.61538461538461vw;
        object-fit: cover;
      }
      .info1 {
        width: 100%;
        margin-left: 0;

        .text1 {
          font-size: 3.7vw;
          margin-top: 5px;
        }
        .text2 {
          font-size: 4.75vw;
          margin-top: 30px;
          margin-bottom: 0;

          .line1 {
            width: 29.8205128205vw; background: #F8A577;
            height: 6px;
            border: 0;
            margin-top: -8px;
          }
          .line2 {
            width: 11.3846153846vw; background: #F8A577;
            height: 6px;
            border: 0;
            margin-top: -8px;
          }
        }
        .stats {
          display: flex;
          flex-direction: row;

          margin-top: 30px;
          margin-bottom: 35px;
          .stat {
            display: flex;
            flex-direction: column;
            margin-right: 21.28205128205128vw;
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .about {
    margin-top: 250px;
  }
}

.certificates {
  margin-top: 180px;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 130%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000000;
  }
  .content {
    width: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    margin-top: 60px;

    .image {
      width: 270px;
      height: 387px;
      margin-bottom: 40px;
    }
    .image2 {
      width: 541px;
      height: 387px;
      margin-bottom: 40px;
    }
  }
  .center {
    text-align: center;
    width: 100%;

    .button {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: rgba(0, 0, 0, 0.4);
      padding: 10px 20px 20px 10px;
    }
  }
  .subDescription {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.47px;
    color: #000000;
    padding-left: 10vw;
    padding-right: 10vw;
    margin-top: 140px;
  }
}
@media (max-width: 1200px) {
  .certificates {
    margin-top: 100px;

    .title {
      font-size: 6.125vw;
    }

    .content {
      margin-top: 40px;
      flex-wrap: nowrap;
      overflow-x: scroll;

      .image {
        width: 69.23076923076923vw;
        height: 99.23076923076923vw;
        margin-bottom: 0;
        margin-right: 5.128205128205128vw;
        object-fit: cover;
      }
      .image2 {
        width: 138.7179487179487vw;
        height: 99.23076923076923vw;
        margin-bottom: 0;
        margin-right: 5.128205128205128vw;
        object-fit: cover;
      }
    }

    .center {
      margin-top: 7.5vw;
      display: none;

      .button {
        font-size: 2.75vw;
        padding: 4.125vw 8.375vw 4vw 8.375vw;
        margin-top: 10vw;
      }
    }
    .subDescription {
        font-size: 4.358974358974359vw;
        margin-top: 100px;
        letter-spacing: -0.47px;
        padding: 0;
      }
  }
}

.metaphysics-about {
  margin-top: 200px;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 130%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #000000;
    weight: 100%;
    margin-top: 361px;

    .italics {
      font-style: italic;
      font-weight: 600;
    }

    .line {
      width: 1110px;
      background: #FFB577;
      height: 8px;
      border: 0;
      margin-top: -15px;
    }

    @media(max-width: 1200px) {
      .line {
        width: 28.46153846153846vw;
        background: #FFB577;
        height: 6px;
        border: 0;
        margin-top: -10px;
      }
    }
  }
  .description {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: #000000;

    width: 580px;
    float: right;
    margin-top: 80px;
  }
  .doubleImage {
    display: flex;
    flex-direction: row;
    margin-top: 315px;
    justify-content: space-between;

    .image {
      width: 580px;
      height: 440px;
    }
    .first {
      margin-top: 100px;
    }
  }
  .image {
    width: 100%;
    height: 440px;
  }
}
@media (max-width: 1200px) {
  .metaphysics-about {
    margin-top: 100px;

    .title {
      margin-top: 100px;
      font-size: 6.153846153846154vw;

      .italics {
        font-size: 6.153846153846154vw;
      }
    }

    .description {
      font-size: 3.8461538461538463vw;
      width: 100%;
      float: none;
      margin-top: 30px;
      color: #000000;
    }
    .doubleImage {
      margin-top: 40px;
      flex-direction: column;

      .image {
        width: 89.74358974358975vw;
        height: 46.15384615384615vw;
        margin-bottom: 20px;
        object-fit: cover;
      }
      .first {
        margin-top: 60px;
      }
    }

    .image {
      width: 100%;
      height: 46.15384615384615vw;
      object-fit: cover;
    }
  }
}
.metaphysics-techniques {
  margin-top: 180px;
  display: flex;
  flex-direction: column;

  .title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 58px;
    line-height: 130%;
    letter-spacing: 0.005em;
    text-transform: uppercase;
    color: #000000;

    width: 100%;
    margin-bottom: 30px;

    .italics {
      font-style: italic;
      font-weight: 600;
    }

    .line {
      width: 1195px;
      background: #62D6E1;
      height: 8px;
      border: 0;
      margin-top: -20px;

    }
  }
  .description {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: #000000;

    margin-left: 620px;
    margin-top: 50px;
  }
  .row {
    width: 100%;
  }
  .image {
    width: 100%;
    height: 440px;
    margin-top: 120px;
  }
  .description2 {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 500;
    font-size: 36px;
    line-height: 130%;
    letter-spacing: -0.01em;
    color: #000000;

    margin-left: 620px;
    margin-top: 80px;

    .name {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: rgba(0, 0, 0, 0.4);

      margin-top: 20px;
    }
  }
  .circle {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 153px;

    .dignity {
      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 130%;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      color: #000000;

      padding: 10px 30px;
      border: 2px solid #000000;
      border-radius: 100px;
      max-height: 72px;
      box-sizing: border-box;
    }
    .m1 {
        margin-left: 260px;
      }
      .m2 {
        margin-left: 148px;
        margin-right: 200px;
      }
      .m3 {
        margin-top: 110px;
      }
      .m4 {
        margin-top: 48px;
        margin-left: 734px;
      }
      .m5 {
        margin-top: 176px;
        margin-left: 260px;
      }
      .m6 {
        margin-top: 156px;
        margin-left: 151px;
      }
    .text {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
      letter-spacing: -0.47px;
      color: #000000;

      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
      margin-top: -300px;
    }
  }
  .marquee-container {
    margin-top: 173px;

    display: flex;
    align-content: center;
    align-items: center;
    overflow: hidden;
    width: 97vw;
    margin-left: -12vw;
    margin-right: -12vw;

    .marquee {
      z-index: -1;
      display: flex;
      align-content: center;
      align-items: center;
      font-style: normal;
      font-weight: 600;
      font-size: 90px;
      line-height: 100px;
      text-transform: uppercase;
      color: black;
      padding: 24px 0;
      white-space: nowrap;
      animation: marquee 20s infinite linear;

      .smile {
        width: 80px;
        height: 80px;
        margin-left: 60px;
        margin-right: 30px;
      }
    }
    @keyframes marquee {
      0% {
        transform: translateX(0)
      }
      100% {
        transform: translateX(-50%)
      }
    }
  }
}
@media(max-width: 1200px) {
  .metaphysics-techniques {
    margin-top: 80px;
    .title {
      font-size: 6.153846153846154vw;
      margin-bottom: 0;

      .line {
        width: 54.35897435897436vw;
        background: #62D6E1;
        height: 8px;
        border: 0;
        margin-top: -10px;
      }
    }
    .description {
      margin-top: 30px;
      font-size: 3.8461538461538463vw;
      margin-left: 0;
    }
    .image {
      width: 89.74358974358975vw;
      height: 51.28205128205128vw;
      margin-top: 40px;
      object-fit: cover;
    }
    .description2 {
      margin-top: 40px;
      font-size: 8.205128205128204vw;
      margin-left: 0;
      .name {
        font-size: 3.8461538461538463vw;
      }
    }
    .circle {
      margin-top: 100px;
      .dignity {
        font-size: 7.6923076923076925vw;
        padding: 2.564102564102564vw 7.6923076923076925vw;
      }
      .text {
        font-size: 4.358974358974359vw;
        margin-top: 60px;
      }
      .m1 {
        margin-left: 0;
      }

      .m2 {
        margin-top: 20px;
        margin-left: 32.05128205128205vw;
        argin-right: 0;
      }

      .m3 {
        margin-top: 20px;
      }

      .m4 {
        margin-top: 20px;
        margin-left: 38.71794871794872vw;
      }

      .m5 {
        margin-top: 20px;
        margin-left: 0;
      }

      .m6 {
        margin-top: 20px;
        margin-left: 15vw;
      }
    }
  }
}
</style>
