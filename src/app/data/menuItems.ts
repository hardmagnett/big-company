import type {MenuItem} from "@/a-library/components/layout/AMainMenu/types";

let i = 0
const menuItems = [
  {
    id: i++,
    title: 'ЗадачиZZZ',
    icon: 'mdi-view-dashboard-variant',
    route: {
      to: 'tasks'
    },
  } as MenuItem ,
  {
    id: i++,
    title: 'Сотрудники',
    icon: 'mdi-account-group',
    route: {
      to: 'employees'
    },
  } as MenuItem ,
  {
    id: i++,
    title: 'Компоненты',
    icon: 'mdi-vuejs',
    children: [
      {
        id: i++,
        title: 'Заголовки',
        icon: 'mdi-format-size',
        route: {
          to: 'headers'
        },
      } as MenuItem ,
      {
        id: i++,
        title: 'Кнопки',
        icon: 'mdi-button-cursor',
        route: {
          to: 'buttons'
        },
      } as MenuItem ,
      {
        id: i++,
        title: 'Элементы форм',
        icon: 'mdi-form-textbox',
        route: {
          to: 'inputs'
        },
      } as MenuItem,
      {
        id: i++,
        title: 'Сетка',
        icon: 'mdi-view-grid',
        route: {
          to: 'column-grid'
        },
      } as MenuItem,
      {
        id: i++,
        title: 'Блоки',
        icon: 'mdi-square',
        route: {
          to: 'blocks'
        },
      } as MenuItem,
    ]
  },
]

export default menuItems
