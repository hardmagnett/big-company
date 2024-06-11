import type { IMenuItem } from "@/a-library/components/layout/AMainMenu/types";

let i = 0;

const menuItems: Array<IMenuItem> = [
  {
    id: i++,
    title: "Задачи",
    icon: "mdi-view-dashboard-variant",
    route: {
      to: "tasks",
    },
  },
  {
    id: i++,
    title: "Сотрудники",
    icon: "mdi-account-group",
    route: {
      to: "employees",
    },
  },
  {
    id: i++,
    title: "Компоненты",
    icon: "mdi-vuejs",
    children: [
      {
        id: i++,
        title: "Заголовки",
        icon: "mdi-format-size",
        route: {
          to: "headers",
        },
      },
      {
        id: i++,
        title: "Кнопки",
        icon: "mdi-button-cursor",
        route: {
          to: "buttons",
        },
      },
      {
        id: i++,
        title: "Элементы форм",
        icon: "mdi-form-textbox",
        route: {
          to: "inputs",
        },
      },
      {
        id: i++,
        title: "Сетка",
        icon: "mdi-view-grid",
        route: {
          to: "column-grid",
        },
      },
      {
        id: i++,
        title: "Блоки",
        icon: "mdi-square",
        route: {
          to: "blocks",
        },
      },
    ],
  },
];

export default menuItems;
