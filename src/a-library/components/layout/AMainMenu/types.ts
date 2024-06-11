import type { InjectionKey } from "vue";

interface IMenuItem {
  id: number;
  title: string;
  icon: string;
  route?: {
    to: string;
  };
  children?: Array<IMenuItem>;
}

const menuItemsInjectionKey = Symbol() as InjectionKey<Array<IMenuItem>>;

export type { IMenuItem };
export { menuItemsInjectionKey };
