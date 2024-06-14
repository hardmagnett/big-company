<script setup lang="ts">
// todo:: все что касается этой модалки и новых css-фич- в гисты

// todo:: все что касается watch - в гисты
import {watch, ref } from 'vue'

const emit = defineEmits(['close'])

const dialogNode = ref<HTMLDialogElement | null>(null)

export interface Props {
  isOpen: boolean,
  remainOnEsc?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  remainOnEsc: false
})

watch(
    () => props.isOpen,
    (newVal) => {
      console.log(newVal); console.log('^...isOpen:')
      if (newVal){
        dialogNode.value.showModal()
      } else {
        dialogNode.value.close()
      }
    }
)

let close = ()=>{
  emit('close')
}


// let closeDialogHandler = (e)=>{
//   console.log(e); console.log('^...e:')
//   close()
// }
// Обработчик нажатия на esc
let cancelDialogHandler = (e)=>{
  if (props.remainOnEsc) {
    e.preventDefault()
  } else {
    close()
  }
}
</script>

<template>


  <!--@close="closeDialogHandler"-->
  <dialog
    ref="dialogNode"
    class="a-dialog"
    @cancel="cancelDialogHandler"



  >
    <slot></slot>
    <button
        @click="close"
    >Закрыть</button>
  </dialog>
</template>

<style scoped>
.a-dialog {
  &::backdrop {
    background-color: var(--clr-overlay);
  }
}
</style>
