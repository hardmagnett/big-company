interface MenuItem {
  id: number
  title: string
  route?: {
    to: string
  }
  children?: Array<MenuItem>
}

export type {MenuItem}
