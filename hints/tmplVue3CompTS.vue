<script setup lang="ts">
/* eslint-disable */
import {
  onMounted,
  ref,
  reactive,
  computed,
  useAttrs,
  useSlots, watch,
} from 'vue'

//////// Эмит событий
const emit = defineEmits(['myEventName'])
const emit2 = defineEmits<{
  update: [noMatterFieldName: string]
}>()


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
let greeting = ref('Hello World!')
// Доступ: Из шаблона ХЗ. Из скрипта через `.value`

//////// Computed
const myComputed = computed(() => 'foo')
// Доступ: Из шаблона напрямую. Из скрипта через `.value`

//////// Watch
// Так следить за объектами, например за props
watch(
    () => props.myProp,
    (newVal) => {}
)
// За примитивами как-то по другому нужно следить.

//////// Methods
let myMethod = ()=>{
}
// Доступ: Из шаблона напрямую. Из скрипта вроде тоже напрямую. Это-ж функция.

//////// Хуки
onMounted(() => {})

//////// Использование slots и attrs
const slots = useSlots()
const attrs = useAttrs()
// Доступ: Из шаблона - ХЗ. Из скрипта напрямую.

/* eslint-enable */
</script>

<template>
  <div class="comp-name">

  </div>
</template>

<style scoped>
.comp-name {

}
</style>
