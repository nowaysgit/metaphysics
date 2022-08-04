<template>
  <div>
    <input v-model="value" :placeholder="props.placeholder" class="input" type="number">
    <hr class="line">
    <div v-show="!message && !props.error" style="height: 26px;" />
    <p class="message">
      {{ message || props.error }}
    </p>
  </div>
</template>

<script setup>
import isNumeric from 'validator/lib/isNumeric'
import { ref, watch } from '@nuxtjs/composition-api'
const emit = defineEmits(['update'])
const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

const value = ref('')
const message = ref('')

watch(value, (newVal, oldVal) => {
  if (isNumeric(newVal) && String(newVal).length === 5) {
    success()
  } else if (newVal === '') {
    error('Нужно заполнить')
  } else {
    error('Неверный формат кода')
  }
})

const error = (er) => {
  message.value = er
  emit('update', { type: 'error' })
}
const success = () => {
  message.value = ''
  emit('update', { type: 'success', value: value.value })
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: -0.33px;
  color: black;

  border: 0;

  margin-top: 30px;
}
.input ::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.input:active, :focus {
  outline: 0;
  border: 0;
  border-top: 0;
}
.input:hover {
  outline: 0;
  border: 0;
}
.line {
  margin-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
}
.input:active, :focus + .line {
  outline: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.7);
}
.input:hover + .line {
  outline: 0;
  border-top: 1px solid rgba(0, 0, 0, 1);
}
.message {
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 130%;
  letter-spacing: 0.05px;
  color: #F04438;
  margin-top: 12px;
  margin-bottom: 26px;
}
@media (max-width: 400px) {
  .input {
    font-size: 5.128205128205128vw;
    margin-top: 7.6923076923076925vw;
  }
}
</style>
