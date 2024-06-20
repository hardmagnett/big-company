<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {removeToast, toasts} from "@/a-library/vue-plugins/toast";

const closeToast = (toastId: string)=>{
  // Не забыть раскомментить
  removeToast(toastId);
}
const rootNode = ref<HTMLElement | null>(null)

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

    <!--todo:: потот этот transition обьязательно в гисты!-->
    <TransitionGroup name="list" tag="div" class="a-toasts__transition-group">
      <div
          v-for="(item) in toasts.toReversed()"
          :key="item.id"
          class="a-toasts__transition-item"
      >
        <AToast

            :id="item.id"
            :type="item.type"
            :message="item.message"
            :auto-close="item.autoClose"
            :duration="item.duration"
            @close="closeToast(item.id)"
        ></AToast>
      </div>
    </TransitionGroup>
  </div>

</template>

<style scoped>
/*todo:: дать нормальные имена классам для transition*/
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all var(--time-short) ease;
  /*transition: all 2s ease;*/
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}

.a-toasts {
  position: absolute;
  background-color: transparent;

  position-anchor: --anchor-body;
  right: anchor(right);
  top: anchor(top);
  left: auto;


  /*pointer-events: none;*/
  width: 500px;
  max-width: 100vw;
  /*max-height: 100dvh;*/
  height: 100dvh;
  overflow: hidden;
  display: block;
  /*display: flex;*/
  /*flex-flow: column-reverse nowrap;*/
  /*flex-flow: column nowrap;*/
  /*gap: var(--gap);*/
  padding: var(--gap);
  outline: none;
  outline: 3px solid darkred;
  border: none;

  margin: 0;
  /*padding: 0;*/

  /*Без этой обертки */
  /*абсолютно спозиционированные элементы*/
  /*внутри абсолютно спозиционированнго контейнера (popover)*/
  /*Улетают нафиг непонятно куда*/
  .a-toasts__transition-group {
    /*Без этой обертки */
    /*при использовании компонента в слоте */
    /*при удалении чипса*/
    /*vue нивкакую не хочет ставить стиль move остальным элементам.*/
    /*Нужно чтобы в слоте был элемент а не компонент*/
    /*display: flex;*/
    /*flex-flow: column nowrap;*/
    /*gap: var(--gap);*/
    .a-toasts__transition-item {
      margin-bottom: var(--gap);

      .a-toast {
        /*transition: 1.5s;*/
        flex: 0 0 auto;
        pointer-events: auto;
      }
    }
  }

}


</style>

