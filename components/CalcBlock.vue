<template>
  <div class="block">
    <Calc :name="props.calc" />
    <div class="info">
      <div class="title">
        {{ props.title }}
      </div>
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
  flex-direction: row;

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 80px;

    .title {
      margin-bottom: 30px;

      font-family: 'Lato';
      font-style: normal;
      font-weight: 600;
      font-size: 30px;
      line-height: 130%;
      letter-spacing: -0.01em;
      color: #000000;
    }

    .description {
      width: 820px;

      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: -0.26px;
      color: #000000;
    }
  }
}
@media (max-width: 1200px) {
  .block {
    display: flex;
    flex-direction: column;

    .info {
      display: flex;
      flex-direction: column;
      margin-left: 0;
      margin-top: 40px;

      .title {
        margin-bottom: 40px;
        font-size: 6.153846153846154vw;
      }

      .description {
        width: 100%;
        font-size: 3.8461538461538463vw;
      }
    }
  }
}
</style>
