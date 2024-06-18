import type { App } from "vue";

type ToastFunction = (
  text: string,
  options?: {
    type?: 'info' | 'success' | 'warning' | 'error'
}) => void

export type {
  ToastFunction
}

export default {
  install: (app: App) => {

    const toaster: ToastFunction = (
      text,
      options= {type: 'info'}
    ) => { // возвращаемый тип можно не аннотировать, так как это уже сделано в сигнатуре.
      console.log(text)
      console.log(options.type)
    }

    app.config.globalProperties.$toast = toaster
  },
};
