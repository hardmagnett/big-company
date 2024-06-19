<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

// Props for our component,
// these are the same as Notitfication interface.
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

// todo:: на основе этого сделать css-класс и сделать по нормальному.
const toastColor = computed(() => {
  switch (props.type) {
    case "error":
      return "#ff355b";
    case "warning":
      return "#e8b910";
    case "success":
      return "#00cc69";
    default:
      return "#0067ff";
  }
});

const close = () => {
  emit("close");
};

</script>

<template>
<!--todo:: переделать под БЭМ-->
  <div class="a-toast">
    <div class="a-toast__message">{{ message }}</div>
    <ABtn icon><AIcon icon="mdi-pencil" /></ABtn>
  </div>
  <div
      class="toast-notification"
      :style="`--toast-duration: ${duration}s; --toast-color: ${toastColor}`"
      @click.prevent="close"
      :ref="id"
  >
    <div @click="close" class="close-btn" title="Close">
      <i class="ri-icon ri-lg ri-close-fill"></i>
    </div>

    <div class="body">
      <div class="vl"></div>
      <div class="content">

        <p class="content__message">{{ message }}</p>
      </div>
    </div>
    <div v-if="autoClose" class="progress"></div>
  </div>
</template>

<style scoped>
.a-toast {
  width: 500px;
  height: calc(var(--gap) * 6);
  outline: 1px solid darkred;
  background-color: #eee;
}
.toast-notification {
  --toast-color: #0067ff;
  cursor: pointer;
  max-width: 450px;
  position: relative;
  background: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.08),
  0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  min-height: 4rem;
  padding-inline: 1.5rem;
  padding-block: 1.2rem;
  transition: all 0.3s ease-in-out;

  .close-btn {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    display: flex;
    place-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    /*transition: var(--all-transition);*/
    transition: var(--time-medium);
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 10px rgb(228, 228, 228);
      border-radius: 50%;
    }
  }

  .body {
    display: flex;
    gap: 1.4rem;
    place-items: center;

    i {
      color: var(--toast-color);
    }

    .vl {
      background: #e4e4e4;
      width: 0.12rem;
      height: 3rem;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 1.1rem;

      &__title {
        font-weight: 600;
      }
    }
  }

  .progress {
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 0.4rem;
    width: 100%;
    background: var(--toast-color);
    animation: progress var(--toast-duration) ease-in-out forwards;
  }

  @keyframes progress {
    to {
      width: 0;
    }
  }

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
