import createUUID from '@/a-library/helpers/language/createUUID';

import { ref } from "vue";

export interface Notification {
  id: string;
  type: string;
  message: string;
  autoClose: boolean;
  duration: number;
}

// todo:: заменить интерфейс на тот, который я сделал. Мне мой больше нравится.
export type CreateNotification = {
  (options: {
    type?: string;
    message?: string;
  }): void;
};

// todo:: упростить. Постараться избавиться от этого default options заменой на дефолтовые параметры CreateNotification
const defaultNotificationOptions = {
  type: "info",
  message:
    "Ooops! A message was not provided.",
  autoClose: true,
  duration: 5,
};

export default function useAToast() {
  const notifications = ref<Notification[]>([])
  // function to create notification
  const createNotification: CreateNotification = (options) => {
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
