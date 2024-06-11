const pathToComponents = "/components/";

export default [
  {
    path: `${pathToComponents}headers`,
    name: "headers",
    component: () =>
      import("@/a-library/views/component-list/Headers/ViewHeaders.vue"),
  },
  {
    path: `${pathToComponents}buttons`,
    name: "buttons",
    component: () =>
      import("@/a-library/views/component-list/Buttons/ViewButtons.vue"),
  },
  {
    path: `${pathToComponents}inputs`,
    name: "inputs",
    component: () =>
      import("@/a-library/views/component-list/Inputs/ViewInputs.vue"),
  },
  {
    path: `${pathToComponents}column-grid`,
    name: "column-grid",
    component: () =>
      import("@/a-library/views/component-list/ColumnGrid/ViewColumnGrid.vue"),
  },
  {
    path: `${pathToComponents}blocks`,
    name: "blocks",
    component: () =>
      import("@/a-library/views/component-list/Blocks/ViewBlocks.vue"),
  },
];
