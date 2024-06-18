/**
 * Этот файл нужен, чтобы добавлять общедоступные свойства во все компоненты.
 * Например, при помощи vue-плагинов.
 *
 * В документации написано было что этот файл нужно подключить в tsconfig.
 * https://vuejs.org/guide/typescript/options-api.html#augmenting-global-properties
 * Удивительно, но я этот файл вообще никуда не подключал,
 * и vue-tsc проходит без ошибок.
 * Возможно возникнут проблемы, когда я сделаю ещё одно расширение для globalProperties.
 */

import { useResponsiveStore } from "@/a-library/stores/responsive";
import type {CreateToastFunctionDeclaration} from '@/a-library/vue-plugins/toast';

const valueWithTypeOfUseResponsiveStore = useResponsiveStore();
declare module "vue" {
  interface ComponentCustomProperties {
    $responsiveVariables: typeof valueWithTypeOfUseResponsiveStore;
    $toast: CreateToastFunctionDeclaration
  }
}

/**
 * Так-же в документации было написано, что обязательно нужно сделать пустой экспорт.
 * Но у меня заработало без пустого экспорта.
 */
// export {}
