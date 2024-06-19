<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {removeToast, toasts} from "@/a-library/vue-plugins/toast";

const closeToast = (toastId: string)=>{
  // Не забыть раскомментить
  removeToast(toastId);
}
const rootNode = ref<HTMLElement | null>(null)

onMounted(()=>{
  rootNode.value?.showPopover()
})

</script>

<template>
  <!--<div class="a-toasts">-->
  <!--</div>-->


  <!--todo:: разобраться с этой поебенью, вынести в отдельный компонент, хз что с ней делать, но делать что-то нужно-->
  <!--@before-enter="stopBodyOverflow"-->
  <!--@after-enter="allowBodyOverflow"-->
  <!--@before-leave="stopBodyOverflow"-->
  <!--@after-leave="allowBodyOverflow"-->
  <!--<transition-group-->
  <!--    name="toast-notification"-->
  <!--    tag="div"-->
  <!--    class="toast-notifications"-->
  <!--&gt;-->
  <!--  &lt;!&ndash;:title="item.title"&ndash;&gt;-->
  <!--  <AToast-->
  <!--      v-for="(item) in toasts"-->
  <!--      :key="item.id"-->
  <!--      :id="item.id"-->
  <!--      :type="item.type"-->
  <!--      :message="item.message"-->
  <!--      :auto-close="item.autoClose"-->
  <!--      :duration="item.duration"-->
  <!--      @close="closeToast(item.id)"-->
  <!--  ></AToast>-->
  <!--</transition-group>-->
  <!--<div popover>-->
  <!--  <p>this is popover</p>-->
  <!--</div>-->

  <!--popover-->
  <!--data-container="body"-->
  <!--id="my-popover"-->


  <div
      ref="rootNode"
      class="a-toasts"
      popover

  >
    <AToast
        v-for="(item) in toasts.toReversed()"
        :key="item.id"
        :id="item.id"
        :type="item.type"
        :message="item.message"
        :auto-close="item.autoClose"
        :duration="item.duration"
        @close="closeToast(item.id)"
    ></AToast>
  </div>
</template>

<style scoped>
.a-toasts {

  &::backdrop {
    /*background-color: rgb(255 255 255 / 0.5);*/
    /*background-color: red;*/
  }

  background-color: transparent;
  pointer-events: none;
  width: 500px;
  max-width: 100vw;
  max-height: 100dvh;
  overflow: hidden;
  display: flex;
  /*flex-flow: column-reverse nowrap;*/
  flex-flow: column nowrap;
  gap: var(--gap);
  padding: var(--gap);
  outline: none;
  outline: 3px solid darkred;
  border: none;
  .a-toast {
    flex: 0 0 auto;
    pointer-events: auto;
  }
}

/*todo:: эту хрень тоже куда-то вынести*/
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
