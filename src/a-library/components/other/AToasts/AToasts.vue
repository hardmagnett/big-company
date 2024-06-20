<script setup lang="ts">
import { ref } from "vue";
import { removeToast, toasts } from "@/a-library/vue-plugins/toast";

const closeToast = (toastId: string) => {
  removeToast(toastId);
};
const rootNode = ref<HTMLElement | null>(null);
const hidePopoverIfThereIsNoToasts = () => {
  if (!toasts.value.length) {
    rootNode.value?.hidePopover();
  }
};
const showPopoverIfNotShown = () => {
  // Не нашел способа как проверить включен-ли он или нет.
  // Поэтому включаем всегда при появлении нового элемента.
  rootNode.value?.showPopover();
};
</script>

<template>
  <div ref="rootNode" class="a-toasts" popover="manual">
    <TransitionGroup
      name="a-toasts__transition-item"
      tag="div"
      class="a-toasts__transition-group"
      @after-leave="hidePopoverIfThereIsNoToasts"
      @before-enter="showPopoverIfNotShown"
    >
      <div
        v-for="item in toasts.toReversed()"
        :key="item.id"
        class="a-toasts__transition-item"
      >
        <AToast
          :id="item.id"
          :type="item.type"
          :message="item.message"
          :auto-close="item.autoClose"
          :duration="item.duration"
          :printAsHTML="item.printAsHTML"
          @close="closeToast(item.id)"
        ></AToast>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.a-toasts {
  position: absolute;
  background-color: transparent;

  position-anchor: --anchor-body;
  right: anchor(right);
  top: anchor(top);
  left: auto;

  pointer-events: none;
  width: 500px;
  max-width: 100vw;
  /*Высота на весь экран, */
  /*чтобы при убирании тоста, пока он абсолютный,чтобы он не обрезался снизу*/
  height: 100dvh;
  overflow: hidden;

  padding: 0;
  outline: none;
  border: none;

  margin: 0;

  /*Без этой обертки */
  /*абсолютно спозиционированные элементы*/
  /*внутри абсолютно спозиционированнго контейнера (popover)*/
  /*Улетают нафиг непонятно куда*/
  .a-toasts__transition-group {
    padding: var(--gap);

    /*Без этой обертки */
    /*при использовании компонента в слоте */
    /*при удалении чипса*/
    /*vue нивкакую не хочет ставить стиль move остальным элементам.*/
    /*Нужно чтобы в слоте был элемент а не компонент*/
    .a-toasts__transition-item {
      margin-bottom: var(--gap);
      .a-toast {
        pointer-events: auto;
      }
    }
  }
}

.a-toasts__transition-item-move,
.a-toasts__transition-item-enter-active,
.a-toasts__transition-item-leave-active {
  transition: all var(--time-short) ease;
}
.a-toasts__transition-item-enter-from,
.a-toasts__transition-item-leave-to {
  opacity: 0;
  transform: translateX(90px);
}
.a-toasts__transition-item-leave-active {
  position: absolute;
  /*Чтобы не меняло ширину, становясь абсолютным.*/
  width: calc(100% - (var(--gap) * 2));
}
</style>
