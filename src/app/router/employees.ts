export default [
  {
    path: "/",
    name: "employees",
    component: () =>
      import("@/app/views/employees/ViewEmployees/ViewEmployees.vue"),
  },
];
