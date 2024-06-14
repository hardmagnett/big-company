<script setup lang="ts">

// todo:: попробовать сделать чтобы после live-reload модалка не закрывалась!
// Это блять вообще бесит при работе.

// todo:: все что касается этой модалки и новых css-фич- в гисты

// todo:: все что касается watch - в гисты

// todo:: проверить в других браузерах и сделать заметки в гистах

import {watch, ref, onMounted, onBeforeUnmount } from 'vue'
import {assertIsNode} from '@/a-library/helpers/language/typeAssertions';




const emit = defineEmits(['close'])

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
    runClosingOnDeniedAnimation()
  } else {
    close()
  }
}

let runClosingOnDeniedAnimation = () => {
  isClosingOnDeniedAnimationRunning.value = true
  setTimeout(()=>{
    isClosingOnDeniedAnimationRunning.value = false
    // todo:: получать переменную из css!!!
    let a = 1;
  },300)
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
    close()
  }
}

onMounted(() => {
    dialogNode.value.addEventListener("click", closeDialogOnOutsideClick)
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
          @click="close"
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
  --closing-denied-animation-duration: 0.3s;
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
