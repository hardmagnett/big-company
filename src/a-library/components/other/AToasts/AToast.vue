<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

// todo:: наверное переделать из plugins в provide-inject.
// Всё равно эту хрень приходится импортировать.

export interface Props {
  type?: string,
  message?: string,
  printAsHTML?: boolean,
  autoClose?: boolean,
  duration?: number,
}
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  message: 'Текст сообщения по умолчанию',
  printAsHTML: false,
  autoClose: true,
  duration: 5,
})

const emit = defineEmits(['close'])

onMounted(() => {
  if (props.autoClose) {
    setTimeout(close, props.duration * 1000);
  }
});


const colorCSSClass = computed(() => {
  return `a-toast--${props.type}`
});

const autoCloseCSSClass = computed(()=>{
  return props.autoClose ? 'a-toast--autoclose' : null
})

const close = () => {
  emit("close");
};

</script>

<template>
  <div class="a-toast"
       :class="[colorCSSClass, autoCloseCSSClass]"
       @click="close"
       :style="`--toast-duration: ${duration}s;`"
  >
    <div v-if="!printAsHTML" class="a-toast__message">{{ message }}</div>
    <div v-if="printAsHTML" class="a-toast__message" v-html="message"/>
    <ABtn icon class="a-btn--white"><AIcon icon="mdi-close-thick" /></ABtn>
  </div>
</template>

<style scoped>
@keyframes progress-animation {
  to {
    width: 100%;
  }
}
.a-toast {

  /*
    Перезаписывается JS-ом из шаблона для каждого конкретного экземпляра.
    Через style.
  */
  --toast-duration: 4s;

  /*width: 500px;*/
  /*max-width: 100vw;*/
  /*min-height: calc(var(--gap) * 6);*/
  background-color: #eee;
  display: flex;
  flex-flow: row nowrap;
  padding: var(--gap);
  gap: var(--gap);
  align-items: center;
  color: white;
  border-radius: var(--border-radius);
  position: relative;
  overflow: hidden;

  .a-toast__message {
    flex: 1 1 auto;
    /*outline: 1px solid darkred;*/
    padding-top: calc(var(--gap));
    padding-bottom: calc(var(--gap));


     * :last-child {
       outline: 1px solid orange;
     }
    /*todo:: проверить не развалиться-ли это после линтинга. После этого удалить коммент с outline*/
    &::v-deep(> :last-child) {
      /*outline: 1px solid darkred;*/
      margin-bottom: 0;
    }

  }
  .a-btn {
    flex: 0 0 auto;
  }

  &.a-toast--autoclose {
    &::after {
      content: '';
      position: absolute;
      background-color: black;
      width: 0%;
      height: calc(var(--gap) / 2);
      left:0;
      bottom:0;

      /*animation: progress-animation var(--toast-duration) ease-in-out forwards;*/
      animation: progress-animation var(--toast-duration) linear;
    }
  }


  &.a-toast--info {
    background-color: var(--clr-fill-blue-big);
    &::after {
      background-color: var(--clr-fill-blue-accent);
    }
  }
  &.a-toast--success {
    background-color: var(--clr-fill-green-big);
    &::after {
      background-color: var(--clr-fill-green-accent);
    }
  }
  &.a-toast--danger {
    background-color: var(--clr-fill-orange-big);
    &::after {
      background-color: var(--clr-fill-orange-accent);
    }
  }
  &.a-toast--error {
    background-color: var(--clr-fill-red-big);
    &::after {
      background-color: var(--clr-fill-red-accent);
    }
  }
}
</style>
