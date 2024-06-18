<script setup lang="ts">
import { RouterView } from "vue-router";


// Подключение.
// todo:: хорошо-бы было сделать это где-то в bootstap.ts
import { provide, ref, reactive } from "vue";
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
  // stopBodyOverflow,
  // allowBodyOverflow,
} = useAToast();

// todo:: здесь возможно сделать через $
// provide("create-notification", createNotification);
// provide(Symbol() as InjectionKey<string>, createNotification);
// const key = Symbol() as CreateNotification<string>
// provide(key, createNotification);

// provide('createNotification', createNotification)
provide(createNotificationInjectionKey, createNotification)
// provide(createNotificationInjectionKey, reactive(createNotification))
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
</style>
