import type {App} from "vue";
import {ref} from "vue";
import createUUID from '@/a-library/helpers/language/string/createUUID';

interface Toast {
  id: string;
  type: string;
  message: string;
  autoClose: boolean;
  duration: number;
  printAsHTML: boolean;
}

const defaultToastOptions = {
  type: "info",
  message: "Текст сообщения не указан",
  autoClose: true,
  duration: 5,
  printAsHTML: false
};


const toasts = ref<Toast[]>([])

type CreateToastFunctionDeclaration =
  (
    options: {
      type?: string;
      message?: string;
      autoClose?: boolean;
      duration?: number;
      printAsHTML?: boolean;
    }
  )=> void

const createToast: CreateToastFunctionDeclaration = (
  options
) => {
  const _options = Object.assign({ ...defaultToastOptions }, options);
  const newToast: Toast = {
    id: createUUID(),
    ..._options,
  }
  toasts.value.push(newToast)
}

const removeToast = (id: string) => {
  const index = toasts.value.findIndex((item) => item.id === id);
  if (index !== -1) toasts.value.splice(index, 1);
};



export type {
  Toast,
  CreateToastFunctionDeclaration
}
export {
  toasts,
  removeToast
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$toast = createToast
  },
};
