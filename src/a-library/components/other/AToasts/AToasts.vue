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
  // Чтобы popover реально заработал, нужно его включить js-ом.
  // todo:: возможно переделать чтобы он показывался пока есть элементы, и скрывался когда их нет
  rootNode.value?.showPopover()
})

</script>

<template>

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

  position: absolute;
  background-color: transparent;

  /*top: 0;*/
  /*right: 0;*/

  position-anchor: --anchor-body;
  right: anchor(right);
  top: anchor(top);
  left: auto;


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

  margin: 0;
  /*padding: 0;*/

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

<!--Вынес нахуй из шаблона, чтоб не мешало скроллить.-->
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
<!--&lt;!&ndash;:title="item.title"&ndash;&gt;-->
<!--<AToast-->
<!--    v-for="(item) in toasts"-->
<!--    :key="item.id"-->
<!--    :id="item.id"-->
<!--    :type="item.type"-->
<!--    :message="item.message"-->
<!--    :auto-close="item.autoClose"-->
<!--    :duration="item.duration"-->
<!--    @close="closeToast(item.id)"-->
<!--&gt;</AToast>-->
<!--</transition-group>-->
<!--<div popover>-->
<!--<p>this is popover</p>-->
<!--</div>-->
