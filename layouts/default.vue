<template>
  <div class="app">
    <div class="container">
      <Header />
      <hr class="fix" style="height: 72px;border: 0;">
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: Lato; /* Имя шрифта */
  src: url('/fonts/Lato-Regular.ttf'); /* Путь к файлу со шрифтом */
}
body {
  margin: 0;
}
a, a:link, a:visited, a:focus, a:hover, a:active {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
@media(max-width: 1200px) {
  .app {
    width: 100%;

    .container {
      margin-left: 5.128205128205128vw;
      margin-right: 5.128205128205128vw;

      .fix {
        margin-bottom: 32px;
      }
    }
  }
}
@media(min-width: 1200px) {
  .app {
    width: 100%;
    display: flex;
    justify-content: center;

    .container {
      width: 1200px;

      .fix {
        margin-bottom: 128px;
      }
    }
  }
}

* {
  margin: 0;
  font-family: 'Inter';
}
button {
  background: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
}
hr {
  border: 0;
}
</style>
