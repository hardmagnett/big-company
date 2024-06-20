import type { App } from "vue";

import { useResponsiveStore } from "@/a-library/stores/responsive";

export default {
  install: (app: App) => {
    app.config.globalProperties.$responsiveVariables = useResponsiveStore();
  },
};
