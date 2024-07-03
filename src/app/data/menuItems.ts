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
        title: "Типографика",
        icon: "mdi-format-size",
        route: {
          to: "typo",
        },
      },
      {
        id: i++,
        title: "Цвета",
        icon: "mdi-palette",
        route: {
          to: "colors",
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
        title: "Форма",
        icon: "mdi-page-next-outline",
        route: {
          to: "form",
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
      {
        id: i++,
        title: "Таблицы",
        icon: "mdi-table",
        route: {
          to: "tables",
        },
      },
      {
        id: i++,
        title: "Диалоговое окно",
        icon: "mdi-window-maximize",
        route: {
          to: "dialog",
        },
      },
      {
        id: i++,
        title: "Тосты",
        icon: "mdi-toaster",
        route: {
          to: "toasts",
        },
      },
      {
        id: i++,
        title: "Эксперименты",
        icon: "mdi-test-tube",
        route: {
          to: "experiments",
        },
      }
    ],
  },
];

export default menuItems;
