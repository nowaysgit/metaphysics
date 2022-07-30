<template>
  <div class="block">
    <div class="title">
      {{ props.title }}
    </div>
    <div class="info">
      <Calc :name="props.calc" />
      <div class="description" v-html="props.description" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Калькулятор'
  },
  description: {
    type: String,
    default: 'Описание'
  },
  calc: {
    type: String,
    default: 'Bazi'
  }
})
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  flex-direction: column;
  .title {
    margin-bottom: 80px;

    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 140%;
    letter-spacing: -0.98px;
    color: #000000;
  }
  .info {
    display: flex;
    flex-direction: row;

    .description {
      width: 43.75vw;
      margin-left: 200px;

      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 160%;
      letter-spacing: -0.47px;
      color: #000000;
    }
  }
}
</style>
