import { createPinia } from 'pinia'
import { createORM } from 'pinia-orm'


export default {
  // install: (app: App) => {
  install: () => {
    // app.config.globalProperties.$responsiveVariables = useResponsiveStore();
    const pinia = createPinia().use(createORM())
  },
};
