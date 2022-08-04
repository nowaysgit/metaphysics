<template>
  <footer id="contacts">
    <div class="social">
      <p class="text1">
        Я в социальных сетях
      </p>
      <a class="link instagram" href="https://www.instagram.com/fengshui_in_lives/" target="_blank">Instagram</a>
      <a class="link telegram margin10" href="https://t.me/sekret_bazi" target="_blank">Telegram</a>
      <a class="link vk" href="https://vk.com/piancai" target="_blank">ВКонтакте</a>
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
  padding-bottom: 120px;

  .social {
    .text1 {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: rgba(0, 0, 0, 0.4);

      margin-bottom: 40px;
    }

    .link {
      font-style: normal;
      font-weight: 600;
      font-size: 120px;
      line-height: 155px;
      letter-spacing: -2.68px;
      color: #000000;
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
    font-size: 18px;
    line-height: 150%;
    letter-spacing: -0.26px;

    color: #000000;

    margin-bottom: 22px;
  }
}
@media (max-width: 600px) {
  footer {
    margin-top: 37.5vw;
    padding-bottom: 29px;
    flex-wrap: wrap;

    .social {
      .text1 {
        font-size: 5vw;
        margin-bottom: 12px;
      }

      .link {
        font-size: 15vw;
        margin-bottom: 12px;
        line-height: 115%;
      }
    }

    .copyright {
      margin-top: 60px;
      width: 60%;
      font-size: 2.75vw;
    }
  }
}
</style>
