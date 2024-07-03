<script setup lang="ts">
import {computed} from 'vue'

export interface Props {
  modelValue: {
    name: string,
    email: string,
    address: string
  }
}

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<Props>(), {
})

const formPartPersonalData = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    console.log('set personal')
    emit('update:modelValue', newValue)
  }
})
let a = 2;
</script>

<template>
  <div class="child-one">
    <AInput
        v-model="formPartPersonalData.name"
        label="Имя *"
    ></AInput>


  </div>
</template>

<style scoped>
.child-one {}
</style>
