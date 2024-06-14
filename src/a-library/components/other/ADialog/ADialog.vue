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

  --transition-duration-opacity-slow: var(--time-short);
  --transition-duration-opacity: var(--time-short);
  --transition-duration-overlay: var(--time-short);
  --transition-duration-display: var(--time-short);
  --transform-minified: scale(0.9, 0.9);
  --transform-normal: scale(1, 1);

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
    animation-iteration-count: 1;
  }

  /*Transition для показа открытия и закрытия start*/

  opacity: 0;
  transform: var(--transform-minified);

  transition:
      opacity var(--transition-duration-opacity),
      transform var(--transition-duration-opacity),
      overlay var(--transition-duration-overlay) allow-discrete,
      display var(--transition-duration-display) allow-discrete;

  &::backdrop {
    opacity: 0;
    transition:
        display var(--transition-duration-display) allow-discrete,
        overlay var(--transition-duration-overlay) allow-discrete,
        opacity var(--transition-duration-opacity);
  }

  &[open] {
    @starting-style {
      opacity: 0;
      transform: var(--transform-minified);
      transition:
          opacity var(--transition-duration-opacity),
          overlay var(--transition-duration-overlay) allow-discrete,
          display var(--transition-duration-display) allow-discrete;
    }
    opacity: 1;
    transform: var(--transform-normal);
    &::backdrop {
      opacity: 1;
      transition:
          display var(--transition-duration-display) allow-discrete,
          overlay var(--transition-duration-overlay) allow-discrete,
          opacity var(--transition-duration-opacity);
    }
  }
  /*Вот конкретно с этим @starting-style я заебался искать куда его воткнуть.*/
  /*Он как-то через жопу работает в в сочетании с нестингом и псевдо-селекторами.*/
  /*Об этом даже на MDN написано*/
  @starting-style {
    &[open]{
      &::backdrop {
        opacity: 0;
      }
    }
  }
  /*Transition для показа открытия и закрытия end*/
}

</style>
