<template>
  <div class="calc">
    <iframe class="size" style="border: none; overflow: hidden;" :src="link" />
  </div>
</template>

<script setup>
import { computed } from '@nuxtjs/composition-api'

const props = defineProps({
  name: {
    type: String,
    default: 'Bazi'
  }
})
const link = computed(
  () => 'https://piancai.ru/api/calc/get' + props.name
)
</script>

<style lang="scss" scoped>
.size {
  width: 300px;
  height: 400px;
}
@media (max-width: 1200px) {
  .calc {
    display: flex;
    justify-content: center;
    .size {
      width: 76.92307692307693vw;
      height: 102.56410256410255vw;
    }
  }
}
</style>
