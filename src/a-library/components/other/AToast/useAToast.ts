import createUUID from '@/a-library/helpers/language/createUUID';

import { ref } from "vue";
import type {ToastFunction} from '@/a-library/vue-plugins/toast';



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


const notifications = ref<Notification[]>([])

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
