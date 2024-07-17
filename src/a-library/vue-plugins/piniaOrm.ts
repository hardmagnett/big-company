import { createPinia } from 'pinia'
import { createORM } from 'pinia-orm'


export default {
  install: () => {
    const pinia = createPinia().use(createORM())
  },
};
