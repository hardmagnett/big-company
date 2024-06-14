<script setup lang="ts">

// todo:: сделать чтобы по умолчанию закрывалось и по клику на esc и по клику снаружи
// А блокировать закрытие лишь если указаны соответствующие пункты меню

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
  },300)
}

// let closeDialogOnOutsideClick = (e: PointerEvent) => {
let closeDialogOnOutsideClick = (e: MouseEvent) => {
  let target = e.target
  assertIsNode(target);
  const isClickOnDialogWrapperOrItsChildrenNodes = dialogWrapperNode.value.contains(target)


  const isClickOutsideOfDialog = !isClickOnDialogWrapperOrItsChildrenNodes

  if (isClickOutsideOfDialog) {
    close()
  }
}

onMounted(() => {
  if (!props.remainOnClickOutside) {
    dialogNode.value.addEventListener("click", closeDialogOnOutsideClick)
  }
})
onBeforeUnmount(()=> {
  if (!props.remainOnClickOutside) {
    dialogNode.value.removeEventListener("click", closeDialogOnOutsideClick)
  }

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
