<script setup lang="ts">

// todo:: проверить в других браузерах и сделать заметки в гистах
// - В FF кнопки другой высоты. Поправить.

// todo:: тени для модалки
// todo:: анимация для модалки

import {watch, ref, onMounted, onBeforeUnmount } from 'vue'
import {assertIsNode} from '@/a-library/helpers/language/typeAssertions';
import {getValueOfCSSVariableAsNumber} from '@/a-library/helpers/DOM/getCSSVariable';


const emit = defineEmits(['needToClose'])

const dialogNode = ref<HTMLDialogElement | null>(null)
const dialogWrapperNode = ref<HTMLElement | null>(null)
const isClosingOnDeniedAnimationRunning = ref(false)

export interface Props {
  isOpen: boolean,
  remainOnEsc?: boolean,
  remainOnClickOutside?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  remainOnEsc: false,
  remainOnClickOutside: false
})

watch(
    () => props.isOpen,
    (newVal) => {
      // console.log(newVal); console.log('^...isOpen:')
      if (newVal){
        showModal()
      } else {
        dialogNode.value.close()
      }
    }
)

let showModal = ()=>{
  dialogNode.value.showModal()
}

/**
 * Называется needToClose, а не close,
 * потому-что это не непосредственное закрытие, а лишь намерение о закрытии.
 * Непосредственное закрытие происходит при вызове метода close() у html-элемента dialog.
 */
let needToClose = ()=>{
  emit('needToClose')
}

// Обработчик нажатия на esc
let cancelDialogHandler = (e)=>{
  if (props.remainOnEsc) {
    e.preventDefault()
    runClosingOnDeniedAnimation()
  } else {
    needToClose()
  }
}

let runClosingOnDeniedAnimation = () => {
  let animationTime = getValueOfCSSVariableAsNumber('--closing-denied-animation-duration', dialogNode.value)
  isClosingOnDeniedAnimationRunning.value = true
  setTimeout(()=>{
    isClosingOnDeniedAnimationRunning.value = false
  },animationTime)
}

let closeDialogOnOutsideClick = (e: MouseEvent) => {
  if (props.remainOnClickOutside) {
    runClosingOnDeniedAnimation()
    return
  }
  let target = e.target
  assertIsNode(target);
  const isClickOnDialogWrapperOrItsChildrenNodes = dialogWrapperNode.value.contains(target)


  const isClickOutsideOfDialog = !isClickOnDialogWrapperOrItsChildrenNodes

  if (isClickOutsideOfDialog) {
    needToClose()
  }
}

onMounted(() => {
  if (props.isOpen) {
    // Это спасает от закрытия диалогового окна при live-reload-е.
    showModal()
  }
    dialogNode.value.addEventListener("click", closeDialogOnOutsideClick)
  let a =1;
})
onBeforeUnmount(()=> {
    dialogNode.value.removeEventListener("click", closeDialogOnOutsideClick)

})
</script>

<template>


  <!--@close="closeDialogHandler"-->
  <dialog
    ref="dialogNode"
    class="
      a-dialog
    "
    :class="{
      'a-dialog--animation-closing-is-denied': isClosingOnDeniedAnimationRunning
    }"
    @cancel="cancelDialogHandler"



  >
    <div
        ref="dialogWrapperNode"
        class="dialog__wrapper"
    >
      <slot></slot>
      <button
          @click="needToClose"
      >Закрыть</button>
    </div>
  </dialog>
</template>


<style>
:root {
  --transition-duration-opacity: var(--time-short);
  --transition-duration-overlay: var(--time-short);
  --transition-duration-display: var(--time-short);
}
dialog[open] {
  opacity: 1;
}

dialog {
  opacity: 0;
  transition:
    opacity var(--transition-duration-opacity) ease-out,
    overlay var(--transition-duration-overlay) ease-out allow-discrete,
    display var(--transition-duration-display) ease-out allow-discrete;
}
@starting-style {
  dialog[open] {
    opacity: 0;
  }
}

dialog::backdrop {
  opacity: 0;
  transition:
      display var(--transition-duration-display) allow-discrete,
      overlay var(--transition-duration-overlay) allow-discrete,
      opacity var(--transition-duration-opacity);
}

dialog[open]::backdrop {
  opacity: 1;
}

@starting-style {
  dialog[open]::backdrop {
    opacity: 0;
  }
}
</style>

<style scoped>

@keyframes closing-is-denied {
  from {transform: translatey(0);}
  25% {transform: translatey(10px);}
  50% {transform: translatey(0);}
  75% {transform: translatey(-10px);}
  to {transform: translatey(0);}
}

.a-dialog {
  --closing-denied-animation-duration: 300ms;
  padding: 0;
  border: none;
  border-radius: var(--border-radius);
  outline: none;

  .dialog__wrapper {
    padding: var(--gap);
  }
  &::backdrop {
    background-color: var(--clr-overlay);
  }

  &.a-dialog--animation-closing-is-denied {
    animation-name: closing-is-denied;
    animation-duration: var(--closing-denied-animation-duration);
    animation-timing-function: linear;
    /*animation-iteration-count: infinite;     !*n-times, infinite*!*/
    animation-iteration-count: 1;     /*n-times, infinite*/
    /*outline: 4px solid darkred;*/
  }
}
</style>
