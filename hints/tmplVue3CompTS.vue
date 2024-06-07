<script setup lang="ts">
import {
  onMounted,
  ref,
  reactive,
  computed,
  useAttrs,
  useSlots,
} from 'vue'

//////// Эмит событий
const emit = defineEmits(['myEventName'])
function someMethod(){emit('myEventName')}

//////// Props
export interface Props {
  optPropWithDefaultValue?: boolean,
  requiredProp: boolean
}
const props = withDefaults(defineProps<Props>(), {
  optPropWithDefaultValue: false,
})
// Эта конструкция должна быть. ХЗ почему.
// Доступ: Из шаблона - ХЗ. Из скрипта через `props.`.

//////// Data-Props
const greeting = ref('Hello World!')

//////// Computed
const myComputed = computed(() => 'foo')
// Доступ: Из шаблона напрямую. Из скрипта через `.value`

//////// Хуки
onMounted(() => {})

//////// Использование slots и attrs
const slots = useSlots()
const attrs = useAttrs()
// Доступ: Из шаблона - ХЗ. Из скрипта напрямую.


</script>

<template>
  <div class="comp-name">

  </div>
</template>

<style scoped>
.comp-name {

}
</style>
