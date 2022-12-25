interface MenuItem {
  id: number
  title: string
  icon: string
  route?: {
    to: string
  }
  children?: Array<MenuItem>
}

export type {MenuItem}
