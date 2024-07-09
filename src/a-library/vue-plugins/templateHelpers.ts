import type { App } from "vue";

export type DebugVarFunctionDeclaration = (variable: any) => any;

export const debugVar: DebugVarFunctionDeclaration = (variable) => {
  if (variable === null) {
    return 'null'
  }
  if (variable === undefined) {
    return 'undefined'
  }
  return variable
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$debugVar = debugVar;
  },
};
