<script setup lang="ts">
import {
  onMounted,
  ref,
  reactive
} from 'vue'

const emit = defineEmits(['myEventName'])
function someMethod(){emit('myEventName')}

export interface Props {
  optPropWithDefaultValue?: boolean,
  requiredProp: boolean
}
// Эта конструкция должна быть. ХЗ почему.
const props = withDefaults(defineProps<Props>(), {
  propWithDefaultValue: false,
})

const greeting = ref('Hello World!')


onMounted(() => {})
</script>

<template>
  <div class="comp-name">

  </div>
</template>

<style scoped>
.comp-name {

}
</style>
