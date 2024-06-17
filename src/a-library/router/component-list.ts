const pathToComponents = "/components/";

export default [
  {
    path: `${pathToComponents}typo`,
    name: "typo",
    component: () =>
      import("@/a-library/views/component-list/ViewTypo/ViewTypo.vue"),
  },
  {
    path: `${pathToComponents}colors`,
    name: "colors",
    component: () =>
      import("@/a-library/views/component-list/ViewColors/ViewColors.vue"),
  },
  {
    path: `${pathToComponents}buttons`,
    name: "buttons",
    component: () =>
      import("@/a-library/views/component-list/ViewButtons/ViewButtons.vue"),
  },
  {
    path: `${pathToComponents}inputs`,
    name: "inputs",
    component: () =>
      import("@/a-library/views/component-list/ViewInputs/ViewInputs.vue"),
  },
  {
    path: `${pathToComponents}column-grid`,
    name: "column-grid",
    component: () =>
      import(
        "@/a-library/views/component-list/ViewColumnGrid/ViewColumnGrid.vue"
      ),
  },
  {
    path: `${pathToComponents}blocks`,
    name: "blocks",
    component: () =>
      import("@/a-library/views/component-list/ViewBlocks/ViewBlocks.vue"),
  },
  {
    path: `${pathToComponents}tables`,
    name: "tables",
    component: () =>
      import("@/a-library/views/component-list/ViewTables/ViewTables.vue"),
  },
  {
    path: `${pathToComponents}dialog`,
    name: "dialog",
    component: () =>
      import("@/a-library/views/component-list/ViewDialog/ViewDialog.vue"),
  },
  {
    path: `${pathToComponents}toasts`,
    name: "toasts",
    component: () =>
      import("@/a-library/views/component-list/ViewToasts/ViewToasts.vue"),
  },
];
