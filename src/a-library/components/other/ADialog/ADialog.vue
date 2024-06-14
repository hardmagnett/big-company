<script setup lang="ts">

// todo:: сделать чтобы по умолчанию закрывалось и по клику на esc и по клику снаружи
// А блокировать закрытие лишь если указаны соответствующие пункты меню

// todo:: все что касается этой модалки и новых css-фич- в гисты

// todo:: все что касается watch - в гисты

// todo:: проверить в других браузерах и сделать заметки в гистах
import {watch, ref, onMounted } from 'vue'

const emit = defineEmits(['close'])

const dialogNode = ref<HTMLDialogElement | null>(null)
const dialogWrapperNode = ref<HTMLElement | null>(null)

export interface Props {
  isOpen: boolean,
  remainOnEsc?: boolean,
  closeOnClickOutside?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  remainOnEsc: false,
  closeOnClickOutside: false
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

// Обработчик нажатия на esc
let cancelDialogHandler = (e)=>{
  if (props.remainOnEsc) {
    e.preventDefault()
  } else {
    close()
  }
}

let closeDialogOnOutsideClick = (e: PointerEvent) => {
  console.clear()
  console.log('closeDialogOnOutsideClick')
  let target = e.target
  console.log(target); console.log('^...target:')
  // const isClickOnDialog = target === dialogNode.value
  const isClickOnDialogWrapperOrItsChildrenNodes = dialogWrapperNode.value.contains(target)


  const isClickOutsideOfDialog = !isClickOnDialogWrapperOrItsChildrenNodes

  console.log(isClickOutsideOfDialog); console.log('^...isClickOutsideOfDialog:')

  if (isClickOutsideOfDialog) {
    close()
  }
}

// let closeDialogOnOutsideClickOLD = (e) => {
//
//   let target = e.target
//   const isClickOnDialog = target === dialogNode.value
//   const isClickOnDialogChildrenNodes = dialogNode.value.contains(target)
//
//   const isClickOutsideOfDialog = !(
//       isClickOnDialog || isClickOnDialogChildrenNodes
//   )
//
//   // if (isClickOutsideOfDialog) {
//   //   dialogNode.value.close()
//   // }
// }

onMounted(() => {
  if (props.closeOnClickOutside) {
    // todo:: отключить при выходе со страницы
    // dialogWrapperNode.value.addEventListener("click", closeDialogOnOutsideClick)
    dialogNode.value.addEventListener("click", closeDialogOnOutsideClick)
  }
})
</script>

<template>


  <!--@close="closeDialogHandler"-->
  <dialog
    ref="dialogNode"
    class="a-dialog"
    @cancel="cancelDialogHandler"



  >
    <div
        ref="dialogWrapperNode"
        class="dialog__wrapper"
    >
      <slot></slot>
      <button
          @click="close"
      >Закрыть</button>
    </div>
  </dialog>
</template>

<style scoped>
.a-dialog {
  padding: 0;
  border: none;
  border-radius: var(--border-radius);


  .dialog__wrapper {

    /*border: 1px solid var(--clr-border-blue-lighter);*/
    /*outline: 1px solid darkred;*/
    padding: var(--gap);
  }
  &::backdrop {
    /*pointer-events: none;*/
    background-color: var(--clr-overlay);
  }
}
</style>
