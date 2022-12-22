export default [
  {
    path: '/employees',
    name: 'employees',
    component: () => import('@/views/Employees.vue')
  },
  {
    path: '/employees/create',
    name: 'employeeCreate',
    component: () => import('@/views/employees/EmployeeAddOrEdit.vue')
  },
  {
    path: '/employees/:employeeId',
    name: 'employeeEdit',
    component: () => import('@/views/employees/EmployeeAddOrEdit.vue')
  },
]
