const pathToComponents = "/components/";

export default [
  {
    path: `${pathToComponents}headers`,
    name: "headers",
    component: () =>
      import("@/a-library/views/component-list/ViewTypo/ViewTypo.vue"),
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
];
