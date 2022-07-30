<template>
  <footer id="contacts">
    <div class="social">
      <p class="text1">
        Я в социальных сетях
      </p>
      <a class="link instagram" href="https://www.vk.com/" target="_blank">Instagram</a>
      <a class="link telegram margin10" href="https://www.vk.com/" target="_blank">Telegram</a>
      <a class="link vk" href="https://www.vk.com/" target="_blank">ВКонтакте</a>
    </div>
    <p class="copyright">
      Студия китайской метафизики Светланы Шарновой © 2022
    </p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: row;
  margin-top: 180px;
  align-items: flex-end;
  padding-bottom: 150px;

  .social {
    .text1 {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 160%;
      letter-spacing: -0.47px;
      color: #000000;

      margin-bottom: 40px;
    }

    .link {
      font-style: normal;
      font-weight: 600;
      font-size: 120px;
      line-height: 100%;
      letter-spacing: -2.68px;
      color: #000000;

      margin-bottom: 30px;
    }
    .instagram:hover {
      background: linear-gradient(90deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
    .telegram:hover {
      color: #36ACF2;
    }
    .vk:hover {
      color: #0077FF;
    }
  }
  .copyright {
    width: 50%;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 160%;

    letter-spacing: -0.4px;
    color: #000000;
  }
}
@media (max-width: 600px) {
  footer {
    margin-top: 37.5vw;
    padding-bottom: 18.75vw;
    flex-wrap: wrap;

    .social {
      .text1 {
        font-size: 5vw;
        margin-bottom: 5vw;
      }

      .link {
        font-size: 15vw;
        margin-bottom: 3.75vw;
      }
    }

    .copyright {
      margin-top: 3.75vw;
      width: 60%;
      font-size: 2.75vw;
    }
  }
}
</style>
