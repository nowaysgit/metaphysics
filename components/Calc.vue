<template>
  <div class="calc">
    <iframe style="width: 300px; height: 400px; border: none; overflow: hidden;" :src="link" />
  </div>
</template>

<script setup>
// eslint-disable-next-line import/named
import { computed } from '@nuxtjs/composition-api'

const props = defineProps({
  name: {
    type: String,
    default: 'Bazi'
  }
})
const link = computed(
  () => 'http://localhost:8080/api/calc/get' + props.name
)
</script>

<style lang="scss" scoped>
.calc {

}
</style>
