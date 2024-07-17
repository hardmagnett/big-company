import { createPinia } from "pinia";
import { createORM } from "pinia-orm";

export default {
  install: () => {
    createPinia().use(createORM());
  },
};
