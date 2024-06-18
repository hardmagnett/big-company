import createUUID from '@/a-library/helpers/language/createUUID';

import { ref } from "vue";
import type { InjectionKey } from 'vue'



export interface Notification {
  id: string;
  type: string;
  message: string;
  autoClose: boolean;
  duration: number;
}

// todo:: эта хрень повторяется в 2-х местах. Сделать чтобы использовалась одна.
export type CreateNotification =
  (options: {
    type?: string;
    message?: string;
    autoClose?: boolean;
    duration?: number;
  })=> void

const createNotificationInjectionKey = Symbol() as InjectionKey<CreateNotification>
export {createNotificationInjectionKey}
const shitKey = Symbol() as InjectionKey<number>
export {shitKey}



// todo:: упростить. Постараться избавиться от этого default options заменой на дефолтовые параметры CreateNotification
const defaultNotificationOptions = {
  type: "info",
  message:
    "Ooops! A message was not provided.",
  autoClose: true,
  duration: 5,
};


const notifications = ref<Notification[]>([])

const createNotification: CreateNotification = (
  options
) => {
  const _options = Object.assign({ ...defaultNotificationOptions }, options);
  notifications.value.push(
    // todo:: вот эта конструкция какая-то кривая. Упростить.
    ...[
      {
        id: createUUID(),
        ..._options,
      },
    ]
  )
}

export default function useAToast() {
  const removeNotifications = (id: string) => {
    const index = notifications.value.findIndex((item) => item.id === id);
    if (index !== -1) notifications.value.splice(index, 1);
  };

  return {
    notifications,
    createNotification,
    removeNotifications,
  };

}
