export default [
  {
    path: "/employees",
    name: "employees",
    component: () =>
      import("@/app/views/employees/ViewEmployees/ViewEmployees.vue"),
  },
];
