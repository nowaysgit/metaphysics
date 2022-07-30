<template>
  <div class="app">
    <div class="container">
      <Header />
      <hr style="height: 72px;border: 0; margin-bottom: 128px;">
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
.app {
  width: 100%;
  display: flex;
  justify-content: center;
  .container {
    width: 1200px;
  }
}

* {
  margin: 0;
  font-family: 'Inter';
}
button {
  background: 0;
  border: 0;
  cursor: pointer;
}
</style>
