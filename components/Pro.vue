<template>
  <section class="pro">
    <p class="text">
      Раскодируйте дату своего рождения, исходя из комбинаций ветвей символов и элементов Инь и ян, и узнайте о себе всё!
    </p>
    <NuxtLink class="link" to="/pro">
      Подробнее
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.pro {
  margin-top: 200px;
  width: 100%;
  height: 440px;
  background-image: url('/img/indexMetaphysicsAbout5.png');
  background-size: cover;
  padding: 125px 175px 112px 175px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 130%;
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;

    margin-bottom: 50px;
  }
  .link {
    padding: 10px 30px 12px;
    width: fit-content;

    border: 2px solid #FFFFFF;
    border-radius: 100px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;
    color: #FFFFFF;
  }
}
@media (max-width: 1200px) {
  .pro {
    margin-top: 100px;
    width: 100%;
    height: auto;
    padding: 40px 24px 41px 20px;

    .text {
      font-size: 5.128205128205128vw;

      margin-bottom: 30px;
    }

    .link {
      padding: 8px 30px 10px;

      border: 1px solid #FFFFFF;
      font-size: 3.8461538461538463vw;
    }
  }
}
</style>
