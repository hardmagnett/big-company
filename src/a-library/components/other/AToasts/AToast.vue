<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

// todo:: наверное переделать из plugins в provide-inject.
// Всё равно эту хрень приходится импортировать.

// Свойства компонента те-же что и для Toast interface
const props = defineProps({
  id: { type: String, required: true },
  type: {
    type: String,
    default: "info",
    required: false,
  },
  message: {
    type: String,
    default: "Текст сообщения по умолчанию",
    required: false,
  },
  autoClose: { type: Boolean, default: true, required: false },
  duration: { type: Number, default: 5, required: false },
});

// todo:: эмитить по новому
const emit = defineEmits<{
  (e: "close"): void;
}>();

// todo:: все-ли они нужны?
const timer = ref(-1);
const startedAt = ref<number>(0);
const delay = ref<number>(0);

onMounted(() => {
  if (props.autoClose) {
    startedAt.value = Date.now();
    delay.value = props.duration * 1000;
    timer.value = setTimeout(close, delay.value);
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
    <div class="a-toast__message">{{ message }}</div>
    <ABtn icon class="a-btn--white"><AIcon icon="mdi-pencil" /></ABtn>
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
    Перезаписывается JS из шаблона для каждого конкретного экземпляра.
    Через style.
  */
  --toast-duration: 4s;

  /*width: 500px;*/
  /*max-width: 100vw;*/
  min-height: calc(var(--gap) * 6);
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
.toast-notification {
  /*todo:: удалить эту древнюю хрень, когда всё сделаешь*/
  @keyframes toast-fade-in {
    to {
      opacity: 1;
    }
  }

  @keyframes toast-fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
}
</style>
