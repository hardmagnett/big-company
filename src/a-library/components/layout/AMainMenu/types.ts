import type { InjectionKey } from 'vue'

// todo::  Если это останется интерфейсом, то переименовать в IMenuItem
interface IMenuItem {
  id: number
  title: string
  icon: string
  route?: {
    to: string
  }
  children?: Array<IMenuItem>
}

const menuItemsInjectionKey = Symbol() as InjectionKey<Array<IMenuItem>>

export type {IMenuItem}
export {menuItemsInjectionKey}

