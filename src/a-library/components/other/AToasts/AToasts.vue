<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {removeToast, toasts} from "@/a-library/vue-plugins/toast";

const closeToast = (toastId: string)=>{
  // Не забыть раскомментить
  removeToast(toastId);
}
const rootNode = ref<HTMLElement | null>(null)
// todo:: удалить shit и всё что с этим связано
const shitNode = ref<HTMLElement | null>(null)

onMounted(()=>{
  rootNode.value?.showPopover()
  // shitNode.value?.showPopover()
})

</script>

<template>
  <div ref="shitNode" class="boat" popoverZ>this is boat</div>
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
</template>

<style scoped>
.boat {
  position: absolute;
  position-anchor: --anchor-body;
  /*position-anchor: --anchor-app;*/
  top: anchor(top);
  right: anchor(right);

  /*top: anchor(--anchor-body top);*/
  /*right: anchor(--anchor-body right);*/

  background: #333;
  width: 250px;
  height: 100px;

  /*display: block;*/
}
.a-toasts {

  position: absolute;
  /*  anchor reference  */
  position-anchor: --anchor-body;
  top: anchor(top);
  right: anchor(right);
  inset: auto;

  background-color: transparent;

  /*pointer-events: none;*/
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
