import type { App } from "vue";

import useAToast, {
  createNotificationInjectionKey,
  shitKey,
} from "@/a-library/components/other/AToast/useAToast";

const {
  notifications,
  createNotification,
  removeNotifications,
} = useAToast();

// type ToastFunction = (
//   text: string,
//   options?: {
//     type?: 'info' | 'success' | 'warning' | 'error'
// }) => void

type ToastFunction =
  (options: {
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
    const toaster: ToastFunction = createNotification

    // const toaster: ToastFunction = (
    //   text,
    //   options= {type: 'info'}
    // ) => { // возвращаемый тип можно не аннотировать, так как это уже сделано в сигнатуре.
    //   console.log(text)
    //   console.log(options.type)
    // }

    app.config.globalProperties.$toast = toaster
  },
};
