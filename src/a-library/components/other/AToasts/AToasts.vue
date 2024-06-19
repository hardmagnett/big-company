<script setup lang="ts">
import { } from 'vue'
import {removeToast, toasts} from "@/a-library/vue-plugins/toast";

const closeToast = (toastId: string)=>{
  // Не забыть раскомментить
  removeToast(toastId);
  let a = 1
}

</script>

<template>
  <!--<div class="a-toasts">-->
  <!--</div>-->


  <!--todo:: разобраться с этой поебенью, вынести в отдельный компонент, хз что с ней делать, но делать что-то нужно-->
  <!--@before-enter="stopBodyOverflow"-->
  <!--@after-enter="allowBodyOverflow"-->
  <!--@before-leave="stopBodyOverflow"-->
  <!--@after-leave="allowBodyOverflow"-->
  <transition-group
      name="toast-notification"
      tag="div"
      class="toast-notifications"
  >
    <!--:title="item.title"-->
    <AToast
        v-for="(item, idx) in toasts"
        :key="item.id"
        :id="item.id"
        :type="item.type"
        :message="item.message"
        :auto-close="item.autoClose"
        :duration="item.duration"
        @close="closeToast(item.id)"
    ></AToast>
  </transition-group>
</template>

<style scoped>
.a-toasts {}

/*todo:: эту хрень тоже куда-то вынести*/
.toast-notifications {
  z-index: 100;
  position: absolute;
  /*top: 0.5rem;*/
  /*right: 0.5rem;*/
  display: flex;
  flex-direction: column-reverse;
  gap: 0.8rem;
}

.toast-notification-enter-active {
  animation: toast-fade-in 0.5s ease-in-out;
}
.toast-notification-leave-active {
  animation: toast-fade-in 0.5s ease-in-out reverse;
}

@keyframes toast-fade-in {
  from {
    opacity: 0;
    transform: scale(0.4);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
