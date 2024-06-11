import type { InjectionKey } from 'vue'

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

