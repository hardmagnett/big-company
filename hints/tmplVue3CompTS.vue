<script setup lang="ts">
import {
  onMounted,
  ref,
  reactive,
  computed
} from 'vue'

//////// Эмит событий
const emit = defineEmits(['myEventName'])
function someMethod(){emit('myEventName')}

//////// Props
export interface Props {
  optPropWithDefaultValue?: boolean,
  requiredProp: boolean
}
// Эта конструкция должна быть. ХЗ почему.
const props = withDefaults(defineProps<Props>(), {
  optPropWithDefaultValue: false,
})
// Обращаться: из скриптов через `props.`. Из шаблона - ХЗ.

//////// Data-Props
const greeting = ref('Hello World!')

//////// Computed
const myComputed = computed(() => 'foo')

//////// Хуки
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
