import type {App} from "vue";
import i18next from 'i18next';

export default {
  install: (app: App) => {
    i18next.init({
      lng: 'en', // if you're using a language detector, do not define the lng option
      debug: true,
      resources: {
        en: {
          translation: {
            "key": "hello world"
          }
        }
      }
    });
    // app.config.globalProperties.$toast = createToast;
  },
};
