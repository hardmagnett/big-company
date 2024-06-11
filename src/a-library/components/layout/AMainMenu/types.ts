import type { InjectionKey } from 'vue'

// todo::  Если это останется интерфейсом, то переименовать в IMenuItem
interface MenuItem {
  id: number
  title: string
  icon: string
  route?: {
    to: string
  }
  children?: Array<MenuItem>
}

const menuItemsInjectionKey = Symbol() as InjectionKey<Array<MenuItem>>

export type {MenuItem}
export {menuItemsInjectionKey}

