<script setup lang="ts">
import { RouterView } from "vue-router";


// Подключение.
// todo:: хорошо-бы было сделать это где-то в bootstap.ts
import { provide } from "vue";
import useAToast, {
  createNotificationInjectionKey,
  shitKey,
} from "@/a-library/components/other/AToast/useAToast";
import AToast from "@/a-library/components/other/AToast/AToast.vue";
import type { CreateNotification } from "@/a-library/components/other/AToast/useAToast";

const {
  notifications,
  createNotification,
  removeNotifications,
} = useAToast();

// todo:: здесь возможно сделать через $
provide(createNotificationInjectionKey, createNotification)
provide(shitKey, 666)


</script>

<template>
  <div class="app">
    <AContainer>
      <RouterView />
    </AContainer>
  </div>
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
        v-for="(item, idx) in notifications"
        :key="item.id"
        :id="item.id"
        :type="item.type"
        :message="item.message"
        :auto-close="item.autoClose"
        :duration="item.duration"
        @close="
          () => {
            removeNotifications(item.id);
          }
        "
    ></AToast>
  </transition-group>
</template>

<style scoped>
.app {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;

  height: 100%;
  position: absolute;

  .a-container {
    flex: 1 1 auto;
    overflow-y: auto; /*Не помню зачем это. Хорошо-бы узнать*/
  }
}

/*todo:: эту хрень тоже куда-то вынести*/
.toast-notifications {
  z-index: 100;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
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
