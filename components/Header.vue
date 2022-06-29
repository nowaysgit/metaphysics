<template>
  <header class="header" :style="{'background-image': `url(/img/${props.image})`}">
    <div class="container">
      <div class="menu">
        <NuxtLink class="logo" to="/">
          Pian Cai
        </NuxtLink>
        <NuxtLink class="login" to="/login">
          Вход
        </NuxtLink>
        <NuxtLink class="calc" to="/calc">
          Калькулятор PRO
        </NuxtLink>
      </div>
      <div class="title" v-html="props.title" />
      <div class="subtitle" v-html="props.subtitle" />
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Заголовок'
  },
  subtitle: {
    type: String,
    default: 'Описание'
  },
  image: {
    type: String,
    default: 'index.png'
  }
})
</script>

<style lang="scss" scoped>
.header {
  background-size: cover;
  width: 99vw;
  height: 800px;

  margin-bottom: 160px;
}
.menu {
  text-transform: uppercase;
  padding-top: 40px;
  .logo {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: left;
    float: left;
  }
  .calc {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    margin-right: 59px;
    float: right;
  }
  .login {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: right;
    float: right;
  }
}

.title {
  font-weight: 300;
  font-size: 92px;
  line-height: 110px;
  letter-spacing: -2.05px;
  color: #FFFFFF;

  margin-top: 150px;

  .italics {
    font-style: italic;
    font-weight: 500;
  }
}
.subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.33px;
  color: #FFFFFF;

  margin-top: 50px;
  margin-left: 400px;
}
</style>
