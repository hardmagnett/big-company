<script setup lang="ts">

import {watch, ref, onMounted, onBeforeUnmount } from 'vue'
import {assertIsNode} from '@/a-library/helpers/language/typeAssertions';
import {getValueOfCSSVariableAsNumber} from '@/a-library/helpers/DOM/getCSSVariable';


const emit = defineEmits(['needToClose', 'apply'])

const dialogNode = ref<HTMLDialogElement | null>(null)
const dialogWrapperNode = ref<HTMLElement | null>(null)
const isClosingOnDeniedAnimationRunning = ref(false)

type DialogCssClass = 'btn--success' | 'btn--danger' | 'btn--error' | ''
export interface Props {
  isOpen: boolean,
  remainOnEsc?: boolean,
  remainOnClickOutside?: boolean
  textHeader?:string
  textApply?:string
  textCancel?:string
  cssClassApply?: DialogCssClass
  cssClassCancel?: DialogCssClass
  hideApply?:boolean
  hideCancel?:boolean
}
const props = withDefaults(defineProps<Props>(), {
  remainOnEsc: false,
  remainOnClickOutside: false,
  textHeader: '',
  textApply: 'Ок',
  textCancel: 'Отмена',
  hideApply: false,
  hideCancel: false,
  cssClassApply: '',
  cssClassCancel: ''
})

watch(
    () => props.isOpen,
    (newVal) => {
      if (newVal){
        showModal()
      } else {
        dialogNode.value?.close()
      }
    }
)

let showModal = ()=>{
  dialogNode.value?.showModal()
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
let cancelDialogHandler = (e: Event)=>{
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
  let target = e.target
  assertIsNode(target);
  const isClickOnDialogWrapperOrItsChildrenNodes = dialogWrapperNode.value?.contains(target)


  const isClickOutsideOfDialog = !isClickOnDialogWrapperOrItsChildrenNodes

  if (isClickOutsideOfDialog) {
    if (props.remainOnClickOutside) {
      runClosingOnDeniedAnimation()
    }
    else {
      needToClose()
    }
  }
}

onMounted(() => {
  if (props.isOpen) {
    // Это спасает от закрытия диалогового окна при live-reload-е.
    showModal()
  }
    dialogNode.value?.addEventListener("click", closeDialogOnOutsideClick)
  let a =1;
})
onBeforeUnmount(()=> {
    dialogNode.value?.removeEventListener("click", closeDialogOnOutsideClick)

})
</script>

<template>

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
        class="a-dialog__wrapper"
    >
      <div
          v-if="textHeader"
          class="a-dialog__header">
        <h2 class="mod--mb-0">{{ textHeader }}</h2>
      </div>
      <div class="a-dialog__content">
        <slot></slot>
      </div>
      <div class="a-dialog__buttons">

        <ABtn @click="needToClose"
              :class="[cssClassCancel]"
              class="btn--tonal">{{ textCancel }}</ABtn>
        <ABtn
            @click="$emit('apply')"
            v-if="!hideApply"
            :class="[cssClassApply]"
        >{{textApply}}</ABtn>
      </div>

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

  max-width: calc(100% - (var(--gap) * 2));
  width: 500px;

  .a-dialog__wrapper {
    .a-dialog__header {
      padding: calc(var(--gap) / 2) var(--gap) ;

      background-color: var(--clr-bg-blue-small);
      border-bottom: 1px solid var(--clr-border-blue-lighter);
    }
    .a-dialog__content {
      padding: var(--gap);
      :slotted(:last-child){
        /*Чтобы отступ до кнопок был одинаковый независимо от того что передано в слот*/
        margin-bottom: 0;
      }
    }
    .a-dialog__buttons {
      display: flex;
      justify-content: flex-end;
      gap: var(--gap);
      padding: var(--gap);
      padding-top: 0;
    }
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
