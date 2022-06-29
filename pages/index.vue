<template>
  <div>
    <Header title="Студия <em class='italics';>китайской<br> метафизики</em> со Светой Шарновой" subtitle="Жизнь слишком коротка — обретайте то, чего достойны!" image="index.png" />
    <div class="container">
      <div class="calcs">
        <CalcBlock calc="Bazi" title="Китайский календарь" description="Выбор дня — это выбор удачи. Выбор удачи — это своего рода усилие, прилагаемое людьми для использования благоприятных условий. Выбор благоприятного дня может сыграть определенную роль для вашего события, а так же повлиять на скорость вашего результата. /nВажность выбора дат в фэн-шуй очевидны!" />
        <CalcBlock class="margin120" calc="Ruler" title="Линейка Фэн-шуй" description="Фэн-шуй — это китайская философская система гармонизации каждого человека с окружающей средой. Согласно этому каждый объект с определенными размерами и в определенном месте будет излучать гармоническую энергию. /nЛинейка Фен-шуй используется для измерения размеров дверей, дверей спален, кухонных дверей, стола, мебели, кроватей и шкафов." />
      </div>
      <div class="birthday">
        <em class="italics">Раскодируйте</em> дату своего рождения и <em class="italics">узнайте о себе всё!</em>
        <NuxtLink class="button" to="/calc">
          Подробнее →
        </NuxtLink>
      </div>
      <div class="calcs">
        <CalcBlock calc="GuaPeople" title="Гуа (для человека)" description="— китайский религиозный мотив, включающий восемь триграмм И Цзин, расположенных вокруг символа, обозначающего баланс Инь и ян. Числа фэн-шуй применимы как к дому, так и к людям, живущим в нем." />
        <CalcBlock class="margin120" calc="GuaHouse" title="Гуа (для дома)" description="— китайский религиозный мотив, включающий восемь триграмм И Цзин, расположенных вокруг символа, обозначающего баланс Инь и ян. Числа фэн-шуй применимы как к дому, так и к людям, живущим в нем." />
      </div>
      <div class="questions">
        Есть вопросы? Пишите мне!
      </div>
      <div class="links">
        <a class="link" href="https://www.vk.com/" target="_blank">Instagram</a>
        <a class="link margin10" href="https://www.vk.com/" target="_blank">Telegram</a>
        <a class="link" href="https://www.vk.com/" target="_blank">ВКонтакте</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  margin-top: 60px;
  padding-bottom: 290px;

  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 92px;
  line-height: 110px;
  letter-spacing: -2.05px;
  color: #000000;

  .link {
    color: #000000;
  }

  .margin10 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.questions {
  margin-top: 240px;

  font-weight: 400;
  font-size: 42px;
  line-height: 54px;
  letter-spacing: -0.93px;
  color: #000000;
}
.birthday {
  font-weight: 400;
  font-size: 92px;
  line-height: 110px;
  letter-spacing: -2.05px;
  color: #000000;

  width: 1100px;
  margin-top: 160px;
  margin-bottom: 200px;

  .italics {
    font-style: italic;
    font-weight: 500;
  }
  .button {
    margin-left: 400px;
    margin-top: 60px;

    font-style: italic;
    font-weight: 400;
    font-size: 42px;
    line-height: 54px;
    letter-spacing: -0.93px;
    color: #000000;
  }
}
.calcs {
  .margin120 {
    margin-top: 120px;
  }
}
</style>
