import type { App } from "vue";

import useAToast from "@/a-library/components/other/AToast/useAToast";

const {
  createNotification,
} = useAToast();


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
