import type { App } from "vue";


// todo:: навести в этом файле порядок. А-то всё как-то через жопу.
// todo:: и разобраться с импортами, что defalut, а что нет

// todo:: перенести из language в strings например
import createUUID from '@/a-library/helpers/language/string/createUUID';

import { ref } from "vue";

export interface Notification {
  id: string;
  type: string;
  message: string;
  autoClose: boolean;
  duration: number;
}


// todo:: упростить. Постараться избавиться от этого default options заменой на дефолтовые параметры CreateNotification
const defaultNotificationOptions = {
  type: "info",
  message:
    "Ooops! A message was not provided.",
  autoClose: true,
  duration: 5,
};


export const notifications = ref<Notification[]>([])

const createNotification: ToastFunction = (
  options
) => {
  const _options = Object.assign({ ...defaultNotificationOptions }, options);
  notifications.value.push({
    id: createUUID(),
    ..._options,
    // ...options,
  })
}

export const removeNotifications = (id: string) => {
  const index = notifications.value.findIndex((item) => item.id === id);
  if (index !== -1) notifications.value.splice(index, 1);
};

type ToastFunction =
  (
    options: {
      type?: string;
      message?: string;
      autoClose?: boolean;
      duration?: number;
  })=> void

export type {
  ToastFunction
}

export default {
  install: (app: App) => {
    const toast: ToastFunction = createNotification

    app.config.globalProperties.$toast = toast
  },
};
