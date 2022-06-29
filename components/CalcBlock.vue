<template>
  <div class="block">
    <Calc :name="props.calc" />
    <div class="info">
      <div class="title">
        {{ props.title }}
      </div>
      <div class="description">
        {{ props.description }}
      </div>
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
    margin-left:100px;
    color: #000000;
    width: 700px;

    .title {
      margin-bottom: 40px;
      font-weight: 400;
      font-size: 54px;
      line-height: 64px;
      letter-spacing: -1.2px;

    }
    .description {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: -0.33px;
    }
  }
}
</style>
